import { Phone } from "../api/interfacesAoi";
import Image from "next/image";
import React from "react";
import Button from "./UI/Button";
import { basketReducer } from "@/store/reducers/basket";
import { useAppDispatch } from "@/hooks/reduxHooks";
import Link from "next/link";

type PhonePropsType = {
    phone: Phone
}


const PhoneCard: React.FC<PhonePropsType> = function ({ phone }) {
    const { addPhone } = basketReducer.actions;
    const dispatch = useAppDispatch();

    return (
        <div className="phone">
            <Link href={`/phone/${phone.id}`}><div className="phone__img-container">
                <div className="phone__con">
                    <Image fill className="phone__img" src={phone.image} alt={phone.name} />
                </div>
            </div></Link>
            <h2 className="phone__price">{phone.price}</h2>
            <Link href={`/phone/${phone.id}`}><h3 className="phone__name">{phone.name}</h3></Link>
            <Button onClick={() => dispatch(addPhone(phone))} transparent>В корзину</Button>
        </div>
    );
}

export default PhoneCard;