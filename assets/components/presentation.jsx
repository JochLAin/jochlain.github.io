

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
                <article ref={this.ref_landscape} id="landscape">
                    <Landscape />
                </article>
                <article ref={this.ref_rocket} id="rocket">
                    <Rocket />
                </article>
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
            {(() => {
                return ReactDOM.createPortal(
                    <button type="button" className="d-none d-md-block btn btn-outline-light btn-sm position-absolute right-3 top-5 mt-2" onClick={this.onRestart}>
                        <span className="fas fa-undo-alt fa-fw" />
                    </button>,
                    document.body
                );
            })()}
        </article>;
    }

    componentDidMount() {
        $(document).ready(() => {
            this.launch();
        });
    }

    onRestart = () => {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.ref_landscape.current.classList.remove('ascending');
        this.ref_landscape.current.classList.remove('to-space');
        this.ref_landscape.current.classList.remove('in-space');
        this.ref_rocket.current.classList.remove('ascending');
        this.ref_rocket.current.classList.remove('flying');

        setTimeout(() => {
            this.launch();
        }, 300);
    }

    launch = () => {
        this.ref_landscape.current.classList.add('ascending');
        this.ref_landscape.current.classList.add('to-space');
        this.ref_rocket.current.classList.add('ascending');

        this.timeout = setTimeout(() => {
            this.ref_landscape.current.classList.remove('ascending');
            this.ref_landscape.current.classList.add('in-space');
            this.ref_rocket.current.classList.add('flying');
        }, 2700);
    }
}
