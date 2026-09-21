import { MdHome } from "react-icons/md";

const Header = () => {
    return (
        <header>
            <div className="header-container">
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
        </header>
    );
};

export default Header;
