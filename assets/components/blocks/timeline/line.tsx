import React from "react";
import { EXPERIENCES } from "../../../constant";
import useMain from "../../../hooks";

export default function TimelineLine() {
  const main = useMain();

  return <article className="tll">
    <div className="tll-wrapper">
      {EXPERIENCES.map((exp, idx) => {
        const start = exp.start?.toLocaleDateString();
        const end = exp.end?.toLocaleDateString();

        const label = ((kind) => {
          switch (kind) {
            case 'grade': return main.translate('Graduation', {}, 'timeline');
            case 'job': return main.translate('Experience', {}, 'timeline');
            case 'both': return main.translate('Apprenticeship', {}, 'timeline');
          }
        })(exp.kind);

        return <section key={`tll-exp-${idx}`} className="tll-exp">
          <span className="tll-icon" style={{ backgroundColor: exp.color || '#607d8b' }}>
            <span className={`fad fa-${exp.icon} fa-fw`} />
          </span>
          <header className="tll-header">
            <span className="tll-badge" style={{ backgroundColor: exp.color || '#607d8b' }}>
              {label}
            </span>
            {start && (
              <span className="tll-date tll-start">{start}</span>
            )}
            {end && end !== start && (
              <span className="tll-date tll-end">{end}</span>
            )}
          </header>
          <div className="tll-info">
            {exp.grade && (
              <p>
                <b>{main.translate(exp.grade, {}, 'timeline')}</b>
                {exp.info && <><br /><small className="text-muted">{main.translate(exp.info, {}, 'timeline')}</small></>}
              </p>
            )}
            {exp.job && (
              <p>
                <b>{main.translate(exp.job, {}, 'timeline')}</b><br />
                <small className="text-muted">{exp.company}</small>
              </p>
            )}
          </div>
        </section>;
      })}
    </div>
  </article>;
}
