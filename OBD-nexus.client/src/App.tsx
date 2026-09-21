import "./App.scss";
import Header from "./layout/Header";
import FaultCodes from "./pages/FaultCodes";

function App() {
    return (
        <div className="app">
            <div className="app--content">
                <Header />
                <div className="app--content__inner">
                    <FaultCodes />
                </div>
            </div>
        </div>
    );
}

export default App;
