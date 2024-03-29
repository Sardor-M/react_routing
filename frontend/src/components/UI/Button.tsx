import React, {ReactNode} from 'react';
import PropTypes from "prop-types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    textOnly?: boolean,
    className?: string,
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({children, textOnly, className, onClick, ...props}) => {

    let cssClasses = textOnly ? "text-button" : "button";
    cssClasses += "" + (className || "");

    return (
        <button className={cssClasses} {...props}>
            {children}
        </button>
    )
}

Button.propTypes= {
    textOnly: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;