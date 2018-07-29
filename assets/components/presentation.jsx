

import React, { Component } from 'react';

export default class Presentation extends Component {
    render() {
        return <article id="presentation" className="presentation h-100vh">
            <section className="presentation__left" />
            <section className="presentation__right">
                <article className="presentation__text">
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
}