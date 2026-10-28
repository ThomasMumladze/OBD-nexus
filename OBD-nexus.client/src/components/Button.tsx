interface Props {
    content: string;
    btnFunction: () => void;
    className?: string;
    svgIcon?: React.ReactNode;
}

const Button = (props: Props) => {
    const { content, btnFunction, className, svgIcon } = props;

    return (
        <button className={`btn   ${className}`} onClick={btnFunction}>
            {svgIcon && <span className="svg-icon">{svgIcon}</span>}
            {content}
        </button>
    );
};

export default Button;
