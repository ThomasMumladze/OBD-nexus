import { PiCaretDownBold } from "react-icons/pi";

interface Props {
    dropDawnTitle: string;
}

const DropDawnMenu = (props: Props) => {
    const { dropDawnTitle } = props;

    return (
        <div className="drop-down-menu">
            <select>
                <option value="category">{dropDawnTitle}</option>
                <option value="Powertrain">Powertrain (P)</option>
                <option value="Body">Body (B)</option>
                <option value="Chassis">Chassis (C)</option>
                <option value="Network">Network (U)</option>
            </select>

            <span>
                <PiCaretDownBold />
            </span>
        </div>
    );
};

export default DropDawnMenu;
