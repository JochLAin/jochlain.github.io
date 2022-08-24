import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { SyntheticEvent, useEffect } from "react";
import AboutMe from "./about_me";
import Hero from "./hero";
import Layout from "./layout";
import Project from "./project";
import Skill from "./skill";
import TimelineLine from "./timeline/line";
import TimelineTable from "./timeline/table";
import useMain from "@assets/hooks/useMain";

const COMPONENTS = {
  about: AboutMe,
  me: Hero,
  project: Project,
  'timeline-line': TimelineLine,
  'timeline-table': TimelineTable,
  skill: Skill,
};

const GRID = [
  ['me'],
  ['about', 'skill'],
  ['timeline-line', 'timeline-table'],
  ['project'],
];

export default function Index() {
  const main = useMain();

  useEffect(() => {
    // Open all details for desktop
    if (document.body.clientWidth > 1200) {
      document.querySelectorAll('details').forEach((details) => {
        details.open = true;
      });
    }
  }, []);

  const onClickFullscreen = (evt: SyntheticEvent) => {
    evt.preventDefault();
    document.body.classList.toggle('overview');
  };

  const onClickLocale = (locale: string) => (evt: SyntheticEvent) => {
    evt.preventDefault();
    document.body.classList.toggle('overview');
    main.setLocale(locale);
  };

  return <main>
    <aside className="menu">
      <button type="button" onClick={onClickFullscreen}>
        <FontAwesomeIcon icon={duotone('bars-staggered')} />
      </button>
      <nav>
        <a href="/fr" onClick={onClickLocale('fr')}>Français</a>
        <a href="/en" onClick={onClickLocale('en')}>English</a>
      </nav>
    </aside>
    <Layout components={COMPONENTS} grid={GRID} />
  </main>;
}
