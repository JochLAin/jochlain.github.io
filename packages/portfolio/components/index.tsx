import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "../../../assets/hooks";
import Hero from "./hero";
import Timeline from "./timeline";

export default function Portfolio() {
  return <main>
    <Hero />
    <Timeline />
  </main>;
}

export function Presentation() {
  const main = useMain();

  return <>
    {/*<h1>Jocelyn Faihy</h1>*/}
    {/*<h2>{main.translate('Web developer (fullstack)', {}, 'hero')}</h2>*/}
    {/*<blockquote>*/}
    {/*  {main.translate('The code both visual and structural.', {}, 'hero')}*/}
    {/*</blockquote>*/}
    {/*<footer>*/}
    {/*  <a href="https://github.com/jochlain" target="_blank" rel="noreferrer noopener">*/}
    {/*    <FontAwesomeIcon icon={brands('github')} size="2x" fixedWidth />*/}
    {/*  </a>*/}
    {/*</footer>*/}
  </>
}
