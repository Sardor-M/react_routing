import React, {ReactNode} from 'react';

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

export default Button;