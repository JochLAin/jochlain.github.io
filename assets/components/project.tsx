import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "@assets/hooks/useMain";

export default function Project() {
  const main = useMain();

  return <>
    <h3>{main.translate('My personal projects')}</h3>
    <section>
      <article>
        <div className="accordion">
          <details>
            <summary>BOCSS</summary>
            <p>{main.translate('A library with a suite of tools to generate a stylesheet from javascript TemplateString', {}, 'project')}</p>
            <ul>
              <li>{main.translate('Sharing of variables between JS and CSS', {}, 'project')} ;</li>
              <li>{main.translate('Possible reduction of the size of the sources', {}, 'project')} ;</li>
            </ul>
          </details>
          <details>
            <summary>
              <span>{main.translate('Managing translations', {}, 'project')}</span>
              <a href="https://www.npmjs.com/package/@jochlain/translations" target="_blank" rel="noopener noreferer">
                <FontAwesomeIcon icon={brands('npm')} />
              </a>
            </summary>
            <p>{main.translate('From a catalog of translations allow translation in JS.', {}, 'project')}</p>
            <ul>
              <li>{main.translate('Sharing of translation catalogs between frontend and backend', {}, 'project')} ;</li>
            </ul>
          </details>
          <details>
            <summary>Pixel Art</summary>
            <p>{main.translate('A web app that allows you to make pixel art.', {}, 'project')}</p>
            <ul>
              <li>{main.translate('Layer and animation management', {}, 'project')} ;</li>
              <li>{main.translate('Export in various image formats and in CSS', {}, 'project')} ;</li>
            </ul>
          </details>
        </div>
      </article>
    </section>
  </>;
}
