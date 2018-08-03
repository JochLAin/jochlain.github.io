
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Classnames from 'classnames';
import '@stylesheets/components/loader/comet';

export default class Comet extends Component {
    ref_comet = React.createRef();

    render() {
        const classes = Classnames('comet', Math.random() > 1 / 3 && 'comet--big');
        const styles = {
            left: Math.floor(Math.random() * Math.floor(100)) + '%',
        };

        return <section ref={this.ref_comet} className={classes} style={styles} />
    }

    componentDidMount() {
        const delay = Math.floor(Math.random() * Math.floor(2700));
        setTimeout(() => {
            this.ref_comet.current.classList.add('comet--end');
            setTimeout(() => {
                ReactDOM.unmountComponentAtNode(this.ref_comet.current);
                this.ref_comet.current.remove();
            }, 2000);
        }, delay);
    }
}
