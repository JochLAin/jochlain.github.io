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
                <a href="https://www.linkedin.com/in/jocelyn-faihy-421ba885/" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={brands('linkedin')} size="2x" fixedWidth />
                </a>
                <a href="https://github.com/jochlain" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={brands('github')} size="2x" fixedWidth />
                </a>
                <a href="https://www.npmjs.com/~jochlain" target="_blank" rel="noreferrer noopener">
                    <FontAwesomeIcon icon={brands('npm')} size="2x" fixedWidth />
                </a>
            </footer>
        </article>
        <a href="#about" className="navigation-hint-bottom" title={main.translate('Next step')}>
            <FontAwesomeIcon icon={regular('angle-down')} size="2x" fixedWidth />
        </a>
    </>;
}
