import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import useMain from "../../../hooks";
import TimelineLine from "./line";
import TimelineTable from "./table";

export default function Timeline() {
  const main = useMain();
  const [type, setType] = useState(false);

  return <article id="timeline" className={`block block-timeline ${type ? 'block-timeline--line' : 'block-timeline--table'}`}>
    <aside className="block-actions">
      <FontAwesomeIcon icon={solid('grid')} fixedWidth onClick={() => setType(false)} />
      <FontAwesomeIcon icon={duotone('list-ul')} fixedWidth onClick={() => setType(true)} />
      {!type && (
        <>
          <hr />
          <FontAwesomeIcon icon={duotone('cog')} fixedWidth />
        </>
      )}
    </aside>
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
