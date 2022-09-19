import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import { SyntheticEvent, useState } from "react";
import useMain from "@assets/hooks/useMain";

const SUBJECT_CHOICES = [
  // { label: 'Demande de devis', value: 'devis' },
  { label: 'Prise de contact', value: 'contact' },
];

export default function Contact() {
  const main = useMain();
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');

  const onChangeEmail = (evt: SyntheticEvent<HTMLInputElement>) => {
    setEmail(evt.currentTarget.value);
    evt.currentTarget.classList.remove('has-error');
  };
  const onChangeMessage = (evt: SyntheticEvent<HTMLTextAreaElement>) => {
    setMessage(evt.currentTarget.value);
    evt.currentTarget.classList.remove('has-error');
  };
  const onChangeName = (evt: SyntheticEvent<HTMLInputElement>) => {
    setName(evt.currentTarget.value);
    evt.currentTarget.classList.remove('has-error');
  };
  const onChangeSubject = (value: string, details: HTMLDetailsElement|null) => {
    setSubject(value);
    if (details) details.classList.remove('has-error');
  };

  const onSubmit = (evt: SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!email) document.querySelector('[name="email"]')?.classList.add('has-error');
    if (!message) document.querySelector('[name="message"]')?.classList.add('has-error');
    if (!name) document.querySelector('[name="name"]')?.classList.add('has-error');
    if (!subject) document.getElementById('subject')?.classList.add('has-error');

    if (evt.currentTarget.querySelector('.has-error')) return;
    console.log('sending email');
    setTimeout(() => {
      console.log('or not');
    }, 3500)
  };

  return <>
    <h3>{main.translate('Contact')}</h3>
    <section>
      <article>
        <section></section>
        <form onSubmit={onSubmit}>
          <fieldset className="floating">
            <input id="name" name="name" type="text" placeholder="" required value={name} onChange={onChangeName} />
            <label htmlFor="name">{main.translate('Your name')}</label>
          </fieldset>
          <fieldset className="floating">
            <input id="email" name="email" type="email" placeholder="" required value={email} onChange={onChangeEmail} />
            <label htmlFor="email">{main.translate('Your email')}</label>
          </fieldset>
          <fieldset className="floating">
            <FormSelect choices={SUBJECT_CHOICES} id="subject" value={subject} onChange={onChangeSubject} />
            <label htmlFor="subject">{main.translate('Subject')}</label>
          </fieldset>
          <fieldset className="floating">
            <textarea id="message" name="message" placeholder="" value={message} onChange={onChangeMessage} />
            <label htmlFor="message">{main.translate('Your message')}</label>
          </fieldset>
          <footer>
            <button type="reset">
              <FontAwesomeIcon icon={duotone('undo')} />
              {main.translate('Reset')}
            </button>
            <button type="submit">
              <FontAwesomeIcon icon={duotone('paper-plane')} />
              {main.translate('Send')}
            </button>
          </footer>
        </form>
      </article>
    </section>
  </>;
}

function FormSelect(props: { choices: ({ label: string, value: string })[], id: string, value: string, onChange: (value: string, details: HTMLDetailsElement|null) => any }) {
  const main = useMain();
  const { choices, onChange, ...attr } = props;
  const onClickChoice = (value: string) => (evt: SyntheticEvent<HTMLLIElement>) => {
    const details = evt.currentTarget.closest('details');
    if (details) details.open = false;
    props.onChange(value, details);
  };

  return <details {...attr} className={`form-select${props.value ? ' filled' : ''}`}>
    <summary>{props.choices.find((choice) => choice.value === props.value)?.label || ' '}</summary>
    <menu className="form-select-menu">
      {props.choices.map((choice, idx) => {
        return <li key={`form-select-${props.id}-choice-${idx}`} onClick={onClickChoice(choice.value)}>
          {main.translate(choice.label)}
        </li>;
      })}
    </menu>
  </details>;
}
