"use client";

import { Brand } from "../../api/interfacesAoi";
import React, { useState, useRef, useEffect } from "react";
import DropDown from "../UI/DropDown";
import arrow from "../../../public/arrow.svg"
import Image from "next/image";
import Input from "../UI/Input";
import { useAppDispatch } from "@/hooks/reduxHooks";
import useDebounce from "@/hooks/useDebounce";
import { filterReducer } from "@/store/reducers/filter";

type SortPhonesPropsType = {
    brands: Brand[]
}

const SortPhones: React.FC<SortPhonesPropsType> = ({ brands }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const [coord, setCoord] = useState({ left: 0, top: 0 });
    const [selected, setSelected] = useState<Brand>({ id: '-1', name: 'Не выбрано' });

    const { setTo } = filterReducer.actions;
    const { setFrom } = filterReducer.actions;
    const { setBrand } = filterReducer.actions;
    const dispatch = useAppDispatch();

    const [fromValue, setFromValue] = useState('');
    const [toValue, setToValue] = useState('');

    const debouncedChangeFrom = useDebounce((s) => dispatch(setFrom(s)), 750);
    const debouncedChangeTo = useDebounce((s) => dispatch(setTo(s)), 750);

    const onChangeFromValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFromValue(e.target?.value);
        debouncedChangeFrom(e.target?.value);
    }

    const onChangeToValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToValue(e.target?.value);
        debouncedChangeTo(e.target?.value);
    }

    useEffect(() => {
        let rect = ref.current?.getBoundingClientRect();
        setCoord({ left: rect!.x, top: rect!.top + rect!.height + window.scrollY })
    }, [])

    useEffect(() => {
        dispatch(setBrand(selected));
    }, [selected])

    return (
        <div className="sortphones">
            <h2 className="sortphones__title">Бренд</h2>
            <div ref={ref} onClick={() => setOpen(!open)} className="brand">
                <h3 className="brand__placeholder">{selected.id !== '-1' ? selected.name : "Выберите бренд"}</h3>
                <Image className={open ? "rotated-img" : "normal-img"} src={arrow} alt={'arrow'} width={25} height={25} />
            </div>
            <DropDown
                options={[{ id: '-1', name: 'Не выбран' }, ...brands]}
                selector="#drop-down"
                open={open}
                coord={coord}
                setSelected={setSelected}
                setOpen={setOpen}
            />
            <h2 className="sortphones__title">Цена</h2>
            <div className="sortphones__price">
                <h3 className="price">От</h3>
                <Input value={fromValue} onChange={onChangeFromValue} type='number' />
                <h3 className="price">До</h3>
                <Input value={toValue} onChange={onChangeToValue} type='number' />
            </div>
        </div>
    );
}

export default SortPhones;