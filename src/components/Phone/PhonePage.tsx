"use client";

import Image from "next/image";
import React from "react";
import Button from "../UI/Button";
import { Phone } from "@/api/interfacesAoi";
import { basketReducer } from "@/store/reducers/basket";
import { useAppDispatch } from "@/hooks/reduxHooks";

type PhonePagePropsType = {
    phone: Phone
}

const PhonePage: React.FC<PhonePagePropsType> = function ({ phone }) {
    const { addPhone } = basketReducer.actions;
    const dispatch = useAppDispatch();

    return <div className="phone-page">
        <div className="phone-page__name">{phone!.name}</div>
        <div className="phone-page__info">
            <div className="phone-page__img">
                <Image width={200} height={500} alt="phone" src={phone!.image} />
                <Button onClick={() => dispatch(addPhone(phone))}>Добавить в корзину</Button>
            </div>
            <div className="phone-page__description">
                <h2 className="phone-page__title">Характеристики:</h2>
                {phone!.features.map((info, index) =>
                    <div key={info.title} className="phone-page__description-item" style={{ background: index % 2 ? 'transparent' : 'lightgray' }}>
                        {info.title}: {info.description}
                    </div>
                )}
            </div>
        </div>
    </div>
}

export default PhonePage;