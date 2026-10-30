import "./App.scss";

import SideBar from "./components/SideBar";
import Header from "./layout/Header";
import FaultCodes from "./pages/FaultCodes";

function App() {
    return (
        <div className="app">
            <div className="app--content">
                <SideBar />
                <div>
                    <Header />
                    <div className="app--content__inner">
                        <FaultCodes />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
