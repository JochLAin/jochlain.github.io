import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "@assets/hooks/useMain";

export default function Project() {
  const main = useMain();

  return <>
    <h3>{main.translate('title.project')}</h3>
    <section>
      <article>
        <div className="accordion">
          <details>
            <summary>BOCSS</summary>
            <p>{main.translate('project.bocss.detail', {}, 'project')}</p>
            <ul>
              <li>{main.translate('project.bocss.feature.1', {}, 'project')} ;</li>
              <li>{main.translate('project.bocss.feature.2', {}, 'project')} ;</li>
            </ul>
          </details>
          <details>
            <summary>
              <span>{main.translate('project.translations.detail', {}, 'project')}</span>
              <a href="https://www.npmjs.com/package/@jochlain/translations" target="_blank" rel="noopener noreferer">
                <FontAwesomeIcon icon={brands('npm')} />
              </a>
              <a href="https://github.com/JochLAin/translations" target="_blank" rel="noopener noreferer">
                <FontAwesomeIcon icon={brands('github')} />
              </a>
            </summary>
            <p>{main.translate('project.translations.description', {}, 'project')}</p>
            <ul>
              <li>{main.translate('project.translations.feature.1', {}, 'project')} ;</li>
            </ul>
          </details>
          <details>
            <summary>Pixel Art</summary>
            <p>{main.translate('project.pixelart.description', {}, 'project')}</p>
            <ul>
              <li>{main.translate('project.pixelart.feature.1', {}, 'project')} ;</li>
              <li>{main.translate('project.pixelart.feature.2', {}, 'project')} ;</li>
            </ul>
          </details>
        </div>
      </article>
    </section>
  </>;
}
