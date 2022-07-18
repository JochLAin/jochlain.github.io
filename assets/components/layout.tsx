import React, { Children, useRef } from "react";

export default function Layout(props: { children: any }) {
  const children = Children.toArray(props.children);
  // console.log(children);

  return <div className="layout">{children}</div>;
}

export function Screen(props: { id?: string, children: any }) {
  const uuid = useRef(Math.random().toString(36).slice(2, 9));

  return <section id={props.id || `screen-${uuid.current}`} className="screen">
    {props.children}
  </section>
}
