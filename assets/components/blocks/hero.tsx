import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "../../hooks";

export default function Hero() {
    const main = useMain();

    return <>
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
                    <a href="https://github.com/jochlain" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={brands('github')} size="2x" fixedWidth />
                    </a>
                    <span className="fab fa-linkedin fa-2x fa-fw" />
                </footer>
                <div className="hero-front--slash" />
            </div>
        </article>
    </>;
}
