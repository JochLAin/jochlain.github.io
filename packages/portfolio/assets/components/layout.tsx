import type { SyntheticEvent } from "react";
import useDebounce from "@assets/hooks/useDebounce";
import React, { useEffect, useRef, useState } from "react";
import useLayout, { LayoutContext } from "../hooks/useLayout";

export default function Grid(props: { children: any, grid: string[][], components: { [key: string]: any } }) {
  const [lines, setLines] = useState<number[]>(Array(props.grid.length).fill(0));
  const fullscreen = useRef<boolean>(true);
  const debounceFullscreen = useDebounce();
  const debounceTouchEnd = useDebounce();
  const debounceWheel = useDebounce();

  const store = {
    getCoordinates: (id: string): [number, number] => {
      for (let _y = 0; _y < props.grid.length; _y++) {
        for (let _x = 0; _x < props.grid[_y].length; _x++) {
          if (props.grid[_y][_x] === id) {
            return [_y, _x];
          }
        }
      }
      return [0, 0];
    },
    goDown: (y: number) => {
      if (y < props.grid.length) store.goTo(y + 1, lines[y + 1], true);
    },
    goLeft: (y: number, x: number) => {
      if (x > 0) store.goTo(y, x - 1, true);
    },
    goRight: (y: number, x: number) => {
      if (x < props.grid[y].length) store.goTo(y, x + 1, true);
    },
    goUp: (y: number) => {
      if (y > 0) store.goTo(y - 1, lines[y - 1], true);
    },
    goTo: (y: number, x: number, smooth: boolean = false) => {
      if (props.grid?.[y]?.[x]) {
        setLines(lines.map((_x, _y) => _y === y ? x : _x));
        if (!fullscreen.current) store.toggle();
        const width = document.body.clientWidth;
        const height = document.body.clientHeight;

        document.querySelector('.layout')?.scrollTo({ left: 0, top: height * y, behavior: smooth ? 'smooth' : 'auto' });
        document.querySelector(`.layout .line:nth-child(${y + 1})`)?.scrollTo({ left: width * x, top: 0, behavior: smooth ? 'smooth' : 'auto' });
        history?.replaceState({}, '', `#${props.grid[y][x]}`);
        setTimeout(() => {
          document.getElementById(props.grid[y][x])?.querySelector('section')?.focus();
        }, 80);
      }
    },
    toggle: () => {
      if (!fullscreen.current) {
        document.body.classList.remove('overview');
        fullscreen.current = true;
      } else {
        document.body.classList.add('overview');
        debounceFullscreen(() => {
          fullscreen.current = false;
        }, 150);
      }
    },
  };

  useEffect(() => {
    let bufferTouchId = 0;
    let bufferTouchX = 0;
    let bufferTouchY = 0;

    const onKeyUp = (evt: KeyboardEvent) => {
      const screen = document.getElementById(document.location.hash.slice(1) || 'me');
      const [y, x] = store.getCoordinates(screen?.id || 'me');

      if ('Escape' === evt.key) {
        evt.preventDefault();
        store.toggle();
      } else if (!evt.shiftKey && 'PageDown' === evt.key) {
        evt.preventDefault();
        store.goDown(y);
      } else if (!evt.shiftKey && 'PageUp' === evt.key) {
        evt.preventDefault();
        store.goUp(y);
      } else if (evt.shiftKey && 'PageDown' === evt.key) {
        evt.preventDefault();
        store.goRight(y, x);
      } else if (evt.shiftKey && 'PageUp' === evt.key) {
        evt.preventDefault();
        store.goLeft(y, x);
      } else if ('ArrowDown' === evt.key) {
        const article = screen?.querySelector('article');
        const section = screen?.querySelector('section');
        if (article && (!section || (section.scrollTop + document.body.clientHeight) >= article.offsetHeight)) {
          evt.preventDefault();
          store.goDown(y);
        }
      } else if ('ArrowUp' === evt.key) {
        const article = screen?.querySelector('article');
        const section = screen?.querySelector('section');
        if (article && (!section || section.scrollTop === 0)) {
          evt.preventDefault();
          store.goUp(y);
        }
      } else if ('ArrowRight' === evt.key) {
        evt.preventDefault();
        store.goRight(y, x);
      } else if ('ArrowLeft' === evt.key) {
        evt.preventDefault();
        store.goLeft(y, x);
      }
    };

    const onScroll = (evt: WheelEvent) => {
      debounceWheel(() => {
        const target = evt.target as Element;
        const screen = target.matches('.screen') ? target : target.closest('.screen');
        if (screen) {
          const section = screen.querySelector('section');
          const article = screen.querySelector('article');
          if (article) {
            const [y, x] = store.getCoordinates(screen.id);

            if ((!evt.shiftKey && evt.deltaY < 0) || (evt.shiftKey && evt.deltaX < 0)) {
              if (!section || section.scrollTop === 0) {
                store.goUp(y);
              }
            } else if ((!evt.shiftKey && evt.deltaY > 0) || (evt.shiftKey && evt.deltaX > 0)) {
              if (!section || (section.scrollTop + document.body.clientHeight) >= article.offsetHeight) {
                store.goDown(y);
              }
            } else if ((evt.shiftKey && evt.deltaY < 0) || (!evt.shiftKey && evt.deltaX < 0)) {
              store.goLeft(y, x);
            } else if ((evt.shiftKey && evt.deltaY > 0) || (!evt.shiftKey && evt.deltaX > 0)) {
              store.goRight(y, x);
            }
          }
        }
      }, 30);
    };

    const onTouchStart = (evt: TouchEvent) => {
      bufferTouchId = evt.targetTouches[0].identifier;
      bufferTouchX = evt.targetTouches[0].pageX;
      bufferTouchY = evt.targetTouches[0].pageY;
    };

    const onTouchMove = (evt: TouchEvent) => {
      evt.preventDefault();
    };

    const onTouchEnd = (evt: TouchEvent) => {
      debounceTouchEnd(() => {
        const MIN_DELTA = 40;
        const target = evt.target as Element;
        const screen = target.matches('.screen') ? target : target.closest('.screen');
        if (screen) {
          const article = screen.querySelector('article');
          if (article) {
            const [y, x] = store.getCoordinates(screen.id);
            const touch = Array.from(evt.changedTouches).find((touch) => touch.identifier === bufferTouchId);
            if (touch) {
              const deltaX = touch.pageX - bufferTouchX;
              const deltaY = touch.pageY - bufferTouchY;

              if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > MIN_DELTA) {
                  store.goLeft(y, x);
                } else if (deltaX < -MIN_DELTA) {
                  store.goRight(y, x);
                }
              } else {
                if (deltaY > MIN_DELTA) {
                  if (screen.scrollTop === 0) {
                    store.goUp(y);
                  }
                } else if (deltaY < -MIN_DELTA) {
                  if ((screen.scrollTop + document.body.clientHeight) >= article.offsetHeight) {
                    store.goDown(y);
                  }
                }
              }
            }
          }
        }
      }, 50);
    };

    fullscreen.current = !document.body.classList.contains('overview');
    window.addEventListener('wheel', onScroll, { passive: false }); // modern desktop
    window.addEventListener('touchstart', onTouchStart, { capture: false }); // mobile
    window.addEventListener('touchmove', onTouchMove, { capture: false }); // mobile
    window.addEventListener('touchend', onTouchEnd, { capture: false }); // mobile
    document.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('wheel', onScroll); // modern desktop
      window.removeEventListener('touchstart', onTouchStart); // mobile
      window.removeEventListener('touchmove', onTouchMove); // mobile
      window.removeEventListener('touchend', onTouchEnd); // mobile
      document.removeEventListener('keyup', onKeyUp);
    }
  }, [store.toggle]);

  return <LayoutContext.Provider value={store}>
    {props.children}
    <div className="layout" onScroll={(evt) => { evt.preventDefault(); }}>
      {props.grid.map((row, y) => {
        return <Line key={`layout-line-${y}`} {...props} row={row} y={y} />;
      })}
    </div>
  </LayoutContext.Provider>;
}

function Line(props: { components: { [key: string]: any }, row: string[], y: number }) {
  return <div className="line" onScroll={(evt) => { evt.preventDefault(); }}>
    {props.row.map((id, x) => {
      return <Screen key={`layout-case-${props.y}-${x}`} {...props} id={id} x={x} />;
    })}
  </div>;
}

function Screen(props: { components: { [key: string]: any }, id: string, x: number, y: number }) {
  const layout = useLayout();
  const onClickLink = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const [y, x] = layout.getCoordinates(props.id);
    layout.goTo(y, x, false);
  };

  const Component = props.components[props.id];
  return <div id={props.id} className="screen">
    <a href={`#${props.id}`} className="anchor" onClick={onClickLink} />
    <Component />
  </div>;
}
