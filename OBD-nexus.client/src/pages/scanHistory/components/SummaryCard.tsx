import { BsInfoSquareFill } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";

const SummaryCard = ({ title, value }: any) => {
    return (
        <div className="summary-card">
            <div className="summary-card--left">
                <span>{title}</span>
                <p>{value}</p>
            </div>
            <div className={`summary-card--icon ${title} `}>
                {title === "Total Scans" && <BsInfoSquareFill />}
                {title === "Critical Issues Found" && <LuShieldCheck />}
                {title === "Last Scan Date" && <IoCalendarOutline />}
                {title === "Warnings" && <IoWarningOutline />}
            </div>
        </div>
    );
};

export default SummaryCard;
