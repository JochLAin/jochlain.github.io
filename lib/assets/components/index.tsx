import React from "react";
import { MainProvider } from "../../../assets/hooks/useMain";
import Timeline from "./timeline";

export default function Index(props: { locale?: string }) {
  return <MainProvider locale={props.locale}>
    <nav>
      <header>
        <img src="./photo.png" alt="Photo" />
      </header>
      <ul className="personal fa-ul">
        <li><span className="fa-li"><span className="fas fa-location-dot fa-fw"></span></span>47 rue de la Brugnière<br/><small>01800 Villieu Loyes Mollon</small></li>
        <li><span className="fa-li"><span className="fad fa-earth fa-fw"></span></span>https://jochlain.github.io</li>
        <li><span className="fa-li"><span className="fas fa-at fa-fw"></span></span>jochlain@gmail.com</li>
        <li><span className="fa-li"><span className="fad fa-phone fa-fw"></span></span>+33 6 76 54 53 61</li>
        <li><span className="fa-li"><span className="fad fa-cake-candles fa-fw"></span></span>29/11/1992 - 29 ans</li>
        <li><span className="fa-li"><span className="fad fa-car fa-fw"></span></span>Permis A1 + B</li>
        <li><span className="fa-li"><span className="fad fa-family fa-fw"></span></span>2 enfants</li>
      </ul>
      <Timeline format="pdf" />
    </nav>
    <main>
      <header>
        <h1>Nom : Faihy Jocelyn</h1>
        <h2>Métier : Développeur web</h2>
      </header>
      <section>
        <div className="presentation">
          <p>
            J'ai découvert ma passion du code par le développement logiciel (C++, Qt, C#) en BTS.
            Ensuite j'ai continué dans la même voie mais dans le mobile pendant l'alternance de ma licence pro'.
            Enfin, toujours curieux et avec une bonne base, je me suis formé en autodidacte sur les langages du web pour en faire ma carrière.
          </p>
          <p>
            Aujourd'hui, fort d'une expérience de plus de 8 ans, j'ai pu travailler sur de gros projets avec des problématiques différentes.
            Je recherche une entreprise :
          </p>
          <ul>
            <li>- curieuse, ouverte aux nouvelles technologies, cherchant à s'améliorer constamment ;</li>
            <li>- à l'écoute du client, cherchant les meilleurs solutions pour correspondre au besoin ;</li>
            <li>- organisée, pour avoir une vision court / moyen terme claire ;</li>
          </ul>
        </div>
        <div className="row">
          <div className="col">
            <h3>Expériences professionnelles</h3>
            <h5>AMTSolutions, Lyon</h5>
            <ul>
              <li>Ajout de nouvelles fonctionnalités</li>
              <li>Amélioration / optimisation des performances</li>
              <li>Mise en place responsive d'une application web</li>
              <li>Migration de thème</li>
              <li>Mise en place d'une PWA (Progressive WebApp)</li>
              <li>Développement de site e-commerce</li>
              <li>Veille et proposition pour aider à la gestion de projet et au DevOps</li>
            </ul>
            <h5>Wanadev, Lyon</h5>
            <ul>
              <li>Fonction généraliste dans la conception et le développement d'application web</li>
              <li>Conception d'un CMS de A à Z</li>
              <li>Présentations sur divers sujets du web</li>
            </ul>
          </div>
          <div className="col">
            <h3>Savoir-être</h3>
            <ul>
              <li>Autonome</li>
              <li>Logique</li>
              <li>Curieux</li>
              <li>Honnête</li>
              <li>Pédagogue</li>
            </ul>
            <h3>Savoir-faire</h3>
            <ul>
              <li>Gestion de projet</li>
              <li>Optimisation SQL</li>
              <li>WebDesign</li>
            </ul>
            <h3>Langues</h3>
            <ul>
              <li>Français : Langue maternelle</li>
              <li>Anglais : Lu, parlé, écrit</li>
              <li className="hr" />
              <li>Espagnol : Débutant</li>
              <li>Japonais : Novice</li>
              <li>Russe : Novice</li>
            </ul>
            <h3>Centres d'intérêts</h3>
            <ul>
              <li>Le code</li>
              <li>Les langues</li>
              <li>Le pixel art</li>
              <li>Le poker</li>
              <li>Marvel</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </MainProvider>;
}
