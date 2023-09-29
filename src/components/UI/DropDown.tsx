"use client";

import { Brand } from "@/api/interfacesAoi";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import classes from "./UI.module.css"

type PortalPropsType = {
    selector: string,
    options: Brand[],
    open: boolean,
    coord: { left: number, top: number },
    setSelected: Dispatch<SetStateAction<Brand>>,
    setOpen: Dispatch<SetStateAction<boolean>>
}

const DropDown: React.FC<PortalPropsType> = function ({ selector, options, open, coord, setSelected, setOpen }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, [selector])

    return mounted && open ? createPortal(
        <div style={{ ...coord }} className={classes.options}>
            {options.map(brand =>
                <h2
                    key={brand.id}
                    className={classes.option}
                    onClick={() => { setSelected(brand); setOpen(false) }}
                >
                    {brand.name}
                </h2>
            )}
        </div>,
        document.querySelector(selector)!) : null
}

export default DropDown;