import { AdvancedStatBlock } from "components/AdvancedStatBlock";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ModalWindow } from "components/ModalWindow";
import { PromoBlock } from "components/PromoBlock";
import { StartPage } from "components/StartPage";
import { UrlBlock } from "components/UrlBlock";
import { useAppSelector } from "redux-hooks";

function App() {
  const modal = useAppSelector((state) => state.modal);

  return (
    <>
      <Header />
      <StartPage />
      {modal === "open" ? <ModalWindow /> : ""}
      <UrlBlock />
      <AdvancedStatBlock />
      <PromoBlock />
      <Footer />
    </>
  );
}

export default App;
