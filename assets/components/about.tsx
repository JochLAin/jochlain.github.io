import React from "react";
import useMain from "@assets/hooks/useMain";

export default function About() {
  const main = useMain();

  return <>
    <h3>{main.translate('About me')}</h3>
    <section>
      <article>
        <p>
          {main.translate('Having started my training in software development and then in mobile development, I naturally turn to web development because it offered me much more freedom.', {}, 'about')}<br />
          {main.translate('In this field for {count} years now, I have learned to set up projects from the expression of the need to the monitoring and maintenance of a website.', { count: (new Date()).getFullYear() - 2014 }, 'about')}
        </p>
        <p>
          {main.translate('Equally comfortable in the frontend as in the backend, i.e. the user interface / experience and performance, I master many languages and tools, mainly Symfony and Node for the backend and React and SCSS for the frontend.', {}, 'about')}<br />
        </p>
        <p>
          {main.translate('Below are some examples of work in which I was able to participate during my experiences', {}, 'about')} :
        </p>
        <details>
          <summary>{main.translate('a social network for the house', {}, 'about')} : <a href="https://kozikaza.com" target="_blank" rel="noopener noreferer">Kozikaza</a> ;</summary>
          <ul>
            <li>Symfony 2.3 → 3.4</li>
            <li>{main.translate('More than one million users', {}, 'about')}</li>
            <li>{main.translate('Database request performance', {}, 'about')}</li>
            <li>{main.translate('Master-slave infrastructure', {}, 'about')}</li>
            <li>AB Testing</li>
            <li>SEO</li>
          </ul>
        </details>
        <details>
          <summary>{main.translate('a big data manager on 3D plans', {}, 'about')} : <a href="https://kazaplan.com" target="_blank" rel="noopener noreferer">Kazaplan</a> ;</summary>
          <ul>
            <li>Symfony 3.4 / React 16</li>
            <li>{main.translate('Front decorrelated from back', {}, 'about')}</li>
            <li>Intranet</li>
            <li>Big data</li>
          </ul>
        </details>
        <details>
          <summary>{main.translate('an internal CMS to launch showcase sites on the fly', {}, 'about')} ;</summary>
          <ul>
            <li>Symfony 3.4 / React 16</li>
            <li>{main.translate('Multiple domain name project', {}, 'about')}</li>
          </ul>
        </details>
        <details>
          <summary>{main.translate('an e-commerce site for the sale of suitcases and foams', {}, 'about')} : <a href="https://rank-shop.fr" target="_blank" rel="noopener noreferer">Rank</a> ;</summary>
          <ul>
            <li>Magento 2</li>
            <li>{main.translate('Theme adapted to the client\'s needs', {}, 'about')}</li>
            <li>{main.translate('Custom product import', {}, 'about')}</li>
          </ul>
        </details>
        <details>
          <summary>{main.translate('a suite of tools for human resources management', {}, 'about')} : <a href="https://rhsuite.com" target="_blank" rel="noopener noreferer">RHSuite</a> ;</summary>
          <ul>
            <li>Symfony 2.8 → 4.4 / React 16 → 18</li>
            <li>{main.translate('Rights management', {}, 'about')}</li>
            <li>{main.translate('Dynamic document generation', {}, 'about')}</li>
            <li>{main.translate('Planning management', {}, 'about')}</li>
            <li>{main.translate('Pay management', {}, 'about')}</li>
            <li>{main.translate('Tablet app linked by API', {}, 'about')}</li>
          </ul>
        </details>
      </article>
    </section>
  </>;
}
