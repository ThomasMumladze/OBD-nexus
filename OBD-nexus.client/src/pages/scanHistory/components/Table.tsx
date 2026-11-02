import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

interface ScanHistory {
    id: string;
    vehicle: string;
    vin: string;
    date: string;
    duration: string;
    dtcCodes: string[];
    status: "critical" | "warning" | "healthy";
}

const scanHistory: ScanHistory[] = [
    {
        id: "SCN-8942-2026",
        vehicle: "Ford Mustang GT",
        vin: "1FA6P8CF8R5109482",
        date: "2026-10-28 14:32:10",
        duration: "00:04:12",
        dtcCodes: ["P0301", "P0171", "P0420"],
        status: "critical",
    },
    {
        id: "SCN-8874-2026",
        vehicle: "Porsche 911 Carrera S",
        vin: "WP0AA2A96SS204911",
        date: "2026-10-20 18:04:11",
        duration: "00:01:45",
        dtcCodes: [],
        status: "healthy",
    },
    {
        id: "SCN-8812-2026",
        vehicle: "Ford Mustang GT",
        vin: "1FA6P8CF8R5109482",
        date: "2026-10-15 11:22:00",
        duration: "00:05:30",
        dtcCodes: ["P0455", "P0401"],
        status: "warning",
    },
    {
        id: "SCN-8790-2026",
        vehicle: "Audi RS6 Avant",
        vin: "WAUZZZF28RN094112",
        date: "2026-10-11 16:48:33",
        duration: "00:03:15",
        dtcCodes: ["P0113", "P0500"],
        status: "warning",
    },
    {
        id: "SCN-8701-2026",
        vehicle: "Chevrolet Corvette Z06",
        vin: "1G1YB2D65P5601928",
        date: "2026-10-02 08:30:19",
        duration: "00:02:10",
        dtcCodes: [],
        status: "healthy",
    },
    {
        id: "SCN-8654-2026",
        vehicle: "Ford Mustang GT",
        vin: "1FA6P8CF8R5109482",
        date: "2026-09-25 19:12:05",
        duration: "00:04:55",
        dtcCodes: ["P0301"],
        status: "critical",
    },
    {
        id: "SCN-8520-2026",
        vehicle: "Toyota Supra GR 3.0",
        vin: "JTZAAECZ2NW039811",
        date: "2026-09-18 10:40:55",
        duration: "00:02:00",
        dtcCodes: [],
        status: "healthy",
    },
];

const Table = () => {
    return (
        <div className="scan-history-table">
            <div>
                <table className="scan--table">
                    <thead>
                        <tr>
                            <th>SCAN ID</th>
                            <th>VEHICLE &amp; VIN</th>
                            <th>SCAN DATE &amp; TIME</th>
                            <th>DURATION</th>
                            <th>DTC CODES</th>
                            <th>HEALTH STATUS</th>
                            <th style={{ textAlign: "right" }}>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scanHistory.map((scan) => (
                            <tr key={scan.id}>
                                <td>{scan.id}</td>
                                <td>
                                    <div>{scan.vehicle}</div>
                                    <div className="vehicle-cell-sub">{scan.vin}</div>
                                </td>
                                <td style={{ color: "#8b9bb4" }}>{scan.date}</td>
                                <td style={{ color: "#8b9bb4" }}>{scan.duration}</td>
                                <td style={{ color: "#8b9bb4" }}>
                                    <div className="dtc-badge-group">
                                        {scan.dtcCodes.length > 0
                                            ? scan.dtcCodes.map((code) => (
                                                  <span className="dtc-chip" key={code}>
                                                      {code}
                                                  </span>
                                              ))
                                            : "None"}
                                    </div>
                                </td>
                                <td>
                                    <span className={`status-badge ${scan.status}`}>{scan.status}</span>
                                </td>
                                <td>
                                    <div className="action-btn-group">
                                        <button className="icon-action-btn">
                                            <IoEyeOutline />
                                        </button>
                                        <button className="icon-action-btn">
                                            <MdOutlineFileDownload />
                                        </button>
                                        <button className="icon-action-btn delete-btn">
                                            <RiDeleteBin6Line />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="table-footer">awda</div>
        </div>
    );
};

export default Table;
