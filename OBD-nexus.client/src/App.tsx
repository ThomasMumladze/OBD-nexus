import "./App.scss";

import SideBar from "./components/SideBar";
import Header from "./layout/Header";
import FaultCodes from "./pages/FaultCodes";

import languageService from "./assets/data/translate/translateService";

function App() {
    const { changeLanguage, language, translations, isSupportedLanguage } = languageService();

    return (
        <div className="app">
            <div className="app--content">
                <SideBar />
                <div>
                    <Header changeLanguage={changeLanguage} isSupportedLanguage={isSupportedLanguage} language={language} />
                    <div className="app--content__inner">
                        <FaultCodes translations={translations} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
