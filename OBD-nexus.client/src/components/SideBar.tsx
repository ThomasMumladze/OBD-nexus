import { PiCaretRightBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const SideBar = () => {
    let diagnostics = [
        { content: "quick scan", status: "new" },
        { content: "Full System Scan", status: "" },
        { content: "ECU Scanner", status: "updated" },
        { content: "Fault Codes", status: "" },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <div className="sidebar-menu">
                    <div className="diagnostics">
                        <h3>Diagnostics</h3>
                        <ul>
                            {diagnostics.map((item, _) => (
                                <li key={_}>
                                    <a href="">
                                        {item.content}

                                        {item.status.toLowerCase() == "new" ? (
                                            <span className={`${item.status}`}>new</span>
                                        ) : null}

                                        {item.status.toLowerCase() == "updated" ? (
                                            <span className={`${item.status}`}>updated</span>
                                        ) : null}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="live-Monitoring">
                        <h3>Live Monitoring</h3>
                        <ul>
                            <li>
                                <a className="active" href="">
                                    Live Data
                                    <PiCaretRightBold />
                                </a>
                            </li>
                            <li>
                                <a href="">Sensor Graphs</a>
                            </li>
                            <li>
                                <a href="">Data Logging</a>
                            </li>
                        </ul>
                    </div>

                    <div className="advanced-tools">
                        <h3>Advanced Tools</h3>
                        <ul>
                            <li>
                                <a href="#">Actuator Tests</a>
                            </li>

                            <li>
                                <a href="#">Bi-Directional Control</a>
                            </li>
                            <li>
                                <a href="#">ECU Information</a>
                            </li>
                            <li>
                                <a href="#">Freeze Frame</a>
                            </li>
                            <li>
                                <a href="#">Mode 06</a>
                            </li>
                            <li>
                                <a href="#">PID Explorer</a>
                            </li>
                            <li>
                                <a href="#">Custom PID Editor</a>
                            </li>
                            <li>
                                <a href="#">CAN Bus Monitor</a>
                            </li>
                            <li>
                                <a href="#">Network Diagnostics</a>
                            </li>
                        </ul>
                    </div>

                    <div className="vehicle-health">
                        <h3>Vehicle Health</h3>
                        <ul>
                            <li>
                                <a href="">Battery Test</a>
                            </li>
                            <li>
                                <a href="">Charging System</a>
                            </li>
                            <li>
                                <a href="">O2 Sensor Test</a>
                            </li>
                            <li>
                                <a href="">EVAP Test</a>
                            </li>
                        </ul>
                    </div>
                    <div className="reports">
                        <h3>Reports</h3>
                        <ul>
                            <li>
                                <a href="">Diagnostic Reports</a>
                            </li>
                            <li>
                                <a href="">Scan History</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="firmware-footer">
                <div className="firmware-card">
                    <p className="firmware-title">OBD-nexus Firmware</p>

                    <p className="firmware-status">
                        <span className="status-dot" />
                        v1.0.0-beta (Up to date)
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
