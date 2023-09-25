import React from "react";
import arrow from "../../public/arrow.svg"
import { BasketPhone, Phone } from "@/api/interfacesAoi";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { basketReducer } from "@/store/reducers/basket";

type BasketPhonePropsType = {
    phone: BasketPhone
}

const BasketPhone: React.FC<BasketPhonePropsType> = function ({ phone }) {
    const dispatch = useAppDispatch();
    const { changeCount, removePhone } = basketReducer.actions;

    return (
        <div className="basket-item-row">
            <div className="basket-item item-image-container"><img src={phone.image} className="basket-item-img" alt="" /></div>
            <div className="basket-item-name basket-item">{phone.name}</div>
            <div className="basket-item count">
                <div className="basket-item-counter">{phone.count}</div>
                <div className="basket-item-arrows">
                    <div onClick={() => dispatch(changeCount({ phone, count: 1 }))} className="arrow-up"><Image src={arrow} alt='' /></div>
                    <div onClick={() => dispatch(changeCount({ phone, count: -1 }))} className="arrow-down"><Image src={arrow} alt='' /></div>
                </div>
            </div>
            <div className="basket-item-price basket-item">{phone.price}₽</div>
            <div onClick={() => dispatch(removePhone(phone))} className="basket-item-cancel basket-item"></div>
        </div>
    );
}

export default BasketPhone;