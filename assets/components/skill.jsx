

import React, { Component } from 'react';
import uuid from 'uuid';

const LEVELS = ['Novice', 'Débutant', 'Intermédiaire', 'Qualifié', 'Expérimenté'];
const LOVES = ['Boarf.', 'Mouais...', 'Top !'];

const SKILLS = [
    { name: 'PHP', type: 'language', level: 4 },
    { name: 'Javascript', type: 'language', level: 4 },
    { name: 'CSS', type: 'language', level: 4 },
    { name: 'SASS', type: 'language', level: 4 },
    { name: 'LESS', type: 'language', level: 4 },
    { name: 'C#', type: 'language', level: 2 },
    { name: 'C++', type: 'language', level: 2 },
    { name: 'Python', type: 'language', level: 1 },
    { name: 'Go', type: 'language', level: 0 },

    { name: 'Symfony', type: 'framework', level: 4 },
    { name: 'React', type: 'framework', level: 4 },
    { name: 'Node', type: 'framework', level: 4 },
    { name: 'Socket.IO', type: 'framework', level: 4 },
    { name: 'Bootstrap', type: 'framework', level: 4 },
    { name: 'FontAwesome', type: 'framework', level: 4 },
    { name: 'Webpack', type: 'framework', level: 3 },
    { name: 'WebGL', type: 'framework', level: 2 },
    { name: 'BabylonJS', type: 'framework', level: 2 },

    { name: 'Gimp', type: 'tool', level: 2 },
    { name: 'Paint', type: 'tool', level: 3 },
    { name: 'Blender', type: 'tool', level: 0 },
    { name: 'Photoshop', type: 'tool', level: 0 },

    { name: 'Sublime Text', type: 'editor', level: 2 },
    { name: 'Notepad++', type: 'editor', level: 1 },
    { name: 'VS Code', type: 'editor', level: 1 },
    { name: 'PHP Storm', type: 'editor', level: 0 },

    { name: 'Google', type: 'research', level: 2 },
    { name: 'StackOverflow', type: 'research', level: 2 },
    { name: 'OpenClassrooms (Site du Zéro)', type: 'research', level: 1 },

    { name: 'Mozilla Firefox', type: 'navigator', level: 2 },
    { name: 'Google Chrome', type: 'navigator', level: 2 },
    { name: 'Vivaldi', type: 'navigator', level: 2 },
    { name: 'Safari', type: 'navigator', level: 1 },
    { name: 'Internet Explorer', type: 'navigator', level: 0 },
];

export default class Skills extends Component {
    state = { skills: SKILLS };

    render() {
        return <section id="skill" className="skill__container container h-100vh py-3">
            <h3>Compétences && Maîtrises</h3>
            <table className="table table-bordered table-hover table-sm table-striped my-3">
                <thead>
                    <tr>
                        <th></th>
                        <th>Langage</th>
                        <th>Bibliothèque && Framework</th>
                        <th>Outil</th>
                    </tr>
                </thead>
                <tbody>
                    {LEVELS.map((label, level) => {
                        return <tr key={uuid.v4()}>
                            <td>{label}</td>
                            <td>
                                {this.state.skills.filter(skill => {
                                    return skill.level == level && skill.type == 'language';
                                }).map(skill => {
                                    return <span key={uuid.v4()} className="badge badge-pill badge-dark mx-1">{skill.name}</span>
                                })}
                            </td>
                            <td>
                                {this.state.skills.filter(skill => {
                                    return skill.level == level && skill.type == 'framework';
                                }).map(skill => {
                                    return <span key={uuid.v4()} className="badge badge-pill badge-secondary mx-1">{skill.name}</span>
                                })}
                            </td>
                            <td>
                                {this.state.skills.filter(skill => {
                                    return skill.level == level && skill.type == 'tool';
                                }).map(skill => {
                                    return <span key={uuid.v4()} className="badge badge-pill badge-light mx-1">{skill.name}</span>
                                })}
                            </td>
                        </tr>
                    }).reverse()}
                </tbody>
            </table>
            <table className="table table-bordered table-hover table-sm table-striped my-3">
                <thead>
                    <tr>
                        <th></th>
                        <th>Moteur de recherche</th>
                        <th>IDE / Éditeur</th>
                        <th>Navigateur</th>
                    </tr>
                </thead>
                <tbody>
                    {LOVES.map((label, level) => {
                        return <tr key={uuid.v4()}>
                            <td>{label}</td>
                            <td>
                                {this.state.skills.filter(skill => {
                                    return skill.level == level && skill.type == 'research';
                                }).map(skill => {
                                    return <span key={uuid.v4()} className="badge badge-pill badge-dark mx-1">{skill.name}</span>
                                })}
                            </td>
                            <td>
                                {this.state.skills.filter(skill => {
                                    return skill.level == level && skill.type == 'editor';
                                }).map(skill => {
                                    return <span key={uuid.v4()} className="badge badge-pill badge-secondary mx-1">{skill.name}</span>
                                })}
                            </td>
                            <td>
                                {this.state.skills.filter(skill => {
                                    return skill.level == level && skill.type == 'navigator';
                                }).map(skill => {
                                    return <span key={uuid.v4()} className="badge badge-pill badge-light mx-1">{skill.name}</span>
                                })}
                            </td>
                        </tr>
                    }).reverse()}
                </tbody>
            </table>
        </section>
    }
}