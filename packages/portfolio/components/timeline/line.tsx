import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useMain from "@assets/hooks/useMain";
import type { ExperienceInterface } from "../../constants";
import { EXPERIENCES } from "../../constants";
import { Properties } from "csstype";

export default function TimelineLine() {
  const main = useMain();

  return <article>
    <h3>{main.translate('Graduations && Experiences')}</h3>
    <ul className="tll">
      {EXPERIENCES.map((exp: ExperienceInterface, idx) => {
        const start = main.date(exp.start);
        const end = main.date(exp.end);
        const vars = {
          '--tll-color': exp.color || '#607d8b',
          '--tll-color-previous': EXPERIENCES[idx - 1]?.color,
          '--tll-color-next': EXPERIENCES[idx + 1]?.color,
        };

        const label = ((kind) => {
          switch (kind) {
            case 'grade': return main.translate('Graduation', {}, 'timeline');
            case 'job': return main.translate('Experience', {}, 'timeline');
            case 'both': return main.translate('Apprenticeship', {}, 'timeline');
          }
        })(exp.kind);

        return <li key={`tll-exp-${idx}`} className={`tll-exp tll-${exp.kind}`} style={vars as Properties}>
          <span className="tll-icon">
            <FontAwesomeIcon icon={exp.icon_light} fixedWidth />
          </span>
          <div className="tll-info">
            <h4 className="tll-title">{label}</h4>
            <span className="tll-period">
              {start && (
                <span className="tll-date tll-start">{start}</span>
              )}
              {end && end !== start && (end !== main.date(new Date()) ? (
                <span className="tll-date tll-end">{end}</span>
              ) : (
                <span className="tll-date tll-end">{main.translate('now', {}, 'timeline')}</span>
              ))}
            </span>
            {exp.grade && (
              <details>
                <summary>{main.translate(exp.grade, {}, 'timeline')}</summary>
                {main.translate(exp.info, {}, 'timeline')}
              </details>
            )}
            {exp.job && (
              <dl>
                <dt>{main.translate(exp.job, {}, 'timeline')}</dt>
                <dd>{main.translate(exp.company, {}, 'timeline')}</dd>
              </dl>
            )}
          </div>
        </li>;
      })}
    </ul>
  </article>;
}
