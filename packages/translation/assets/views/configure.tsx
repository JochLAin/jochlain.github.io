import type { SyntheticEvent } from "react";
import type { FormSelectChoiceType } from "../components/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { light } from "@fortawesome/fontawesome-svg-core/import.macro";
import { LANGUAGES } from "../constants";
import useMain from "../contexts";
import { FormSelect } from "../components/form";

export default function ConfigureForm() {
  const main = useMain();
  const onChangeField = (choice: FormSelectChoiceType) => {
    main.setSetting('field', choice.value);
  };
  const onChangeLang = (choice: FormSelectChoiceType) => {
    main.setSetting('lang', choice.value);
  };
  const onChangeUseFlag = (evt: SyntheticEvent<HTMLInputElement>) => {
    main.setSetting('allowFlag', evt.currentTarget.checked);
    if (!evt.currentTarget.checked && main.settings.field === 'flag') {
      main.setSetting('field', 'tag');
    }
  };

  const fieldChoices = [
    { label: main.translate('Nom anglais'), value: 'english_name' },
    { label: main.translate('Tag'), value: 'tag' },
  ];
  if (main.settings.allowFlag) {
    fieldChoices.push({ label: main.translate('Drapeau'), value: 'flag' })
  }

  const langChoices = main.languages?.map((tag) => {
    const [name,,, flag] = LANGUAGES[tag] || [];
    const label = !name ? tag : `${name} (${tag})`;
    return { label, flag, tag, value: tag };
  }) || [];

  return <>
    <fieldset>
      <label htmlFor="configure_allowFlag">
        <input type="checkbox" id="configure_allowFlag" name="configure[allowFlag]" checked={main.settings.allowFlag || false} onChange={onChangeUseFlag} />
        {main.translate('Autoriser l\'utilisation des drapeaux ?')}
      </label>
    </fieldset>
    <fieldset>
      <FormSelect
        label={main.translate('Quel libellé utilisé pour les langues ?')}
        choices={fieldChoices}
        value={main.settings.field}
        onChange={onChangeField}
      />
    </fieldset>
    <fieldset>
      <FormSelect
        label={main.translate('Quelle langue voulez-vous utiliser en langue principale ?')}
        name="configure[lang]"
        id="configure_lang"
        choices={langChoices}
        value={main.settings.lang}
        onChange={onChangeLang}
        renderChoice={(choice) => {
          return <>
            {main.settings.allowFlag && choice.flag && (
              <img src={`/flags/${choice.flag}.svg`} className="flag" alt={choice.tag} />
            )}
            {choice.label}
          </>;
        }}
      />
    </fieldset>
  </>;
}

export function ConfigurePage() {
  const main = useMain();
  const onClickReady = (evt: SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    evt.stopPropagation();
    main.setReady();
  }

  return <main id="configure">
    <article>
      <h2>{main.translate('Configuration')}</h2>
      <ConfigureForm />
      <footer>
        <button type="submit" onClick={onClickReady}>
          <FontAwesomeIcon icon={light('check')} />
          Valider
        </button>
      </footer>
    </article>
  </main>;
}
