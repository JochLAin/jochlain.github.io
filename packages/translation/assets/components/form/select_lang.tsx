import type { FormSelectChoiceType } from "@assets/components/form";
import { FormSelect } from "@assets/components/form";
import useApp from "../../contexts";

type FormSelectLangChoiceType = FormSelectChoiceType & {
  tag?: string,
  flag?: string,
};

type FormSelectLangPropTypes = {
  label?: string,
  id?: string
  name?: string
  value?: string,
  choices: FormSelectLangChoiceType[],
  onChange: (choice: FormSelectChoiceType) => void,
};

export default function FormSelectLang(props: FormSelectLangPropTypes) {
  const app = useApp();

  return <FormSelect
    label={props.label}
    name={props.name}
    id={props.id}
    choices={props.choices}
    value={props.value}
    onChange={props.onChange}
    renderChoice={(choice) => {
      return <>
        {app.settings.allowFlag && choice.flag && (
          <img src={`/flags/${choice.flag}.svg`} className="flag" alt={choice.tag} />
        )}
        {choice.label}
      </>;
    }}
  />
}
