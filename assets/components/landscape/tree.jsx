

import React, { Component } from 'react';
import Classnames from 'classnames';
import '@stylesheets/components/loader/tree';

export default class Tree extends Component {
    render() {
        const classes = Classnames(this.props.className, 'tree');

        return <article {...this.props} className={classes}>
            <section className="tree__trunk" />
            <section className="tree__foliage" />
        </article>
    }
}
