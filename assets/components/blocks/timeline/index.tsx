import React, { useState } from "react";
import useMain from "../../../hooks";
import TimelineLine from "./line";
import TimelineTable from "./table";

export default function Timeline() {
  const main = useMain();
  const [type, setType] = useState(false);

  return <article id="timeline" className="block block-timeline">
    <h3 className="timeline-title">
      {main.translate('Graduations && Experiences', {}, 'timeline')}<br />
      {/*<Switch checked={type} onChange={() => setType(!type)} />*/}
    </h3>
    {!type ? (
      <TimelineTable />
    ) : (
      <TimelineLine />
    )}

  </article>;
}

type SwitchProps = {
  checked: boolean,
  onChange: () => any,
};

function Switch(props: SwitchProps) {
  return <label className="timeline-switch">
    <input type="checkbox" checked={props.checked} onClick={props.onChange} />
    <span className="switch-icon far fa-grid fa-fw" />
    <span className="switch-icon far fa-list-ul fa-fw" />
  </label>
}
