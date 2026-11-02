import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../../../components/Button";

interface DrawerPanelProps {
    setDrawerPanelOpen: (open: boolean) => void;
}
const DrawerPanel = (props: DrawerPanelProps) => {
    return (
        <div className="modal-overlay">
            <div className="drawer-panel">
                <div className="drawer-header">
                    <div className="drawer-title">
                        <IoDocumentTextOutline />
                        Scan Session: SCN-8942-2026
                    </div>

                    <button className="icon-action-btn" onClick={() => props.setDrawerPanelOpen(false)}>
                        <AiOutlineClose />
                    </button>
                </div>

                <div className="drawer-body">
                    <div className="detail-section-grid">
                        <div>
                            <div className="detail-field-label">Vehicle Name</div>
                            <div className="detail-field-val">Ford Mustang GT (2024)</div>
                        </div>
                        <div>
                            <div className="detail-field-label">VIN Number</div>
                            <div className="detail-field-val vin">1FA6P8CF8R5109482</div>
                        </div>
                        <div>
                            <div className="detail-field-label">Scan Timestamp</div>
                            <div className="detail-field-val">2026-10-28 14:32:10</div>
                        </div>
                        <div>
                            <div className="detail-field-label">System Protocol</div>
                            <div className="detail-field-val">CAN ISO-15765-4</div>
                        </div>
                    </div>

                    <div className="health-status">
                        <div>
                            <span className="detail-field-label">Overall Health Status</span>
                            <div style={{ marginTop: "0.25rem" }}>
                                <span className="status-badge critical">Critical</span>
                            </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <span className="detail-field-label">Odometer</span>
                            <div className="detail-field-val">18,420 mi</div>
                        </div>
                    </div>

                    <div className="diagnostic-trouble-codes">
                        <h4>Detected Diagnostic Trouble Codes (DTC)</h4>
                        <table className="dtc-list-table">
                            <thead>
                                <tr>
                                    <th>DTC Code</th>
                                    <th>Description &amp; System</th>
                                    <th>Severity</th>
                                    <th>Status</th>
                                    <th>Recommended Repair</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="dtc-code">P0171</span>
                                    </td>
                                    <td>
                                        <div>System Too Lean (Bank 1)</div>
                                        <div className="detail-field-val">Fuel Metering</div>
                                    </td>
                                    <td>
                                        <span className="status-badge critical">critical</span>
                                    </td>
                                    <td>
                                        <span className="dtc-chip" style={{ textTransform: "uppercase" }}>
                                            active
                                        </span>
                                    </td>
                                    <td>Check MAF sensor cleanliness and inspect intake manifold for vacuum leaks.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="drawer-footer">
                        <button className="btn-secondary">download diagnostic PDF</button>
                        <button className="btn-primary" onClick={() => props.setDrawerPanelOpen(false)}>
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawerPanel;
