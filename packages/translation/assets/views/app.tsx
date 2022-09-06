import type { SyntheticEvent } from "react";
import useMain from "@assets/hooks/useMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { light } from "@fortawesome/fontawesome-svg-core/import.macro";
import FormSelectLang from "../components/form/select_lang";
import { LANGUAGES } from "../constants";
import useApp from "../contexts";

export default function App() {
  const app = useApp();
  const main = useMain();

  const langChoices = app.languages?.map((tag) => {
    const [name,,, flag] = LANGUAGES[tag] || [];
    const label = !name ? tag : `${name} (${tag})`;
    return { label, flag, tag, value: tag };
  }) || [];

  const onClickReverse = (evt: SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const { from, to } = app.settings;
    if (from && to) {
      app.setSettings({ from: to, to: from });
    }
  };

  return <main id="translation">
    <header id="header" className={!app.settings.to ? 'full' : ''}>
      <FormSelectLang
        id="from"
        choices={[{ label: main.translate('Afficher les clés'), value: undefined }, ...langChoices].filter((choice) => choice.value !== app.settings.to)}
        value={app.settings.from}
        onChange={(choice) => app.setSetting('from', choice.value)}
      />
      <button onClick={onClickReverse} disabled={!app.settings.from}>
        <FontAwesomeIcon icon={light('refresh')} />
      </button>
      <FormSelectLang
        id="to"
        choices={langChoices.filter((choice) => choice.value !== app.settings.from)}
        value={app.settings.to}
        onChange={(choice) => app.setSetting('to', choice.value)}
      />
    </header>
    <article>

    </article>
  </main>;
}
