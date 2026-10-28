import { IoMdSearch } from "react-icons/io";

const Input = () => {
    return (
        <div className="input-container">
            <IoMdSearch className="search-icon" />
            <input placeholder="Search By code or description.." type="text" id="input" name="input" />
        </div>
    );
};

export default Input;
