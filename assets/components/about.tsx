import React from "react";
import useMain from "@assets/hooks/useMain";

export default function About() {
  const main = useMain();

  return <>
    <h3>{main.translate('title.about')}</h3>
    <section>
      <article>
        <p>
          {main.translate('about.paragraph.1', {}, 'about')}<br />
          {main.translate('about.paragraph.2', { count: (new Date()).getFullYear() - 2014 }, 'about')}
        </p>
        <p>
          {main.translate('about.paragraph.3', {}, 'about')}<br />
        </p>
        <p>
          {main.translate('about.paragraph.4', {}, 'about')} :
        </p>
        <details>
          <summary>{main.translate('about.project.kozikaza.detail', {}, 'about')} : <a href="https://kozikaza.com" target="_blank" rel="noopener noreferer">Kozikaza</a> ;</summary>
          <ul>
            <li>Symfony 2.3 → 3.4</li>
            <li>{main.translate('about.project.kozikaza.skill.1', {}, 'about')}</li>
            <li>{main.translate('about.project.kozikaza.skill.2', {}, 'about')}</li>
            <li>{main.translate('about.project.kozikaza.skill.3', {}, 'about')}</li>
            <li>AB Testing</li>
            <li>SEO</li>
          </ul>
        </details>
        <details>
          <summary>{main.translate('about.project.kazaplan.detail', {}, 'about')} : <a href="https://kazaplan.com" target="_blank" rel="noopener noreferer">Kazaplan</a> ;</summary>
          <ul>
            <li>Symfony 3.4 / React 16</li>
            <li>{main.translate('about.project.kazaplan.skill.1', {}, 'about')}</li>
            <li>Intranet</li>
            <li>Big data</li>
          </ul>
        </details>
        <details>
          <summary>{main.translate('about.project.cms.detail', {}, 'about')} ;</summary>
          <ul>
            <li>Symfony 3.4 / React 16</li>
            <li>{main.translate('about.project.cms.skill.1', {}, 'about')}</li>
          </ul>
        </details>
        <details>
          <summary>{main.translate('about.project.rank.detail', {}, 'about')} : <a href="https://rank-shop.fr" target="_blank" rel="noopener noreferer">Rank</a> ;</summary>
          <ul>
            <li>Magento 2</li>
            <li>{main.translate('about.project.rank.skill.1', {}, 'about')}</li>
            <li>{main.translate('about.project.rank.skill.2', {}, 'about')}</li>
          </ul>
        </details>
        <details>
          <summary>{main.translate('about.project.rhsuite.detail', {}, 'about')} : <a href="https://rhsuite.com" target="_blank" rel="noopener noreferer">RHSuite</a> ;</summary>
          <ul>
            <li>Symfony 2.8 → 4.4 / React 16 → 18</li>
            <li>{main.translate('about.project.rhsuite.skill.1', {}, 'about')}</li>
            <li>{main.translate('about.project.rhsuite.skill.2', {}, 'about')}</li>
            <li>{main.translate('about.project.rhsuite.skill.3', {}, 'about')}</li>
            <li>{main.translate('about.project.rhsuite.skill.4', {}, 'about')}</li>
            <li>{main.translate('about.project.rhsuite.skill.5', {}, 'about')}</li>
          </ul>
        </details>
      </article>
    </section>
  </>;
}
