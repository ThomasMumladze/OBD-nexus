import { PiCaretDownBold } from "react-icons/pi";

interface Props {
    dropDawnTitle?: string;
    options: string[];
    handleValue?: any;
    handleValueChange?: any;
}

const DropDawnMenu = (props: Props) => {
    const { dropDawnTitle = "", options = [], handleValue, handleValueChange } = props;

    return (
        <div className="drop-down-menu">
            <select value={handleValue} onChange={(e) => handleValueChange(e.target.value)}>
                {dropDawnTitle?.length > 3 ? <option>{dropDawnTitle}</option> : null}
                {options.map((item, _) => (
                    <option value={item} key={_}>
                        {item}
                    </option>
                ))}
            </select>

            <span>
                <PiCaretDownBold />
            </span>
        </div>
    );
};

export default DropDawnMenu;
