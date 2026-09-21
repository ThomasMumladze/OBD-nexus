import fakeData from "../assets/data/fakeData.json";
import FaultCodeTable from "../components/FaultCodeTable";

const FaultCodes = () => {
    const criticalActiveCount = fakeData.filter((item) => item.severity === "critical" && item.status === "active").length;
    const warningActiveCount = fakeData.filter((item) => item.severity === "warning").length;
    const infoActiveCount = fakeData.filter((item) => item.severity === "Info").length;
    const lowActiveCount = fakeData.filter((item) => item.severity === "low").length;

    const activeStatus = fakeData.filter((item) => item.status === "active").length;
    const pendingStatus = fakeData.filter((item) => item.status === "pending").length;
    const storedStatus = fakeData.filter((item) => item.status === "stored").length;
    const resolvedStatus = fakeData.filter((item) => item.status === "resolved").length;

    return (
        <div className="fault-codes">
            <div className="fault-codes-header">
                <h1>Fault Codes</h1>
            </div>

            <div className="fault-codes-summary-container">
                <div className="fault-codes-summary">
                    <h2>Severity</h2>
                    <span className="critical">{criticalActiveCount} critical </span>
                    <span className="warning">{warningActiveCount} warning </span>
                    <span className="info">{infoActiveCount} info </span>
                    <span className="low">{lowActiveCount} low </span>
                </div>

                <div className="fault-codes-summary">
                    <h2>Status</h2>
                    <span className="active">{activeStatus} active </span>
                    <span className="pending">{pendingStatus} pending </span>
                    <span className="stored">{storedStatus} stored </span>
                    <span className="resolved">{resolvedStatus} resolved </span>
                </div>
            </div>
            <FaultCodeTable data={fakeData} />
        </div>
    );
};

export default FaultCodes;
