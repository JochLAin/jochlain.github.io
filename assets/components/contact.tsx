import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { duotone } from "@fortawesome/fontawesome-svg-core/import.macro";
import useMain from "@assets/hooks/useMain";

export default function Contact() {
  const main = useMain();

  return <>
    <h3>{main.translate('Contact')}</h3>
    <section>
      <article>
        <form action="#!" method="POST">
          <fieldset className="floating">
            <input id="name" name="name" type="text" placeholder="" />
            <label htmlFor="name">{main.translate('Your name')}</label>
          </fieldset>
          <fieldset className="floating">
            <input id="email" name="email" type="email" placeholder="" />
            <label htmlFor="email">{main.translate('Your email')}</label>
          </fieldset>
          <fieldset className="floating">
            <select name="subject" id="subject">
              <option value=""></option>
              <option value="devis" disabled>{main.translate('Demander un devis')}</option>
            </select>
            <label htmlFor="subject">{main.translate('Subject')}</label>
          </fieldset>
          <fieldset className="floating">
            <textarea id="message" name="message" rows={10} placeholder="" />
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
        <section></section>
      </article>
    </section>
  </>;
}
