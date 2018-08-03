

import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Classnames from 'classnames';

const TIMEOUT_SCROLL = 75;
const MENU = [{
    label: 'Présentation',
    anchor: 'presentation',
    ref: React.createRef(),
    active: true,
}, {
    label: 'À propos',
    anchor: 'description',
    ref: React.createRef(),
    active: true,
}, {
    label: 'Formations && Expériences',
    anchor: 'history',
    ref: React.createRef(),
    active: false,
}, {
    label: 'Compétences && Centres d\'intérêt',
    anchor: 'skill',
    ref: React.createRef(),
    active: false,
}];

export default class Navigation extends Component {
    state = { menu: MENU };

    scrolling = false;
    last_scroll = 0;

    constructor(...params) {
        super(...params);
        this.top = 0;
    }

    render() {
        const classes = Classnames("navigation", this.top <= (window.innerHeight / 2) ? 'navigation--light' : 'navigation--dark');
        return <nav className={classes}>
            {this.state.menu.map((item, index) => {
                const classes = Classnames("navigation__link", item.active && "active");
                return <section key={`nav-item-${index}`} ref={item.ref} className="navigation__item">
                    <a className={classes} href={`#${item.anchor}`} onClick={this.onClickItem}>
                        <span className="navigation__label mr-2">{item.label}</span>
                        <FontAwesomeIcon icon={[item.active ? "fas" : "far", "circle"]} />
                    </a>
                </section>
            })}
        </nav>;
    }

    componentDidMount() {
        this.refreshPosition();
        $(document).ready(() => {
            window.addEventListener('resize', this.refreshPosition, false);
            window.addEventListener('scroll', this.refreshMenu, false);
            this.refreshMenu();
        })
    }

    onClickItem = () => {
        this.scrolling = true;

        setTimeout(() => {
            this.refreshMenu();
            this.scrolling = false;
        }, TIMEOUT_SCROLL);
    }

    refreshMenu = () => {
        const menu = [...this.state.menu];
        let current = 0;
        for (let index in menu) {
            menu[index].active = false;
            if (this.top >= menu[index].position.top) {
                current = index;
            }
        }
        menu[current].active = true;
        this.setState({ menu });
    }

    refreshPosition = () => {
        const menu = [...this.state.menu];
        for (let index in menu) {
            menu[index].position = document.getElementById(menu[index].anchor).getBoundingClientRect();
        }
        this.setState({ menu });
    }

    set top(top) {
        if (document.documentElement.scrollTop) {
            document.documentElement.scrollTop = top;
        } else if (window.pageYOffset) {
            window.pageYOffset = top;
        }
    }
    get top() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
}
