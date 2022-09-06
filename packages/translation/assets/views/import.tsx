import type { CatalogType, TranslationType } from "../contexts";
import type { SyntheticEvent } from "react";
import { FormFile } from "@assets/components/form";
import useMain from "@assets/hooks/useMain";
import * as yaml from "js-yaml";
import { useRef } from "react";
import useApp from "../contexts";

const getFileContent = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      resolve(reader.result?.toString() || '');
    });
    reader.readAsText(file);
  });
};

const getNameParts = (filename: string) => {
  const parts = filename.split('.');
  const domain = parts.slice(0, -2).join('.');
  const lang = parts[parts.length - 2] || '';
  return [domain, lang];
};

export default function ImportForm() {
  const app = useApp();
  const main = useMain();
  const translations = useRef<TranslationType>({});

  const addCatalog = (domain: string, lang: string, catalog: CatalogType) => {
    if (!translations.current[lang]) translations.current[lang] = {};
    if (!translations.current[lang][domain]) translations.current[lang][domain] = {};
    translations.current[lang][domain] = catalog;
  };

  const handleJson = (file: File) => {
    return getFileContent(file).then((content) => {
      const [domain, lang] = getNameParts(file.name);
      addCatalog(domain, lang, JSON.parse(content) as CatalogType);
    });
  };

  const handleYaml = (file: File) => {
    return getFileContent(file).then((content) => {
      const [domain, lang] = getNameParts(file.name);
      addCatalog(domain, lang, yaml.load(content) as CatalogType);
    });
  };

  const onChangeFile = (files: FileList|null) => {
    if (files) {
      const promises = [];
      for (let idx = 0; idx < files.length; idx++) {
        switch (files[idx].type) {
          case 'application/json':
            promises.push(handleJson(files[idx]));
            break;
          case 'application/x-yaml':
            promises.push(handleYaml(files[idx]));
            break;
          default:
            console.error(`Unknown format ${files[idx].type}`);
            break;
        }
      }
      Promise.all(promises).then(() => {
        app.setTranslations(translations.current);
      });
    }
  };

  const onChangeUseFlag = (evt: SyntheticEvent<HTMLInputElement>) => {
    app.setSetting('allowFlag', evt.currentTarget.checked);
  };

  return <>
    <fieldset>
      <label htmlFor="configure_allowFlag">
        <input type="checkbox" id="configure_allowFlag" name="configure[allowFlag]" checked={app.settings.allowFlag || false} onChange={onChangeUseFlag} />
        {main.translate('Autoriser l\'utilisation des drapeaux ?')}
      </label>
    </fieldset>
    <FormFile
      label="Choisissez un ou plusieurs fichiers à charger"
      name="files"
      multiple={true}
      onChange={onChangeFile}
    />
  </>;
}

export function ImportPage() {
  return <main id="import" className="container">
    <ImportForm />
  </main>;
}
