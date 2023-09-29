import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Input from "./UI/Input";
import DropDown from "./UI/DropDown";
import cross from "../../public/cross.svg"
import { newPhoneType } from "@/api/interfacesAoi";
import Button from "./UI/Button";

type AddPhonePropsType = {
    setOpenPhone: Dispatch<SetStateAction<boolean>>,
}

const AddPhone: React.FC<AddPhonePropsType> = function ({ setOpenPhone }) {
    const [phoneInfo, setPhoneInfo] = useState<newPhoneType>({ name: '', image: '', price: '', brand: '' });

    return (
        <div className="add-brand">
            <div className="add-brand__first-line">
                <div className="add-brand__title">Добавление телефона:</div>
                <Image onClick={() => setOpenPhone(false)} style={{ 'cursor': 'pointer' }} src={cross} alt="cross" />
            </div>
            <Input
                value={phoneInfo.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneInfo(prev => { return { ...prev, name: e.target.value } })}
                placeholder="Введите название телефона"
            />
            <Input
                value={phoneInfo.brand}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneInfo(prev => { return { ...prev, brand: e.target.value } })}
                placeholder="Введите название бренда"
            />
            <Input
                value={phoneInfo.image}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneInfo(prev => { return { ...prev, image: e.target.value } })}
                placeholder="Введите ссылку на картинку"
            />
            <Input
                type="number"
                value={phoneInfo.price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhoneInfo(prev => { return { ...prev, price: e.target.value } })}
                placeholder="Введите цену"
            />
            <Button>Добавить</Button>
        </div>
    )
}

export default AddPhone;