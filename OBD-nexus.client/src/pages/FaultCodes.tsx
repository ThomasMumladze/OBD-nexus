import fakeData from "../assets/data/fakeData.json";
import DropDawnMenu from "../components/DropDawnMenu";
import FaultCodeTable from "../components/FaultCodeTable";
import Input from "../components/Input";

interface Props {
    translations: any;
}

const FaultCodes = (props: Props) => {
    const { translations } = props;

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
                <h1>Fault Codes {translations?.code}</h1>
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

            <div className="filter-container">
                <div className="filter">
                    <Input />
                    <DropDawnMenu options={[]} dropDawnTitle="Category: All Systems" />
                    <DropDawnMenu options={[]} dropDawnTitle="Severity: All Levels" />
                    <DropDawnMenu options={[]} dropDawnTitle="Status: All State" />
                    <button>Reset Filters</button>
                </div>

                <div className="active-filters">
                    <p>active filters:</p>
                    {Array.from({ length: 3 }).map((_, index: number) => (
                        <span key={index}>Category: Chassis</span>
                    ))}
                </div>
            </div>
            <FaultCodeTable data={fakeData} />
        </div>
    );
};

export default FaultCodes;
