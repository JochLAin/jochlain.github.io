

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
    label: 'Formations && Expériences',
    anchor: 'history',
    ref: React.createRef(),
    active: false,
}, {
    label: 'Compétences && Maîtrises',
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
            // if (this.top != 0) {
            //     document.location.href = `#${this.state.menu[0].anchor}`;
            // }
            setTimeout(() => {
                window.addEventListener('resize', this.refreshPosition, false);
                window.addEventListener('scroll', this.onScroll, false);
                this.refreshMenu();
            }, 100);
        })
    }

    onClickItem = () => {
        this.scrolling = true;

        setTimeout(() => {
            this.refreshMenu();
            this.scrolling = false;
        }, TIMEOUT_SCROLL);
    }

    onScroll = (event) => {
        this.refreshMenu();
        // event.preventDefault();
        // const scroll = window.pageYOffset || document.documentElement.scrollTop;

        // if (!this.scrolling) {
        //     this.scrolling = true;
        //     const anchor = this.anchor;
        //     const index = anchor ? this.state.menu.findIndex(item => item.anchor == anchor) : 0;

        //     if (scroll > this.last_scroll) {
        //         if (index == this.state.menu.length -1) {
        //             this.scrolling = false;
        //             return;
        //         }
        //         const next = this.state.menu[index +1];
        //         document.location.href = `#${next.anchor}`;
        //     } else {
        //         if (index == 0) {
        //             this.scrolling = false;
        //             return;
        //         }
        //         const next = this.state.menu[index -1];
        //         document.location.href = `#${next.anchor}`;
        //     }

        //     setTimeout(() => {
                // this.refreshMenu();
        //         this.scrolling = false;
        //     }, TIMEOUT_SCROLL);
        // }

        // this.last_scroll = scroll <= 0 ? 0 : scroll;
    }

    refreshMenu = () => {
        const anchor = this.anchor;
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

    get anchor() {
        return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
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
