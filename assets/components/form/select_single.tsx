import type { SyntheticEvent } from "react";
import { createRef } from "react";

export type FormSelectChoiceType = {
  label?: string,
  value?: string,
  [key: string]: any,
};

type FormSelectPropsType = {
  children?: any,
  choices: FormSelectChoiceType[],
  id?: string,
  label?: string,
  name?: string,
  value?: string,
  onChange?: (choice: FormSelectChoiceType) => void,
  renderChoice?: (choice: FormSelectChoiceType) => any,
};

export default function FormSelect(props: FormSelectPropsType) {
  const ref_details = createRef<HTMLDetailsElement>();
  const value: FormSelectChoiceType|undefined = props.choices.find((choice) => choice.value === props.value);

  const onClickChoice = (choice: FormSelectChoiceType) => (evt: SyntheticEvent<HTMLLIElement>) => {
    evt.preventDefault();
    props.onChange?.(choice);
    if (ref_details.current) ref_details.current.open = false;
  };

  return <>
    <details ref={ref_details} className="form-select">
      <summary>
        {props.label || props.children}
        <div className="form-select-value">
          {value && (props.renderChoice ? props.renderChoice(value) : value.label)}
        </div>
      </summary>
      <menu className="form-select-menu">
        {props.choices.map((choice, idx) => {
          return <li key={`${props.id}-choice-${idx}`} className="form-select-choice" onClick={onClickChoice(choice)}>
            {props.renderChoice ? props.renderChoice(choice) : choice.label}
          </li>;
        })}
      </menu>
    </details>
    <select name={props.name}>
      {props.choices.map((choice, idx) => {
        return <option key={`${props.id}_${idx}`} value={choice.value} />;
      })}
    </select>
  </>;
}
