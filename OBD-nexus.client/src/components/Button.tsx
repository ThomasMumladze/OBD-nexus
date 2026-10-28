interface Props {
    content: string;
    btnFunction: () => void;
    className?: string;
    svgIcon?: React.ReactNode;
    disabled?: boolean;
}

const Button = (props: Props) => {
    const { content, btnFunction, className, svgIcon, disabled } = props;

    return (
        <button className={`btn   ${className}`} onClick={btnFunction} disabled={disabled}>
            {svgIcon && <span className="svg-icon">{svgIcon}</span>}
            {content}
        </button>
    );
};

export default Button;
