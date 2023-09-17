import React, { ReactNode } from "react";
import classes from "./UI.module.css"

type ButtonPropsType = {
    children: string,
    onClick?: any
}

const Button: React.FC<ButtonPropsType> = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
}

export default Button;