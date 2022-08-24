import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "@assets/hooks/useMain";

export default function Project() {
  const main = useMain();

  return <>
    <h3>{main.translate('My personal projects')}</h3>
    <article>
      <div className="accordion">
        <details>
          <summary>BOCSS</summary>
          <p>Une librairie avec une suite d'outil qui permet de générer une feuille de style à partir des TemplateString javascript.</p>
          <ul>
            <li>Partage des variables entre le JS et le CSS ;</li>
            <li>Possible réduction de la taille des sources ;</li>
          </ul>
        </details>
        <details>
          <summary>
            <span>Gestion des traductions</span>
            <a href="https://www.npmjs.com/package/@jochlain/translations" target="_blank" rel="noopener noreferer">
              <FontAwesomeIcon icon={brands('npm')} />
            </a>
          </summary>
          <p>À partir d'un catalogue de traductions permettre la traduction en JS.</p>
          <ul>
            <li>Partage des catalogues de traductions entre le front et le back</li>
          </ul>
        </details>
        <details>
          <summary>Pixel Art</summary>
          <p>Une application web qui permet de faire du pixel art en ligne.</p>
          <ul>
            <li>Gestion des calques et animations ;</li>
            <li>Gestion de l'export sous divers formats d'images et en CSS ;</li>
          </ul>
        </details>
      </div>
    </article>
  </>;
}
