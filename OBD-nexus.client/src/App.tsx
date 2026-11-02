import "./App.scss";

import languageService from "./assets/data/translate/translateService";

import SideBar from "./components/SideBar";

import Header from "./layout/Header";

import Root from "./pages/Root";

function App() {
    const { ...languageContext } = languageService();

    return (
        <div className="app">
            <div className="app--content">
                <SideBar />
                <div>
                    <Header {...languageContext} />

                    <div className="app--content__inner">
                        <Root {...languageContext} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
