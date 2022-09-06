import useApp, { AppProvider } from "./assets/contexts";
import { ImportPage } from "./assets/views/import";
import App from "./assets/views/app";

export default function IndexWrapper() {
  return <AppProvider>
    <Index />
  </AppProvider>;
}

function Index() {
  const app = useApp();

  if (!app.translations) {
    return <ImportPage />;
  }
  return <App />;
}
