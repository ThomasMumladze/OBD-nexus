import Head from "./components/Head";
import SummaryCard from "./components/SummaryCard";
import Table from "./components/Table";
import Toolbar from "./components/Toolbar";

const scanStats = [
    {
        title: "Total Scans",
        value: 7,
    },
    {
        title: "Critical Issues Found",
        value: 2,
    },
    {
        title: "Warnings",
        value: 2,
    },
    {
        title: "Last Scan Date",
        value: "2026-10-28",
    },
];

const ScanHistory = () => {
    return (
        <div className="scan-history">
            <Head />

            <section className="summary-cards">
                <div className="summary-cards--grid">
                    {scanStats.map((stat, index) => (
                        <SummaryCard key={index} title={stat.title} value={stat.value} />
                    ))}
                </div>
            </section>

            <section className="tool-bar">
                <Toolbar />
            </section>

            <section className="scan-history-table">
                <Table />
            </section>
        </div>
    );
};

export default ScanHistory;
