import { Phone } from "../api/interfacesAoi";
import Image from "next/image";
import React from "react";
import Button from "./UI/Button";

type PhonePropsType = {
    phone: Phone
}


const PhoneCard: React.FC<PhonePropsType> = function ({ phone }) {
    return (
        <div className="phone">
            <div className="phone__img-container">
                <div className="phone__con">
                    <Image fill className="phone__img" src={phone.image} alt={phone.name} />
                </div>
            </div>
            <h2 className="phone__price">{phone.price}</h2>
            <h3 className="phone__name">{phone.name}</h3>
            <Button transparent>В корзину</Button>
        </div>
    );
}

export default PhoneCard;