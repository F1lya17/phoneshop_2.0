import React, { ReactNode } from "react";
import classes from "./UI.module.css"

type ButtonPropsType = {
    children: string,
    onClick?: () => void,
    transparent?: boolean
}

const Button: React.FC<ButtonPropsType> = ({ children, transparent, ...props }) => {
    return (
        <button {...props} className={transparent ? [classes.button, classes.buttonTransparent].join(' ') : classes.button}>
            {children}
        </button>
    );
}

export default Button;