import React, { MouseEventHandler, ReactNode } from "react";
import classes from "./UI.module.css"

type ButtonPropsType = {
    children: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    transparent?: boolean
}

const Button: React.FC<ButtonPropsType> = ({ children, transparent, onClick }) => {
    return (
        <button onClick={onClick ? onClick : () => { }} className={transparent ? [classes.button, classes.buttonTransparent].join(' ') : classes.button}>
            {children}
        </button>
    );
}

export default Button;