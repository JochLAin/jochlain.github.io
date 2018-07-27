

import uuid from 'uuid';
import React, { Component, Fragment } from 'react';
import Classnames from 'classnames';

const EXPERIENCES = [{
    type: 'formation',
    diplome: 'Bac STI GE',
    label: 'Sciences et Techniques Industriel\nOption Génie Électronique',
    start: new Date(2008, 9),
    end: new Date(2010, 6),
    color: 'red',
}, {
    type: 'job',
    company: 'Mac Donald\'s',
    job: 'Équipier polyvalent',
    start: new Date(2010, 7),
    end: new Date(2010, 8),
    color: 'purple',
}, {
    type: 'formation',
    diplome: 'BTS IRIS',
    label: 'Informatique et Réseau pour les Industries et les Services techniques',
    start: new Date(2010, 9),
    end: new Date(2012, 6),
    color: 'blue-weak',
}, {
    type: 'job',
    company: 'Mairie de Villieu-Loyes-Mollon',
    job: 'Développeur web',
    start: new Date(2012, 7),
    end: new Date(2012, 7),
    color: 'teal',
}, {
    type: 'alternance',
    diplome: 'Licence professionnel IEM',
    label: 'Informatique Embarquée et Mobile',
    company: 'Urban Link / Meden Agan',
    job: 'Développeur web & mobile',
    start: new Date(2012, 9),
    end: new Date(2013, 9),
    color: 'amber',
}, {
    type: 'job',
    company: 'Wanadev',
    job: 'Développeur web',
    start: new Date(2014, 4),
    end: new Date(),
    color: 'orange',
}];

export default class History extends Component {
    state = { experiences: EXPERIENCES };

    render() {
        return <section id="history" className="history__container container h-100vh py-3">
            <h3>Formations && Expériences</h3>
            <article className="history">
                <section className="history__graph">
                    <aside className="history__graph--aside">
                        <b className="history__graph--year">2008</b>
                        <b className="history__graph--year">2009</b>
                        <b className="history__graph--year">2010</b>
                        <b className="history__graph--year">2011</b>
                        <b className="history__graph--year">2012</b>
                        <b className="history__graph--year">2013</b>
                        <b className="history__graph--year">2014</b>
                        <b className="history__graph--year">2015</b>
                        <b className="history__graph--year">2016</b>
                        <b className="history__graph--year">2017</b>
                        <b className="history__graph--year">2018</b>
                    </aside>
                    <section className="history__graph--content">
                        <header className="history__graph--header">
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Janvier
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Février
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Mars
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Avril
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Mai
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Juin
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Juillet
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Août
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Septembre
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Octobre
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Novembre
                                </i>
                            </section>
                            <section className="history__graph--month">
                                <i className="history__graph--month--content">
                                    Décembre
                                </i>
                            </section>
                        </header>
                        <article className="history__graph--table">
                            {[...Array((new Date()).getFullYear() - 2007)].map((a, y) => {
                                return <section key={uuid.v4()} className="history__graph--line">
                                    {[...Array(12)].map((a, x) => {
                                        const date = new Date(2008 + y, x +1);
                                        const experience = this.state.experiences.find(experience => {
                                            return date.getTime() >= experience.start.getTime()
                                                && date.getTime() <= experience.end.getTime();
                                        });

                                        let color = experience ? experience.color : 'petrol';
                                        if (date.getTime() < this.state.experiences[0].start.getTime()) {
                                            color = 'petrol-200';
                                        }
                                        if (date.getTime() > this.state.experiences[this.state.experiences.length -1].end.getTime()) {
                                            color = 'petrol-100';
                                        }

                                        const classes = Classnames('history__graph--case', color && `text-${color}`);
                                        let icon = <span className="far fa-square fa-2x fa-fw"></span>
                                        if (experience && experience.type == 'formation') {
                                            icon = <span className="fa-stack">
                                                <span className="fas fa-graduation-cap fa-stack-1x fa-fw"></span>
                                                <span className="far fa-square fa-stack-1x fa-2x fa-fw"></span>
                                            </span>
                                        } else if (experience && experience.type == 'job') {
                                            icon = <span className="fa-stack">
                                                <span className="fas fa-flask fa-stack-1x fa-1x fa-fw"></span>
                                                <span className="far fa-square fa-stack-1x fa-2x fa-fw"></span>
                                            </span>
                                        } else if (experience && experience.type == 'alternance') {
                                            icon = <span className="fa-stack">
                                                <span className="fas fa-star-half-alt fa-stack-1x fa-1x fa-fw"></span>
                                                <span className="far fa-square fa-stack-1x fa-2x fa-fw"></span>
                                            </span>
                                        }

                                        return <section key={uuid.v4()} className={classes}>
                                            {icon}
                                        </section>
                                    })}
                                </section>
                            })}
                        </article>
                        <footer className="history__legend">
                            <article className="history__legend--item">
                                <span className="fa-stack">
                                    <span className="fas fa-graduation-cap fa-stack-1x fa-fw"></span>
                                    <span className="far fa-square fa-stack-1x fa-2x fa-fw"></span>
                                </span>
                                <span className="history__legend--label">Formation</span>
                            </article>
                            <article className="history__legend--item">
                                <span className="fa-stack">
                                    <span className="fas fa-flask fa-stack-1x fa-1x fa-fw"></span>
                                    <span className="far fa-square fa-stack-1x fa-2x fa-fw"></span>
                                </span>
                                <span className="history__legend--label">Expérience</span>
                            </article>
                            <article className="history__legend--item">
                                <span className="fa-stack">
                                    <span className="fas fa-star-half-alt fa-stack-1x fa-1x fa-fw"></span>
                                    <span className="far fa-square fa-stack-1x fa-2x fa-fw"></span>
                                </span>
                                <span className="history__legend--label">Alternance</span>
                            </article>
                        </footer>
                    </section>
                </section>
                <section className="history__list">
                    <ul className="fa-ul">
                        {this.state.experiences.map(experience => {
                            const classes = Classnames('fa-li', `text-${experience.color}`);
                            return <li key={uuid.v4()} className="history__list--item">
                                <span className={classes}>
                                    <span className="fas fa-square"></span>
                                </span>
                                <ExperienceDetail experience={experience} />
                            </li>
                        })}
                    </ul>
                </section>
            </article>
        </section>;
    }
}

export class ExperienceDetail extends Component {
    render() {
        const { experience } = this.props;

        switch (experience.type) {
            case 'formation':
                return <p>
                    {experience.diplome}<br />
                    <small className="text-muted">{experience.label}</small>
                </p>
            case 'job':
                return <p>
                    {experience.job}<br />
                    <small className="text-muted">{experience.company}</small>
                </p>
            case 'alternance':
                return <Fragment>
                    <p>
                        {experience.diplome}<br />
                        <small className="text-muted">{experience.label}</small>
                    </p>
                    <hr />
                    <p>
                        {experience.job}<br />
                        <small className="text-muted">{experience.company}</small>
                    </p>
                </Fragment>
        }
        return null;
    }
}