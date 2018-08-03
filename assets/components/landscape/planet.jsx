

import React, { Component } from 'react';
import Classnames from 'classnames';
import uuid from 'uuid';

export default class Planet extends Component {
    render() {
        const color_index = Math.floor(Math.random() * Math.floor(20));
        const color = Object.keys(colors)[color_index];
        const nb_crater = Math.floor(Math.random() * Math.floor(3));
        const size = (Math.floor(Math.random() * Math.floor(15)) +10) + 'rem';

        const classes = Classnames('planet', `planet--${color}`);
        const styles = {
            left: (Math.floor(Math.random() * Math.floor(100)) -10) + '%',
            top: Math.floor(Math.random() * Math.floor(100)) + '%',
            height: size, width: size,
        };

        return <article className={classes} style={styles}>
            {[...Array(nb_crater)].map(() => {
                const classes = Classnames('planet__crater', `planet__crater--${color}`);
                const size = Math.floor(Math.random() * Math.floor(50)) + '%';

                const styles = {
                    left: Math.floor(Math.random() * Math.floor(100)) + '%',
                    top: Math.floor(Math.random() * Math.floor(100)) + '%',
                    height: size, width: size,
                };

                return <section key={uuid.v4()} className={classes} style={styles} />
            })}
        </article>
    }
}