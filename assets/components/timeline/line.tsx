import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone, light } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import type { ExperienceInterface } from "@assets/constants";
import useMain from "@assets/hooks/useMain";
import { EXPERIENCES } from "@assets/constants";
import { Properties } from "csstype";

export default function TimelineLine() {
  const main = useMain();

  return <>
    <h3>{main.translate('Graduations && Experiences')}</h3>
    <section>
      <article>
        <ul className="tll">
          {EXPERIENCES.reduce((accu: ExperienceInterface[], exp) => {
            if (exp.kind !== 'both') return [...accu, exp];
            return [...accu, {
              ...exp,
              kind: 'grade',
              icon: duotone('graduation-cap'),
              icon_light: light('graduation-cap'),
            }, {
              ...exp,
              kind: 'job',
              icon: duotone('flask'),
              icon_light: light('flask'),
            }];
          }, []).map((exp: ExperienceInterface, idx, exps) => {
            const start = main.date(exp.start, 'yyyy-mm');
            const end = main.date(exp.end, 'yyyy-mm');
            const vars = {
              '--tll-color': exp.color || '#607d8b',
              '--tll-color-previous': exps[idx - 1]?.color,
              '--tll-color-next': exps[idx + 1]?.color,
            };

            const label = ((kind) => {
              switch (kind) {
                case 'grade': return main.translate('Graduation', {}, 'timeline');
                case 'job': return main.translate('Experience', {}, 'timeline');
                default: return null;
              }
            })(exp.kind);

            const icon = ((kind: string) => {
              switch (kind) {
                case 'grade': return light('graduation-cap');
                case 'job': return light('flask');
                default: return light('question');
              }
            })(exp.kind);

            return <li key={`tll-exp-${idx}`} className={`tll-exp tll-${exp.kind}`} style={vars as Properties}>
            <span className="tll-icon">
              <FontAwesomeIcon icon={icon} fixedWidth />
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
                {exp.kind === 'grade' && (
                  <details>
                    <summary>{main.translate(exp.grade, {}, 'timeline')}</summary>
                    {main.translate(exp.info, {}, 'timeline')}
                  </details>
                )}
                {exp.kind === 'job' && (
                  <dl>
                    <dt>{main.translate(exp.job, {}, 'timeline')}<br /></dt>
                    <dd>{main.translate(exp.company, {}, 'timeline')}</dd>
                  </dl>
                )}
              </div>
            </li>;
          })}
        </ul>
      </article>
    </section>
  </>;
}
