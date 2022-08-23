import React, { UIEvent, useEffect, useMemo } from "react";

export default function Grid(props: { grid: string[][], components: { [key: string]: any } }) {
  const debounce = useMemo(() => {
    let debounce_timeout: number|undefined;
    return (callback: Function, delay: number = 150) => {
      if (debounce_timeout) window.clearTimeout(debounce_timeout);
      debounce_timeout = window.setTimeout(callback, delay);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      debounce(() => {
        history.replaceState({}, '', `#${entries[0].target.id}`);
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: [0.6],
    });

    const onKeyPress = (evt: KeyboardEvent) => {
      if ('Escape' === evt.key) {
        document.body.classList.toggle('overview');
      }
    };

    const screens = document.querySelectorAll('[id].screen');
    screens.forEach((screen) => observer.observe(screen));
    document.addEventListener('keyup', onKeyPress);
    return () => {
      observer.disconnect();
      document.removeEventListener('keyup', onKeyPress);
    }
  }, []);

  return <div className="layout">
    {props.grid.map((row, y) => {
      return <Line key={`layout-line-${y}`} {...props} row={row} y={y} />;
    })}
  </div>;
}

function Line(props: { components: { [key: string]: any }, row: string[], y: number }) {
  return <div className="screen">
    {props.row.map((id, x) => {
      return <Case key={`layout-case-${props.y}-${x}`} {...props} id={id} x={x} />;
    })}
  </div>;
}

function Case(props: { components: { [key: string]: any }, id: string, x: number, y: number }) {
  const onClickLink = () => {
    document.body.classList.remove('overview');
  };

  const Component = props.components[props.id];
  return <div id={props.id} className="screen">
    <a href={`#${props.id}`} className="screen-link" onClick={onClickLink} />
    <Component />
  </div>;
}
