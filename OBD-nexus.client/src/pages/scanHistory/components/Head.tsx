import { GoClock } from "react-icons/go";

const Head = () => {
    return (
        <div className="scan-history-head">
            <div>
                <h1>
                    <GoClock /> scan history
                </h1>
                <p>Review previous diagnostic sessions and vehicle health reports.</p>
            </div>
            <div className="vehicle-info-banner">
                <div>
                    <span className="vehicle-detail-label">Connected Vehicle</span>
                    <p>2024 Ford Mustang GT</p>
                </div>
                <div className="vehicle-info-separator"></div>
                <div>
                    <span className="vehicle-detail-label">VIN Identifier</span>
                    <p>1FA6P8CF8R510****</p>
                </div>
            </div>
        </div>
    );
};

export default Head;
