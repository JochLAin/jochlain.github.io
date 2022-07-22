import React, { useState } from "react";
import useMain from "@assets/hooks/useMain";
import TimelineLine from "./line";
import TimelineTable from "./table";

export default function Timeline() {
  const main = useMain();
  const [type, setType] = useState(false);

  return <article id="timeline" className={type ? 'timeline--line' : 'timeline--table'}>
    <h3>
      {main.translate('Graduations && Experiences', {}, 'timeline')}
    </h3>
    {!type ? (
      <TimelineTable />
    ) : (
      <TimelineLine />
    )}
  </article>;
}
