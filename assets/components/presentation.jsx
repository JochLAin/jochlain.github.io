

import React, { Component } from 'react';
import Rocket from '@components/landscape/rocket';
import Landscape from '@components/landscape';
import profil from '@images/jocelyn-faihy.png';

export default class Presentation extends Component {
    ref_container = React.createRef();
    ref_landscape = React.createRef();
    ref_rocket = React.createRef();

    render() {
        return <article id="presentation" className="presentation h-100vh">
            <article className="presentation__left">
                <section className="loader__container">
                    <article ref={this.ref_landscape} id="landscape">
                        <Landscape />
                    </article>
                    <article ref={this.ref_rocket} id="rocket">
                        <Rocket />
                    </article>
                </section>
            </article>
            <section ref={this.ref_container} className="presentation__right">
                <article className="presentation__text">
                    <img src={profil} alt="Photo" className="rounded-circle" style={{ width: '15rem' }} />
                    <hr/>
                    <h1>Jocelyn Faihy</h1>
                    <h2>Développeur web <small>(fullstack)</small></h2>
                    <hr/>
                    <h4>Le code aussi bien visuel que structurel.</h4>
                </article>
                <aside className="presentation__right--arrow" />
            </section>
            <a href="#description" className="presentation__arrow--down">
                <span className="fas fa-angle-down fa-fw fa-2x"></span>
            </a>
        </article>;
    }

    componentDidMount() {
        $(document).ready(() => {
            this.ref_landscape.current.classList.add('ascending');
            this.ref_landscape.current.classList.add('to-space');
            this.ref_rocket.current.classList.add('ascending');

            setTimeout(() => {
                this.ref_landscape.current.classList.remove('ascending');
                this.ref_landscape.current.classList.add('in-space');
                this.ref_rocket.current.classList.add('flying');

                setTimeout(() => {
                    this.ref_container.current.style.opacity = 1;
                }, 2000);
            }, 2700);
        });
    }
}
