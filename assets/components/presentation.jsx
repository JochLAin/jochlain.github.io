

import React, { Component } from 'react';

export default class Presentation extends Component {
    render() {
        return <article id="presentation" className="presentation h-100vh">
            <section className="presentation__left" />
            <section className="presentation__right">
                <article className="presentation__text">
                    <h1>Jocelyn Faihy</h1>
                    <h2>Développeur web <small>(fullstack)</small></h2>
                    <hr className="border-light" />
                    <p>
                        C'est après des études dans l'informatique, les réseaux et le développement mobile
                        que je me suis essayé aux technologies du web en auto-didacte.
                    </p>
                    <p>
                        Cela fait maintenant presque 5 ans qe je découvre, apprends, aiguise mes compétences.
                    </p>
                    <p>
                        Au départ très épris du backend, je me suis petit à petit formé sur le front puis l'intégration des sites web.
                    </p>
                </article>
                <aside className="presentation__right--arrow" />
            </section>
            <aside className="presentation__arrow--down">
                <span className="fas fa-angle-down fa-fw fa-2x"></span>
            </aside>
        </article>;
    }
}