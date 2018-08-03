

import React, { Component } from 'react';
import Classnames from 'classnames';
import '@stylesheets/components/loader/mountain';

export default class Tree extends Component {
    render() {
        const classes = Classnames(this.props.className, 'mountain');

        return <article {...this.props} className={classes} />
    }
}
