

import React, { Component } from 'react';

export default class Description extends Component {
    render() {
        return <article id="description" className="description__view view">
            <article className="container">
                <article className="row justify-content-center">
                    <section className="col-12 col-lg-10 col-xl-8">
                        <h3>À propos de moi</h3>
                        <article className="card bg-dark text-white">
                            <section className="card-body">
                                <p className="card-text">
                                    Suite à des études post-bac dans l'informatique, les réseaux et le développement mobile,
                                    je me suis plongé dans les technologies du web en auto-didacte.<br/>
                                    Cela fait maintenant plus de 6 ans que je découvre, apprends, aiguise mes connaissances.
                                </p>
                                <p className="card-text">
                                    J'ai pu par exemple travailler sur :
                                </p>
                                <ul>
                                    <li>un logiciel de pixellisation des images d'une kinect ;</li>
                                    <li>un "power-point like" sur web et mobile ;</li>
                                    <li>un réseau social de la maison à fort trafic ;</li>
                                    <li>un gestionnaire de configurateur 3D ;</li>
                                    <li>le développement d'un CMS ;</li>
                                </ul>
                                <p className="card-text">
                                    Au départ très épris de la programmation côté serveur, je me suis petit à petit formé, en plus, sur l'affichage dynamique puis le visuel des sites web.<br />
                                    Cela m'a permis de me retrouver face à diverses problématiques, notamment :
                                </p>
                                <ul>
                                    <li>la gestion du stockage de données ;</li>
                                    <li>la sécurité ;</li>
                                    <li>la communication entre le client et le serveur ;</li>
                                    <li>la communication en temps réel ;</li>
                                    <li>le format des données communiquées ;</li>
                                    <li>l'expérience utilisateur ;</li>
                                    <li>l'interface utilisateur ;</li>
                                </ul>
                                <p className="card-text">
                                    En plus de cela, j'ai pu exercer mes compétences en gestion de projet et en relation client, comme :
                                </p>
                                <ul>
                                    <li>la description du besoin ;</li>
                                    <li>l'accompagnement à la rédaction du cahier des charges ;</li>
                                    <li>l'organisation sous forme de sprint AGILE ;</li>
                                    <li>le suivi pendant le développement ;</li>
                                </ul>
                            </section>
                        </article>
                    </section>
                </article>
            </article>
        </article>
    }
}