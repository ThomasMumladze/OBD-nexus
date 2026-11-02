import DropDawnMenu from "../../../components/DropDawnMenu";
import Input from "../../../components/Input";

const Toolbar = () => {
    return (
        <div className="scan-history-toolbar">
            <div className="toolbar-controls">
                <Input />

                <DropDawnMenu dropDawnTitle="status: all statuses" options={[]} />
                <DropDawnMenu dropDawnTitle="sort by: newest first" options={[]} />
            </div>
        </div>
    );
};

export default Toolbar;
