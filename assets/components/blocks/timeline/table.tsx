import React from "react";
import { EXPERIENCES, MONTHES } from "../../../constant";
import useMain from "../../../hooks/useMain";

export default function TimelineTable() {
    const main = useMain();

    return <article className="block block-tlt">
        <h3 className="tlt-title">{main.translate('Graduations && Experiences', {}, 'timeline')}</h3>
        <div className="tlt">
            <TimelineTableGraph />
            <TimelineTableLegend />
        </div>
    </article>;
}

export function TimelineTableGraph() {
    const main = useMain();
    const now = new Date();

    return <div className="tlt-graph">
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
                        key={`month-${month.toLowerCase()}`}
                        className="tlt-graph-month"
                        title={main.translate(month, {}, 'timeline')}
                    />;
                })}
            </header>
            <div className="tlt-graph-table">
                {[...Array(now.getFullYear() - 2007)].map((a, y) => {
                    const year = 2008 + y;
                    return <section key={`year-${year}`} className="tlt-graph-line">
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

                            return <section key={`cell-${year}-${month}`} className="tlt-cell" style={{ color }}>
                                <span className="fa-stack">
                                    {experience && (
                                        <span className={`fad fa-${experience.icon} fa-stack-1x fa-1x fa-fw`} />
                                    )}
                                    <span className="far fa-square fa-stack-1x fa-2x fa-fw" />
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
                <span className="fas fa-graduation-cap fa-stack-1x fa-fw" />
                <span className="far fa-square fa-stack-1x fa-2x fa-fw" />
            </span>
            {main.translate('Graduation', {}, 'timeline')}
        </div>
        <div className="icon-text">
            <span className="fa-stack">
                <span className="fas fa-flask fa-stack-1x fa-1x fa-fw" />
                <span className="far fa-square fa-stack-1x fa-2x fa-fw" />
            </span>
            {main.translate('Experience', {}, 'timeline')}
        </div>
        <div className="icon-text">
            <span className="fa-stack">
                <span className="fas fa-star-half-alt fa-stack-1x fa-1x fa-fw" />
                <span className="far fa-square fa-stack-1x fa-2x fa-fw" />
            </span>
            {main.translate('Apprenticeship', {}, 'timeline')}
        </div>
    </footer>;
}

export function TimelineTableLegend() {
    const main = useMain();

    return <ul className="tlt-legend fa-ul">
        {EXPERIENCES.map((exp, idx) => {
            // const title = `${date(exp.start, 'yyyy-mm')} → ${date(exp.end, 'yyyy-mm')}`;

            return <li key={`exp-${idx}`}>
                <span className="fa-li" style={{ color: exp.color }}><span className="fas fa-square" /></span>
                {exp.grade && (
                    <p>
                        <i>{main.translate(exp.grade, {}, 'timeline')}</i>
                        {exp.info && <small title={main.translate(exp.info, {}, 'timeline')} className="fal fa-circle-info fa-fw ms-1 text-muted" />}
                    </p>
                )}
                {exp.grade && exp.job && <hr />}
                {exp.job && (
                    <p>
                        <b>{main.translate(exp.job, {}, 'timeline')}</b><br />
                        <small className="text-muted">{exp.company}</small>
                    </p>
                )}
            </li>
        })}
    </ul>
}
