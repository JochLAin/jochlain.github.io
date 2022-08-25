import React, { useLayoutEffect, useRef, useState } from "react";
import useDebounce from "@assets/hooks/useDebounce";
import useLayout, { LayoutContext } from "@assets/hooks/useLayout";

export default function Grid(props: { children: any, grid: string[][], components: { [key: string]: any } }) {
  const [lines, setLines] = useState<number[]>(Array(props.grid.length).fill(0));
  const fullscreen = useRef<boolean>(true);
  const debounceFullscreen = useDebounce();
  const debounceTouchEnd = useDebounce();
  const debounceWheel = useDebounce();

  const store = {
    getCoordinates: (id: string) => {
      for (let _y = 0; _y < props.grid.length; _y++) {
        for (let _x = 0; _x < props.grid[_y].length; _x++) {
          if (props.grid[_y][_x] === id) {
            return [_y, _x];
          }
        }
      }
      return [0, 0];
    },
    goDown: (y) => {
      if (y < props.grid.length) store.goTo(y + 1, lines[y + 1]);
    },
    goLeft: (y, x) => {
      if (x > 0) store.goTo(y, x - 1);
    },
    goRight: (y, x) => {
      if (x < props.grid[y].length) store.goTo(y, x + 1);
    },
    goUp: (y) => {
      if (y > 0) store.goTo(y - 1, lines[y - 1]);
    },
    goTo: (y, x) => {
      setLines(lines.map((_x, _y) => _y === y ? x : _x));
      if (!fullscreen.current) store.toggle();
      setTimeout(() => {
        const width = document.body.clientWidth;
        const height = document.body.clientHeight;
        console.log(y, x, props.grid[y][x]);

        document.querySelector('.layout').scrollTo({ left: 0, top: height * y, behavior: 'smooth' });
        document.querySelector(`.layout .line:nth-child(${y + 1})`).scrollTo({ left: width * x, top: 0, behavior: 'smooth' });
        history.replaceState({}, '', `#${props.grid[y][x]}`);
      }, 150);
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

  useLayoutEffect(() => {
    let bufferTouchId = 0;
    let bufferTouchX = 0;
    let bufferTouchY = 0;

    const onKeyPress = (evt: KeyboardEvent) => {
      if ('Escape' === evt.key) {
        store.toggle();
      }
    };

    const onScroll = (evt) => {
      debounceWheel(() => {
        const screen = evt.target.matches('.screen') ? evt.target : evt.target.closest('.screen');
        const article = screen.querySelector('article');
        const [y, x] = store.getCoordinates(screen.id);

        if ((!evt.shiftKey && evt.deltaY < 0) || (evt.shiftKey && evt.deltaX < 0)) {
          if (screen.scrollTop === 0) {
            store.goUp(y);
          }
        } else if ((!evt.shiftKey && evt.deltaY > 0) || (evt.shiftKey && evt.deltaX > 0)) {
          if ((screen.scrollTop + document.body.clientHeight) >= article.offsetHeight) {
            store.goDown(y);
          }
        } else if ((evt.shiftKey && evt.deltaY < 0) || (!evt.shiftKey && evt.deltaX < 0)) {
          store.goLeft(y, x);
        } else if ((evt.shiftKey && evt.deltaY > 0) || (!evt.shiftKey && evt.deltaX > 0)) {
          store.goRight(y, x);
        }
      }, 30);
    };

    const onTouchStart = (evt) => {
      bufferTouchId = evt.targetTouches[0].identifier;
      bufferTouchX = evt.targetTouches[0].pageX;
      bufferTouchY = evt.targetTouches[0].pageY;
    };

    const onTouchMove = (evt) => {
      evt.preventDefault();
    };

    const onTouchEnd = (evt) => {
      debounceTouchEnd(() => {
        const MIN_DELTA = 100;
        const screen = evt.target.matches('.screen') ? evt.target : evt.target.closest('.screen');
        const article = screen.querySelector('article');
        const [y, x] = store.getCoordinates(screen.id);
        const touch = [...evt.changedTouches].find((touch) => touch.identifier === bufferTouchId);
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
      }, 50);
    };

    const wheelEventName = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    fullscreen.current = !document.body.classList.contains('overview');
    window.addEventListener(wheelEventName, onScroll, { passive: false }); // modern desktop
    window.addEventListener('touchstart', onTouchStart, { capture: false }); // mobile
    window.addEventListener('touchmove', onTouchMove, { capture: false }); // mobile
    window.addEventListener('touchend', onTouchEnd, { capture: false }); // mobile
    document.addEventListener('keyup', onKeyPress);

    return () => {
      window.removeEventListener(wheelEventName, onScroll); // modern desktop
      window.removeEventListener('touchmove', onTouchMove); // mobile
      document.removeEventListener('keyup', onKeyPress);
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

function Line(props: { components: { [key: string]: any }, current: string, row: string[], y: number }) {
  return <div className="line" onScroll={(evt) => { evt.preventDefault(); }}>
    {props.row.map((id, x) => {
      return <Screen key={`layout-case-${props.y}-${x}`} {...props} id={id} x={x} />;
    })}
  </div>;
}

function Screen(props: { components: { [key: string]: any }, current: string, id: string, x: number, y: number }) {
  const layout = useLayout();
  const onClickLink = (evt) => {
    evt.preventDefault();
    const [y, x] = layout.getCoordinates(props.id);
    layout.goTo(y, x);
  };

  const Component = props.components[props.id];
  return <div id={props.id} className="screen">
    <a href={`#${props.id}`} className="anchor" onClick={onClickLink} />
    <Component />
  </div>;
}
