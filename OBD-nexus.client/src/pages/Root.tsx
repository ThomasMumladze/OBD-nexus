import { Outlet } from "react-router";

interface Props {
    changeLanguage: (language: string) => void;
    language: string;
    translations: Record<string, any>;
    isSupportedLanguage: ("en" | "ka")[];
}

const Root = (props: Props) => {
    return <Outlet context={props} />;
};

export default Root;
