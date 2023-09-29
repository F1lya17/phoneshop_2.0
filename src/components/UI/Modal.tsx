"use client";

import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import classes from "./UI.module.css"

type ModalPropsType = {
    selector: string,
    open: boolean,
    children: ReactNode,
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<ModalPropsType> = function ({ selector, open, children, setOpen }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, [selector])

    const closeModal = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    return mounted && open ? createPortal(
        <div onClick={() => setOpen(false)} className={classes.modal_background}>
            <div onClick={closeModal} className={classes.modal_card}>
                {children}
            </div>
        </div>,
        document.querySelector(selector)!) : null
}

export default Modal;