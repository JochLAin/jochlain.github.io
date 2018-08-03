

import React, { Component } from 'react';
import Classnames from 'classnames';
import * as colors from '@constants/color';
import '@stylesheets/components/loader/landscape';
import '@stylesheets/components/loader/comet';
import '@stylesheets/components/loader/planet';
import Mountain from './mountain';
import Tree from './tree';

delete colors.default;

export default class Landscape extends Component {
    ref_space = React.createRef();
    interval_comet = null;

    render() {
        const classes = Classnames(this.props.classNames, 'landscape__wrapper');

        return <article className={classes}>
            <section className="landscape">
                <section className="landscape__sky landscape__sky--space">
                    <article ref={this.ref_space} className="landscape__space" />
                </section>
                <section className="landscape__sky landscape__sky--exosphere" />
                <section className="landscape__sky landscape__sky--ionosphere" />
                <section className="landscape__sky landscape__sky--mesosphere" />
                <section className="landscape__sky landscape__sky--stratosphere" />
                <section className="landscape__sky landscape__sky--toposphere">
                    <section className="landscape__earth">
                        <article className="landscape__ground">
                            <article className="landscape__mountain landscape__mountain--left"><Mountain /></article>
                            <article className="landscape__mountain landscape__mountain--center-left"><Mountain /></article>
                            <article className="landscape__mountain landscape__mountain--center"><Mountain /></article>
                            <article className="landscape__mountain landscape__mountain--center-right"><Mountain /></article>
                            <article className="landscape__mountain landscape__mountain--right"><Mountain /></article>
                            <article className="landscape__tree landscape__tree--right"><Tree /></article>
                            <article className="landscape__tree landscape__tree--left"><Tree /></article>
                        </article>
                    </section>
                </section>
            </section>
        </article>
    }

    componentDidMount() {
        this.interval_comet = setInterval(this.createComet, 50);
        this.interval_planet = setInterval(this.createPlanet, 5000);
    }

    componentWillUnmount() {
        if (this.interval_comet) {
            clearInterval(this.interval_comet);
        }
        if (this.interval_planet) {
            clearInterval(this.interval_planet);
        }
    }

    createComet = () => {
        const classes = Classnames('comet', Math.random() > .5 && 'comet--big');
        const left = Math.floor(Math.random() * Math.floor(100));
        const comet = $(`<section class="${classes}" style="left:${left}%;"></section>`);
        $(this.ref_space.current).append(comet);

        const delay = Math.floor(Math.random() * Math.floor(1000));
        setTimeout(() => {
            comet.addClass('comet--end');
            setTimeout(() => {
                comet.remove();
            }, 2000);
        }, delay);
    }

    createPlanet = () => {
        const color = Object.keys(colors)[Math.floor(Math.random() * Math.floor(20))];
        const planet_left = Math.floor(Math.random() * Math.floor(100));
        const planet_size = Math.floor(Math.random() * Math.floor(15)) +10;
        const planet_transition_time = Math.floor(Math.random() * Math.floor(5000)) +8000;
        const planet_transition = `transition: top ${planet_transition_time}ms linear, transition ${planet_transition_time}s linear;`;

        const planet_class = Classnames('planet', `planet--${color}`);
        const planet_style = `height:${planet_size}rem;width:${planet_size}rem;left:${planet_left}%;${planet_transition}`;
        const planet = $(`<section class="${planet_class}" style="${planet_style}"></section>`);

        const nb_crater = Math.floor(Math.random() * Math.floor(3));
        for (let index = 0; index < nb_crater; index++) {
            const crater_size = Math.floor(Math.random() * Math.floor(50));
            const crater_left = Math.floor(Math.random() * Math.floor(100));
            const crater_top = Math.floor(Math.random() * Math.floor(100));

            const crater_class = Classnames('planet__crater', `planet__crater--${color}`);
            const crater_style = `height:${crater_size}%;width:${crater_size}%;left:${crater_left}%;top:${crater_top}%;`;
            const crater = $(`<section class="${crater_class}" style="${crater_style}"></section>`);

            planet.append(crater);
        }
        $(this.ref_space.current).append(planet);

        const delay = Math.floor(Math.random() * Math.floor(1000));
        setTimeout(() => {
            planet.addClass('planet--end');
            setTimeout(() => {
                planet.remove();
            }, planet_transition_time);
        }, delay);
    }
}
