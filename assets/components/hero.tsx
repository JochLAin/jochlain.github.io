import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "@assets/hooks/useMain";
import useTypeWriting from "@assets/hooks/useTypeWriting";

export default function Hero() {
    const content = useTypeWriting(['Web', 'Fullstack', 'Backend', 'Frontend', 'Symfony', 'React', 'HTML / CSS / JS', 'PHP', 'SCSS']);
    const main = useMain();

    return <>
        <span className="navigation-hint-top">
            Navigation
            <FontAwesomeIcon icon={solid('share')} transform="flip-h rotate--90" />
        </span>
        <article>
            <h1>Jocelyn Faihy</h1>
            <h2>
                <span className="type-writing">{content}</span>
                <span>{main.translate('developer', {}, 'hero')}</span>
            </h2>
            <blockquote>
                {main.translate('The code both visual and structural.', {}, 'hero')}
            </blockquote>
            <footer>
                <a href="https://github.com/jochlain" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={brands('github')} size="2x" fixedWidth />
                </a>
                <a href="@assets/components/hero" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={brands('linkedin')} size="2x" fixedWidth />
                </a>
            </footer>
        </article>
        <a href="@assets/components/hero#timeline" className="navigation-hint-bottom">
            <FontAwesomeIcon icon={regular('angle-down')} size="2x" fixedWidth />
        </a>
    </>;
}
