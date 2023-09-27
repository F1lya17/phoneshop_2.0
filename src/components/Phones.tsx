"use client"

import { Phone } from "@/api/interfacesAoi";
import React, { useEffect } from "react";
import PhoneCard from "./PhoneCard";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import useFilter from "@/hooks/useFilter";
import { phonesReducer } from "@/store/reducers/phones";

type PhonesPropsType = {
    phones: Phone[]
}

const Phones: React.FC<PhonesPropsType> = function ({ phones }) {
    const { to, from, brand } = useAppSelector(state => state.filter);
    const filteredPhones = useFilter(phones, brand, to, from);
    const { setPhones } = phonesReducer.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPhones(phones));
    }, [])

    return (
        <div className="phone-container">
            {filteredPhones.length > 0 ?
                filteredPhones.map(phone => {
                    return (
                        <PhoneCard key={phone.id} phone={phone} />
                    );
                })
                :
                <h2>Подходящих телеофнов нет</h2>
            }
        </div>
    );
}

export default Phones;