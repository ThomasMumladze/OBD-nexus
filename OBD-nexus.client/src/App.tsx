import "./App.scss";
import Header from "./layout/Header";

function App() {
    return (
        <div className="app">
            <div className="app--content">
                <Header />
                <div className="app--content__inner"></div>
            </div>
        </div>
    );
}

export default App;
