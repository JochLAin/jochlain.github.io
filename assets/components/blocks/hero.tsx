import React from "react";
import useMain from "../../hooks";
import Adventure from "../adventure";

export default function Hero() {
    const main = useMain();

    return <>
        <div className="h-100vh">
            <Adventure />
        </div>
        <article id="presentation" className="block block-hero">
            <div className="hero-back">
            </div>
            <div className="hero-front">
                <h1>Jocelyn Faihy</h1>
                <h2>{main.translate('Web developer (fullstack)', {}, 'hero')}</h2>
                <blockquote>
                    {main.translate('The code both visual and structural.', {}, 'hero')}
                </blockquote>
                <footer>
                    <span className="fab fa-github fa-2x fa-fw" />
                    <span className="fab fa-linkedin fa-2x fa-fw" />
                </footer>
                <div className="hero-front--slash" />
            </div>
        </article>
    </>;
}
