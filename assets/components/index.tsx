import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone, light } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { SyntheticEvent, useEffect } from "react";
import useMain from "@assets/hooks/useMain";
import useLayout from "@assets/hooks/useLayout";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Layout from "./layout";
import Project from "./project";
import Skill from "./skill";
import TimelineLine from "./timeline/line";
import TimelineTable from "./timeline/table";

const COMPONENTS = {
  about: About,
  contact: Contact,
  me: Hero,
  project: Project,
  timeline: TimelineLine,
  calendar: TimelineTable,
  skill: Skill,
};

const GRID = [
  ['me'],
  ['about', 'skill'],
  ['timeline', 'calendar'],
  ['project'],
  // ['contact'],
];

export default function Index() {
  useEffect(() => {
    // Open all details for desktop
    if (document.body.clientWidth > 1200) {
      document.querySelectorAll('details').forEach((details) => {
        details.open = true;
      });
    }
  }, []);

  return <main>
    <Layout components={COMPONENTS} grid={GRID}>
      <Menu />
    </Layout>
    {/*<CookieCompliance />*/}
  </main>;
}

function Menu() {
  const main = useMain();
  const layout = useLayout();

  const onClickFullscreen = (evt: SyntheticEvent) => {
    evt.preventDefault();
    layout.toggle();
  };

  const onClickLocale = (locale: string) => (evt: SyntheticEvent) => {
    evt.preventDefault();
    main.setLocale(locale);
    layout.toggle();
  };

  return <aside className="menu">
    <button type="button" onClick={onClickFullscreen}>
      <FontAwesomeIcon icon={light('bars-staggered')} />
    </button>
    <nav>
      <a href="/fr" onClick={onClickLocale('fr')}>Français</a>
      <a href="/en" onClick={onClickLocale('en')}>English</a>
    </nav>
  </aside>;
}

function CookieCompliance() {
  if (typeof document === 'undefined') return null;
  if (document.cookie.includes('cookie_compliance')) return null;
  if (document.cookie.includes('cookie_dissuasion')) return null;

  return <aside className="cookie-compliance">
    <FontAwesomeIcon icon={duotone('cookie-bite')} />
  </aside>
}