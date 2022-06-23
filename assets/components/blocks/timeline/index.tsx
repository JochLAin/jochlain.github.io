import React, { useState } from "react";
import useMain from "../../../hooks";
import TimelineLine from "./line";
import TimelineTable from "./table";

export default function Timeline() {
  const main = useMain();
  const [type, setType] = useState(false);

  return <article id="timeline" className={`block block-timeline ${type ? 'block-timeline--line' : 'block-timeline--table'}`}>
    <h3 className="block-title">
      {main.translate('Graduations && Experiences', {}, 'timeline')}
    </h3>
    {!type ? (
      <TimelineTable />
    ) : (
      <TimelineLine />
    )}
  </article>;
}
