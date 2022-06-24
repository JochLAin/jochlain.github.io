import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone, regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { EXPERIENCES, MONTHES } from "../../../constant";
import useMain from "../../../hooks";
import translate from "../../../utils/translate";

export default function TimelineTable() {
    return <div className="tlt">
        <div className="row">
            <TimelineTableGraph />
            <TimelineTableLegend />
        </div>
        <nav className="tlt-navbar navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#!" className="nav-link">
                        <>
                            <FontAwesomeIcon icon={duotone('grid')} />
                            {translate('display.table', {}, 'timeline')}
                        </>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#!" className="nav-link">
                        <>
                            <FontAwesomeIcon icon={duotone('list-ul')} />
                            {translate('display.list', {}, 'timeline')}
                        </>
                    </a>
                </li>
            </ul>
        </nav>
    </div>;
}

export function TimelineTableGraph() {
    const main = useMain();
    const now = new Date();

    return <div className="tlt-graph col-12 col-xl-8 d-flex justify-content-center">
        <aside className="tlt-graph-ordinate">
            {[...Array(now.getFullYear() - 2007)].map((a, y) => {
                const year = 2008 + y;
                const date = new Date();
                date.setFullYear(year);

                return <b key={`tlt-ordinate-${year}`} className="tlt-graph-year">
                    {date.getFullYear()}
                </b>;
            })}
        </aside>
        <div className="tlt-graph-content">
            <header className="tlt-graph-abscissa">
                {MONTHES.map((month) => {
                    return <div
                        key={`tlt-month-${month.toLowerCase()}`}
                        className="tlt-graph-month"
                        title={main.translate(month, {}, 'timeline')}
                    />;
                })}
            </header>
            <div className="tlt-graph-table">
                {[...Array(now.getFullYear() - 2007)].map((a, y) => {
                    const year = 2008 + y;
                    return <section key={`tlt-year-${year}`} className="tlt-graph-line">
                        {MONTHES.map((label, x) => {
                            const month = x + 1;
                            const date = new Date(year, month);
                            const experience = EXPERIENCES.find(experience => {
                                return !(experience.kind === 'grade' && [7, 8].includes(date.getMonth()))
                                    && date.getTime() >= experience.start.getTime()
                                    && date.getTime() <= experience.end.getTime();
                            });

                            let color = experience?.color || '#607d8b';
                            if (date.getTime() < EXPERIENCES[0].start.getTime()) color = '#e9ecef';
                            if (date.getTime() > EXPERIENCES[EXPERIENCES.length -1].end.getTime()) color = '#e9ecef';

                            return <section key={`tlt-cell-${year}-${month}`} className="tlt-cell" style={{ color }}>
                                <span className="fa-stack">
                                    {experience && (
                                        <FontAwesomeIcon icon={experience.icon} fixedWidth size="1x" className="fa-stack-1x" />
                                    )}
                                    <FontAwesomeIcon icon={regular('square')} fixedWidth size="2x" className="fa-stack-1x" />
                                </span>
                            </section>;
                        })}
                    </section>;
                })}
                <TimelineTableGraphLegend />
            </div>
        </div>
    </div>;
}

export function TimelineTableGraphLegend() {
    const main = useMain();

    return <footer className="tlt-graph-legend">
        <div className="icon-text">
            <span className="fa-stack">
                <FontAwesomeIcon icon={duotone('graduation-cap')} fixedWidth size="1x" className="fa-stack-1x" />
                <FontAwesomeIcon icon={regular('square')} fixedWidth size="2x" className="fa-stack-1x" />
            </span>
            <span>{main.translate('Graduation', {}, 'timeline')}</span>
        </div>
        <div className="icon-text">
            <span className="fa-stack">
                <FontAwesomeIcon icon={duotone('flask')} fixedWidth size="1x" className="fa-stack-1x" />
                <FontAwesomeIcon icon={regular('square')} fixedWidth size="2x" className="fa-stack-1x" />
            </span>
            <span>{main.translate('Experience', {}, 'timeline')}</span>
        </div>
        <div className="icon-text">
            <span className="fa-stack">
                <FontAwesomeIcon icon={duotone('star-half-alt')} fixedWidth size="1x" className="fa-stack-1x" />
                <FontAwesomeIcon icon={regular('square')} fixedWidth size="2x" className="fa-stack-1x" />
            </span>
            <span>{main.translate('Apprenticeship', {}, 'timeline')}</span>
        </div>
    </footer>;
}

export function TimelineTableLegend() {
    const main = useMain();

    return <ul className="tlt-legend col-12 col-sm-4 bg-body">
        {EXPERIENCES.map((exp, idx) => {
            // const title = `${date(exp.start, 'yyyy-mm')} → ${date(exp.end, 'yyyy-mm')}`;

            return <li key={`tlt-exp-${idx}`}>
                <FontAwesomeIcon icon={solid('square')} style={{ color: exp.color }} />
                <div>
                    {exp.grade && (
                      <p>
                          <i>{main.translate(exp.grade, {}, 'timeline')}</i>
                          {exp.info && <small title={main.translate(exp.info, {}, 'timeline')} className="fal fa-circle-info fa-fw ms-1 text-muted" />}
                      </p>
                    )}
                    {exp.job && (
                      <p>
                          <b>{main.translate(exp.job, {}, 'timeline')}</b><br />
                          <small className="text-muted">{exp.company}</small>
                      </p>
                    )}
                </div>
            </li>;
        })}
    </ul>;
}
