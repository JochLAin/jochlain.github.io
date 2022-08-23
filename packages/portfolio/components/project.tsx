import React from "react";
import useMain from "@assets/hooks/useMain";

export default function Project() {
  const main = useMain();

  return <>
    <h3>{main.translate('My personal projects')}</h3>
    <article style={{ paddingInline: '2rem' }}>
      <div className="accordion">
        <details>
          <summary>BOCSS</summary>
          <p>Une librairie avec une suite d'outil qui permet de générer une feuille de style à partir des TemplateString javascript</p>
        </details>
        <details>
          <summary>Application de traduction</summary>
          <p>Une application web qui permet de gérer ses catalogues de traductions.</p>
        </details>
        <details>
          <summary>Pixel Art</summary>
          <p>Une application web qui permet de faire du pixel art en ligne.</p>
        </details>
        <details>
          <summary>CMS</summary>
          <p>Un CMS permettant de créer son blog sur son nom de domaine.</p>
        </details>
      </div>
    </article>
  </>;
}
