import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, duotone, solid, light } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import useMain from "@assets/hooks/useMain";

export default function Skill() {
  const main = useMain();

  return <>
    <h3>{main.translate('Skills')}</h3>
    <article style={{ paddingInline: '5rem' }}>
      <section style={{ display: 'flex', flexFlow: 'row wrap', gap: '2rem' }}>
        <section>
          <h4>{main.translate('Languages')}</h4>
          <SkillRate label="HTML" rate={5} icon={brands('html5')} color="#d84924" />
          <SkillRate label="CSS" rate={3.5} icon={brands('css3')} color="#2449d8" />
          <SkillRate label="SCSS" rate={5} icon={brands('sass')} color="#c36192" />
          <SkillRate label="Javascript" rate={4.5} icon={brands('js')} color="#ead41c" />
          <SkillRate label="Typescript" rate={3} icon={brands('js')} color="#2f72bc" />
          <SkillRate label="JSX" rate={5} icon={brands('js')} color="#5ed0ec" />
          <SkillRate label="PHP" rate={4} icon={brands('php')} color="#828cb7" />
          <SkillRate label="Node" rate={3} icon={brands('node-js')} color="#7bc326" />
          <SkillRate label="Python" rate={1} icon={brands('python')} color="#366c9a" />
          <SkillRate label="Rust" rate={2} icon={brands('rust')} color="#000" />
          <SkillRate label="Java" rate={0} icon={brands('java')} color="#e01e23" />
          <SkillRate label="Golang" rate={0} icon={brands('golang')} color="#26d3d4" />
          <SkillRate label="Bash" rate={1.5} icon={solid('square-terminal')} color="#000" />
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
          <SkillRate label="Debian (Linux)" rate={5} icon={brands('linux')} color="#000" />
          <SkillRate label="Fedora (Linux)" rate={3} icon={brands('fedora')} color="#294172" />
          <SkillRate label="Ubuntu (Linux)" rate={3} icon={brands('ubuntu')} color="#d24413" />
          <SkillRate label="Windows" rate={4} icon={brands('windows')} color="#00a4e3" />
          <SkillRate label="Mac" rate={1} icon={brands('apple')} color="#a1a1a1" />
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
    </article>
  </>;
}

function SkillRate(props: { rate: number, label: string, color?: string, icon?: any }) {
  const slug = props.label.toLowerCase().replace(/[^\w\d]/g, '-');

  return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    {props.label}
    <div style={{ paddingLeft: '1rem' }}>
      {props.icon ? (
        <>
          {[...Array(Math.ceil(props.rate))].map((x, idx) => {
            const key = `${slug}-${idx}`;
            return <FontAwesomeIcon key={key} icon={props.icon} style={{ color: props.color || '#ffc107' }} fixedWidth />;
          })}
          {[...Array(5 - Math.ceil(props.rate))].map((x, idx) => {
            const key = `empty-${slug}-${idx}`;
            return <FontAwesomeIcon key={key} icon={props.icon} style={{ color: '#777', opacity: 0.4 }} fixedWidth />;
          })}
        </>
      ) : (
        <>
          {[...Array(Math.floor(props.rate))].map((x, idx) => {
            const key = `star-${slug}-${idx}`;
            return <FontAwesomeIcon key={key} icon={solid('star')} style={{ color: '#ffc107' }} fixedWidth />;
          })}
          {props.rate !== Math.floor(props.rate) && (
            <FontAwesomeIcon icon={duotone('star-half')} style={{ color: '#ffc107' }} fixedWidth />
          )}
          {[...Array(5 - Math.ceil(props.rate))].map((x, idx) => {
            const key = `empty-star-${slug}-${idx}`;
            return <FontAwesomeIcon key={key} icon={solid('star')} style={{ color: '#ffc107', opacity: 0.4 }} fixedWidth />;
          })}
        </>
      )}
    </div>
  </div>;
}
