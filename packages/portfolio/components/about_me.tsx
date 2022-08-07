import React from "react";
import useMain from "@assets/hooks/useMain";

export default function AboutMe() {
  const main = useMain();

  return <article style={{ paddingInline: '2rem' }}>
    <h3>{main.translate('About me')}</h3>
    <p>
      Ayant commencé ma formation dans le développement logiciel puis dans le développement mobile, j'ai finalement choisi le développement web pour ma carrière car il m'offrait beaucoup plus de liberté.<br />
      Dans ce domaine depuis maintenant {(new Date()).getFullYear() - 2014} années, j'ai appris à mettre en place des projets de l'expression du besoin à la surveillance et la maintenance d'un site web.
    </p>
    <p>
      Aussi à l'aise en <b>frontend</b> qu'en <b>backend</b>, c'est-à-dire l'interface / l'expérience utilisateur et l'interface avec la machine / les performances.<br />
      J'ai pu utilisé de nombreux langages et outils, principalement <b>Symfony</b> et <b>Node</b> pour le côté back et <b>React</b> et <b>SCSS</b> pour le front.<br />
      Pour plus d'informations, je vous laisse voir le graphique sur l'écran à droite qui liste tous les outils utilisés ces dernières années.
    </p>
    <p>
      Au cours de ces expériences, j'ai pu accompagner des clients pour développer :
    </p>
    <details>
      <summary>un réseau social de la maison : <a href="https://kozikaza.com" target="_blank" rel="noopener noreferer">Kozikaza</a> ;</summary>
      WIP : En cours de rédaction
    </details>
    <details>
      <summary>un gestionnaire de big data sur des plans 3D : <a href="https://kazaplan.com" target="_blank" rel="noopener noreferer">Kazaplan</a> ;</summary>
      WIP : En cours de rédaction
    </details>
    <details>
      <summary>un CMS interne pour lancer des sites vitrines ;</summary>
      WIP : En cours de rédaction
    </details>
    <details>
      <summary>un site e-commerce de vente de valises et mousses : <a href="https://rank-shop.fr" target="_blank" rel="noopener noreferer">Rank</a> ;</summary>
      WIP : En cours de rédaction
    </details>
    <details>
      <summary>une suite d'outil pour la gestion des ressources humaines : <a href="https://rhsuite.com" target="_blank" rel="noopener noreferer">RHSuite</a> ;</summary>
      WIP : En cours de rédaction
    </details>
  </article>;
}
