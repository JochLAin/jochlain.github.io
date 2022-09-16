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
            <input name="name" type="text" placeholder="" disabled />
            <label htmlFor="name">{main.translate('Your name')}</label>
          </fieldset>
          <fieldset className="floating">
            <input name="email" type="email" placeholder="" disabled />
            <label htmlFor="email">{main.translate('Your email')}</label>
          </fieldset>
          <fieldset className="floating">
            <input name="subject" type="text" placeholder="" disabled />
            <label htmlFor="subject">{main.translate('Subject')}</label>
          </fieldset>
          <fieldset className="floating">
            <textarea name="message" rows={10} placeholder="" disabled />
            <label htmlFor="message">{main.translate('Your message')}</label>
          </fieldset>
          <footer>
            <button type="reset" disabled>
              <FontAwesomeIcon icon={duotone('undo')} />
              {main.translate('Reset')}
            </button>
            <button type="submit" disabled>
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
