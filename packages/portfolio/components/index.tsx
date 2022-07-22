import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "@assets/hooks/useMain";
import useTypeWriting from "@assets/hooks/useTypeWriting";
import Hero from "./hero";
import Timeline from "./timeline";

export default function Portfolio() {
  return <main>
    <Hero />
    <Timeline />
  </main>;
}

export function Presentation() {
  const content = useTypeWriting(['Web', 'Fullstack', 'Backend', 'Frontend', 'Symfony', 'React', 'HTML / CSS / JS', 'PHP', 'SCSS']);
  const main = useMain();

  return <article>
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
      <a href="https://www.linkedin.com/in/jocelyn-faihy-421ba885/" target="_blank" rel="noreferrer noopener">
        <FontAwesomeIcon icon={brands('linkedin')} size="2x" fixedWidth />
      </a>
    </footer>
    <a href="#timeline" className="navigation-hint">
      <FontAwesomeIcon icon={regular('angle-down')} size="2x" fixedWidth />
    </a>
  </article>
}
