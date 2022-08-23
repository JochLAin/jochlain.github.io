import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "@assets/hooks/useMain";

export default function AboutMe() {
  const main = useMain();

  return <>
    <h3>{main.translate('About me')}</h3>
    <article style={{ paddingInline: '2rem' }}>
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
        <ul>
          <li>Symfony 2.3 à 3.4</li>
          <li>Plus d'un million d'utilisateurs</li>
          <li>Performance BDD / SQL</li>
          <li>Structure maître-esclave</li>
          <li>AB Testing</li>
          <li>SEO</li>
        </ul>
      </details>
      <details>
        <summary>un gestionnaire de big data sur des plans 3D : <a href="https://kazaplan.com" target="_blank" rel="noopener noreferer">Kazaplan</a> ;</summary>
        <ul>
          <li>Front décorrélé du back</li>
          <li>Intranet</li>
          <li>Big data</li>
        </ul>
      </details>
      <details>
        <summary>un CMS interne pour lancer des sites vitrines à la volée ;</summary>
        <ul>
          <li>Gestion des différents types de contenus</li>
        </ul>
      </details>
      <details>
        <summary>un site e-commerce de vente de valises et mousses : <a href="https://rank-shop.fr" target="_blank" rel="noopener noreferer">Rank</a> ;</summary>
        <ul>
          <li>Magento</li>
          <li>Thème adapté au besoin</li>
          <li>Import de produits personnalisé</li>
        </ul>
      </details>
      <details>
        <summary>une suite d'outil pour la gestion des ressources humaines : <a href="https://rhsuite.com" target="_blank" rel="noopener noreferer">RHSuite</a> ;</summary>
        <ul>
          <li>Symfony 2.8 à 4.4</li>
          <li>Gestion de droits</li>
          <li>Génération de document dynamique</li>
          <li>Gestion de planning</li>
          <li>Gestion de paie</li>
          <li>Application mobile</li>
        </ul>
      </details>
    </article>
  </>;
}
