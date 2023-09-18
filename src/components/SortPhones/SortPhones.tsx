"use client"

import { Brand } from "../../api/interfacesAoi";
import React, { useEffect, useRef, useState } from "react";
import DropDown from "../UI/DropDown";
import arrow from "../../../public/arrow.svg"
import Image from "next/image";

type SortPhonesPropsType = {
    brands: Brand[]
}

const SortPhones: React.FC<SortPhonesPropsType> = ({ brands }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const [coord, setCoord] = useState({ left: 0, top: 0 });


    useEffect(() => {
        let rect = ref.current?.getBoundingClientRect();
        setCoord({ left: rect!.x, top: rect!.top + rect!.height + window.scrollY })
    }, [])

    return (
        <div className="sortphones">
            <h2 className="sortphones__title">Бренд</h2>
            <div ref={ref} onClick={() => setOpen(!open)} className="brand">
                <h3 className="brand__placeholder">Выбрать бренд</h3>
                <Image src={arrow} alt={'arrow'} width={25} height={25} />
            </div>
            <DropDown
                open={open}
                options={brands}
                selector="#drop-down"
                coord={coord}
            />
        </div>
    );
}

export default SortPhones;