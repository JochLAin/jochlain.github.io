import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useMain from "@assets/hooks/useMain";
import type { ExperienceInterface } from "../../constants";
import { EXPERIENCES } from "../../constants";

export default function TimelineLine() {
  const main = useMain();

  return <article>
    <h3>{main.translate('Graduations && Experiences', {}, 'timeline')}</h3>
    <ul className="tll">
      {EXPERIENCES.map((exp: ExperienceInterface, idx) => {
        const start = main.date(exp.start);
        const end = main.date(exp.end);

        const label = ((kind) => {
          switch (kind) {
            case 'grade': return main.translate('Graduation', {}, 'timeline');
            case 'job': return main.translate('Experience', {}, 'timeline');
            case 'both': return main.translate('Apprenticeship', {}, 'timeline');
          }
        })(exp.kind);

        return <li key={`tll-exp-${idx}`} className={`tll-exp tll-${exp.kind}`} style={{ '--tll-color': exp.color || '#607d8b' }}>
          <span className="tll-icon">
            <FontAwesomeIcon icon={exp.icon} fixedWidth />
          </span>
          <header className="tll-header">
            <span className="tll-label">
              {label}
            </span>
            <span className="tll-period">
              {start && (
                <span className="tll-date tll-start">{start}</span>
              )}
              {end && end !== start && (
                <span className="tll-date tll-end">{end}</span>
              )}
            </span>
          </header>
          <div className="tll-info">
            {exp.grade && exp.info && (
              <details>
                <summary>{main.translate(exp.grade, {}, 'timeline')}</summary>
                {main.translate(exp.info, {}, 'timeline')}
              </details>
            )}
            {exp.grade && !exp.info && (
              <p>{main.translate(exp.grade, {}, 'timeline')}</p>
            )}
            {exp.job && (
              <dl>
                <dt>{main.translate(exp.job, {}, 'timeline')}</dt>
                <dd>{exp.company}</dd>
              </dl>
            )}
          </div>
        </li>;
      })}
    </ul>
  </article>;
}
