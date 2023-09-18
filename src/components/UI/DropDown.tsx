"use client"

import { Brand } from "@/api/interfacesAoi";
import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import classes from "./UI.module.css"

type PortalPropsType = {
    selector: string,
    open: boolean,
    options: Brand[],
    coord?: { left: number, top: number }
}

const Portal: React.FC<PortalPropsType> = function ({ selector, open, coord, options }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, [selector])

    return mounted && open ? createPortal(
        <div style={{ ...coord }} className={classes.options}>
            {options.map(brand =>
                <h2 key={brand.id} className={classes.option}>{brand.name}</h2>
            )}
        </div>,
        document.querySelector(selector)!) : null
}

export default Portal;