import Button from "../components/Button";

import { MdHome } from "react-icons/md";
import { LuHardDriveUpload } from "react-icons/lu";
import { TfiReload } from "react-icons/tfi";

import DropDawnMenu from "../components/DropDawnMenu";

interface Props {
    changeLanguage: (keyCode: string) => void;
    isSupportedLanguage: any;
    language: string;
}

const Header = (props: Props) => {
    const { changeLanguage, isSupportedLanguage, language } = props;

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

                    <DropDawnMenu options={isSupportedLanguage} handleValue={language} handleValueChange={changeLanguage} />
                </div>

                <div className="header-buttons">
                    <Button
                        btnFunction={() => {}}
                        content="export csv"
                        className="btn-secondary"
                        svgIcon={<LuHardDriveUpload />}
                    />
                    <Button
                        btnFunction={() => {}}
                        content="reset error codes"
                        className="btn-primary"
                        svgIcon={<TfiReload />}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
