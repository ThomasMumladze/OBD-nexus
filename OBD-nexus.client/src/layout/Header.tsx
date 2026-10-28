import Button from "../components/Button";

import { MdHome } from "react-icons/md";
import { CgExport } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <button className="header-home-button" onClick={() => (window.location.href = "/")}>
                        <MdHome />
                    </button>

                    <div className="status-badge">
                        <span className="status-dot"></span>
                        <span>OBD2-LINK: SECURE</span>
                        <span>|</span>
                        <span className="status-text">ONLINE</span>
                    </div>
                </div>

                <div className="header-buttons">
                    <Button btnFunction={() => {}} content="import" className="btn-secondary" svgIcon={<CgExport />} />
                    <Button
                        btnFunction={() => {}}
                        content="clear codes"
                        className="btn-primary"
                        svgIcon={<AiOutlineDelete />}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
