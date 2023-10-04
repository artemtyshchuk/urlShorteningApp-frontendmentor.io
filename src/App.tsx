import { AdvancedStatBlock } from "components/AdvancedStatBlock";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ModalWindow } from "components/ModalWindow";
import { PromoBlock } from "components/PromoBlock";
import { StartPage } from "components/StartPage";
import { UrlBlock } from "components/UrlBlock";

function App() {
  return (
    <>
      <Header />
      <StartPage />
      {/* <ModalWindow /> */}
      <UrlBlock />
      <AdvancedStatBlock />
      <PromoBlock />
      <Footer />
    </>
  );
}

export default App;
