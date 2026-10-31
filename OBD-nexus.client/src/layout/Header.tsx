import Button from "../components/Button";

import { MdHome } from "react-icons/md";
import { CgExport } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";

import language_svg from "../assets/images/world.png";
import ka_flag from "../assets/images/flag.png";
import uk_flag from "../assets/images/united-kingdom.png";

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
