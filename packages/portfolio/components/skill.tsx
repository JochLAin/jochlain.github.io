import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone, solid, light } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "@assets/hooks/useMain";

export default function Skill() {
  const main = useMain();

  return <article style={{ paddingInline: '5rem' }}>
    <h3>{main.translate('Skills')}</h3>
    <section style={{ display: 'flex', flexFlow: 'row wrap', gap: '2rem' }}>
      <section>
        <h4>{main.translate('Languages')}</h4>
        <SkillRate label="HTML" rate={5} />
        <SkillRate label="SCSS" rate={5} />
        <SkillRate label="JS" rate={4.5} />
        <SkillRate label="PHP" rate={4} />
        <SkillRate label="CSS" rate={3.5} />
        <SkillRate label="Node" rate={3} />
        <SkillRate label="Rust" rate={2} />
        <SkillRate label="Bash" rate={1.5} />
        <SkillRate label="Python" rate={1} />
        <SkillRate label="Java" rate={1} />
        <SkillRate label="Golang" rate={0} />
      </section>
      <section>
        <h4>{main.translate('Frameworks && Librairies')}</h4>
        <h5>Back</h5>
        <SkillRate label="Symfony" rate={3.5} />
        <SkillRate label="Twig" rate={4.5} />
        <SkillRate label="Magento" rate={1.5} />
        <SkillRate label="Express" rate={4.5} />
        <SkillRate label="Socket.IO" rate={4.5} />
        <SkillRate label="NextJS" rate={3} />
        <SkillRate label="Elastic search" rate={1} />
        <hr style={{ border: 'none' }} />
        <h5>Front</h5>
        <SkillRate label="Socket.IO" rate={4.5} />
        <SkillRate label="React" rate={4} />
        <SkillRate label="Open Props" rate={5} />
        <SkillRate label="Bootstrap" rate={4.5} />
        <SkillRate label="Font Awesome" rate={4.5} />
        <SkillRate label="Material Design" rate={2} />
      </section>
      <section>
        <h4>{main.translate('OS')}</h4>
        <SkillRate label="Debian (Linux)" rate={4} />
        <SkillRate label="Fedora (Linux)" rate={4} />
        <SkillRate label="Ubuntu (Linux)" rate={4} />
        <SkillRate label="Windows" rate={4} />
        <SkillRate label="Mac" rate={2} />
      </section>
      <section>
        <h4>{main.translate('IDE')}</h4>
        <ul style={{ padding: 0, listStyle: 'none' }}>
          <li><b>PHPStorm</b></li>
          <li><b>WebStorm</b></li>
          <li>VSCode</li>
          <li>Sublime text</li>
          <li><del>Atom</del></li>
          <li><small><i>Android studio</i></small></li>
          <li><small><i><del>Eclipse</del></i></small></li>
        </ul>
      </section>
    </section>
  </article>;
}

function SkillRate(props: { rate: number, label: string }) {
  const slug = props.label.toLowerCase().replace(/[^\w\d]/g, '-');

  return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {props.label}
    <div style={{ paddingLeft: '1rem' }}>
      {[...Array(Math.floor(props.rate))].map((x, idx) => {
        const key = `star-${slug}-${idx}`;
        return <FontAwesomeIcon key={key} icon={solid('star')} style={{ color: '#ffc107' }} />;
      })}
      {props.rate !== Math.floor(props.rate) && (
        <FontAwesomeIcon icon={duotone('star-half')} style={{ color: '#ffc107' }} />
      )}
      {[...Array(5 - Math.ceil(props.rate))].map((x, idx) => {
        const key = `empty-star-${slug}-${idx}`;
        return <FontAwesomeIcon key={key} icon={solid('star')} style={{ color: '#ffc107', opacity: 0.4 }} />;
      })}
    </div>
  </div>;
}
