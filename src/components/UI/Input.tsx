import React from "react";
import classes from "./UI.module.css"

type InputPropsType = {
    placeholder?: string,
    type?: string,
    value: string | undefined,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Input: React.FC<InputPropsType> = function ({ placeholder, type, value, onChange }) {
    return (
        <input value={value} onChange={onChange} type={type ? type : ''} placeholder={placeholder ? placeholder : ''} className={classes.input} />
    );
};

export default Input;