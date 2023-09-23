"use client"

import { Phone } from "@/api/interfacesAoi";
import React from "react";
import PhoneCard from "./PhoneCard";
import { useAppSelector } from "@/hooks/reduxHooks";
import useFilter from "@/hooks/useFilter";

type PhonesPropsType = {
    phones: Phone[]
}

const Phones: React.FC<PhonesPropsType> = function ({ phones }) {
    const { from } = useAppSelector(state => state.filter);
    const { to } = useAppSelector(state => state.filter);
    const { brand } = useAppSelector(state => state.filter);

    const filteredPhones = useFilter(phones, brand, to, from);

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