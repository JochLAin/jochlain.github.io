

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Classnames from 'classnames';
import uuid from 'uuid';
import * as colors from '@constants/color';
import '@stylesheets/components/loader/rocket';

delete colors.default;

export default class Rocket extends Component {

    constructor(...params) {
        super(...params);
        this.state = {
            color_engine: 'amber',
            color_rocket: 'red',
            color_flame: 'red',
        };
    }

    render() {
        const classes = Classnames('rocket', `rocket--${this.state.color_engine}`);

        return <Fragment>
            <article className={classes}>
                {(() => {
                    const classes = Classnames('rocket__spaceship', `rocket__spaceship--${this.state.color_rocket}`);
                    return <section className={classes} />
                })()}
                <section className="rocket__window rocket__window--top" />
                <section className="rocket__wing rocket__wing--left" />
                <section className="rocket__wing rocket__wing--center" />
                <section className="rocket__wing rocket__wing--right" />
                <section className="rocket__engine" />
                {(() => {
                    const classes = Classnames('rocket__flames', `rocket__flames--${this.state.color_flame}`);
                    return <section className={classes} />
                })()}
            </article>
            <RocketConfiguration
                color_engine={this.state.color_engine}
                setColorEngine={(color) => this.setState({ color_engine: color })}

                color_rocket={this.state.color_rocket}
                setColorRocket={(color) => this.setState({ color_rocket: color })}

                color_flame={this.state.color_flame}
                setColorFlame={(color) => this.setState({ color_flame: color })}
            />
        </Fragment>
    }
}

export class RocketConfiguration extends Component {
    state = { configuring: false };

    render() {
        if (!this.state.configuring) {
            return ReactDOM.createPortal(
                <button type="button" className="d-none d-md-block btn btn-outline-light btn-sm position-absolute right-3 top-3" onClick={() => this.setState({ configuring: true })}>
                    <span className="fas fa-cog fa-fw" />
                </button>,
                document.body
            );
        }

        return ReactDOM.createPortal(
            <article className="d-none d-md-block col-md-6 col-lg-4 col-xl-3 bg-light position-absolute right-0 top-0 h-100vh shadow">
                <section className="position-relative h-100 w-100 pt-5">
                    <button type="button" className="btn btn-outline-dark btn-sm position-absolute right-0 top-3" onClick={() => this.setState({ configuring: false })}>
                        <span className="fas fa-sign-out-alt fa-fw" />
                    </button>
                    <article className="form-group">
                        <label className="font-weight-bold">
                            Couleur de la fusée :
                        </label>
                        <Colors property={this.props.color_rocket} onChoose={this.props.setColorRocket} />
                    </article>
                    <article className="form-group">
                        <label className="font-weight-bold">
                            Couleur du moteur :
                        </label>
                        <Colors property={this.props.color_engine} onChoose={this.props.setColorEngine} />
                    </article>
                    <article className="form-group">
                        <label className="font-weight-bold">
                            Couleur des flammes :
                        </label>
                        <article className="d-flex flex-wrap">
                            <ColorItem color="red" property={this.props.color_flame} onChoose={this.props.setColorFlame} />
                            <ColorItem color="blue" property={this.props.color_flame} onChoose={this.props.setColorFlame} />
                            <ColorItem color="white" property={this.props.color_flame} onChoose={this.props.setColorFlame} />
                        </article>
                    </article>
                </section>
            </article>,
            document.body
        );
    }
}

export class Colors extends Component {
    render() {
        return <article className="d-flex flex-wrap">
            {Object.keys(colors).map(color => {
                return <ColorItem key={uuid.v4()} {...this.props} color={color} />
            })}
            <ColorItem key={uuid.v4()} {...this.props} color="black" />
            <ColorItem key={uuid.v4()} {...this.props} color="white" />
        </article>
    }
}

export class ColorItem extends Component {
    render() {
        const classes = Classnames(
            `border rounded bg-${this.props.color} m-1`,
            this.props.property == this.props.color && 'border-black'
        );
        return <section className={classes} onMouseDown={() => this.props.onChoose(this.props.color)} style={{ height: '2rem', width: '2rem' }} />
    }
}
