import { LuArrowDownUp } from "react-icons/lu";

interface FaultCode {
    data: any;
}

const FaultCodeTable = (props: FaultCode) => {
    const { data } = props;
    return (
        <div className="fault-code-table-container">
            <table className="fault-code-table">
                <thead>
                    <tr>
                        <th>
                            <div>
                                code <LuArrowDownUp />
                            </div>
                        </th>
                        <th>
                            <div>
                                Description <LuArrowDownUp />
                            </div>
                        </th>
                        <th>
                            <div>
                                System <LuArrowDownUp />
                            </div>
                        </th>
                        <th>
                            <div>
                                Severity <LuArrowDownUp />
                            </div>
                        </th>
                        <th>
                            <div>
                                Status <LuArrowDownUp />
                            </div>
                        </th>
                        <th>
                            <div>
                                Detected <LuArrowDownUp />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.slice(0, 10).map((item: any, index: number) => (
                            <tr key={index}>
                                <td className="fault-code">{item.code}</td>
                                <td className="fault-description">{item.description}</td>
                                <td className="fault-system">{item.system}</td>
                                <td className="fault-severity">
                                    <span className={`${item.severity.toLowerCase()}`}>{item.severity}</span>
                                </td>
                                <td className="fault-status">
                                    <span className={`${item.status.toLowerCase()}`}>{item.status}</span>
                                </td>
                                <td className="fault-detected">{item.detected}</td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <div className="fault-code-table-footer">
                <p>
                    Showing <span>1-10</span> of <span>{data.length}</span> results
                </p>

                <div className="pagination"></div>
            </div>
        </div>
    );
};

export default FaultCodeTable;
