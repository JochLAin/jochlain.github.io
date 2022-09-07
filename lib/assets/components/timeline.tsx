import type { ExperienceInterface } from "../../../assets/constants";
import React, { CSSProperties } from "react";
import useMain from "../../../assets/hooks/useMain";
import { EXPERIENCES } from "../../../assets/constants";

export default function Timeline(props: { format?: string }) {
  const main = useMain();

  return <ul className="tll">
    {EXPERIENCES.slice(0, -1).reduce((accu: ExperienceInterface[], exp) => {
      if (exp.kind !== 'both') return [...accu, exp];
      return [...accu, { ...exp, kind: 'grade' }, { ...exp, kind: 'job' }];
    }, []).map((exp, idx, exps) => {
      const start = main.date(exp.start, 'yyyy-mm');
      const end = main.date(exp.end, 'yyyy-mm');
      const vars = {
        '--tll-color': exp.color || '#607d8b',
        '--tll-color-previous': exps[idx - 1]?.color,
        '--tll-color-next': exps[idx + 1]?.color,
      };

      const label = ((kind: string) => {
        switch (kind) {
          case 'grade': return main.translate('Graduation', {}, 'timeline');
          case 'job': return main.translate('Experience', {}, 'timeline');
          default: return '';
        }
      })(exp.kind);

      const icon = ((kind: string) => {
        switch (kind) {
          case 'grade': return 'fa-graduation-cap';
          case 'job': return 'fa-flask';
          default: return '';
        }
      })(exp.kind);

      return <li key={`tll-exp-${idx}`} className={`tll-exp tll-${exp.kind}`} style={vars as CSSProperties}>
        <span className="tll-icon">
          <span className={`fal ${icon} fa-fw`} />
        </span>
        <div className="tll-info">
          {props.format !== 'pdf' && (
            <h4 className="tll-title">{label}</h4>
          )}
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
            props.format === 'pdf' ? (
              <dl>
                <dt>{main.translate(exp.grade, {}, 'timeline')}</dt>
              </dl>
            ) : (
              <details>
                <summary>{main.translate(exp.grade, {}, 'timeline')}</summary>
                {main.translate(exp.info, {}, 'timeline')}
              </details>
            )
          )}
          {exp.kind === 'job' && (
            <dl>
              <dt>{main.translate(exp.job, {}, 'timeline')}</dt>
              <dd>{main.translate(exp.company, {}, 'timeline')}</dd>
            </dl>
          )}
        </div>
      </li>;
    })}
  </ul>;
}
