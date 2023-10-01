import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Input from "./UI/Input";
import cross from "../../public/cross.svg"
import { newPhoneType } from "@/api/interfacesAoi";
import Button from "./UI/Button";

type AddPhonePropsType = {
    setOpenPhone: Dispatch<SetStateAction<boolean>>,
}

type propertyType = {
    id: number,
    title: string,
    description: string
}

const AddPhone: React.FC<AddPhonePropsType> = function ({ setOpenPhone }) {
    const [phoneInfo, setPhoneInfo] = useState<newPhoneType>({ name: '', image: '', price: '', brand: '' });
    const [properties, setProperties] = useState<propertyType[]>([]);

    const addInfo = () => {
        setProperties([...properties, { title: '', description: '', id: Date.now() }])
    }

    const removeChem = (elem: propertyType) => {
        setProperties(properties.filter(i => i.id !== elem.id))
    }

    const changeInfo = (key: string, value: string, id: number) => {
        setProperties(properties.map(el => el.id === id ? { ...el, [key]: value } : el));
    }

    const handleClose = () => {
        setPhoneInfo({ name: '', image: '', price: '', brand: '' });
        setProperties([]);
        setOpenPhone(false);
    }

    const addBrand = () => {
        fetch('https://6502dd6aa0f2c1f3faeb0054.mockapi.io/api/phones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id: Date.now(),
                name: phoneInfo.name,
                rating: (Math.random() * 10).toFixed(2),
                price: phoneInfo.price,
                brand: phoneInfo.brand,
                image: phoneInfo.image,
                features: properties
            })
        });
        handleClose();
    }

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
            <Button onClick={addInfo}>
                Добавить новое свойство
            </Button>
            {
                properties.map(i =>
                    <div key={i.id} className="property">
                        <Input
                            placeholder="Свойство"
                            value={i.title}
                            onChange={(e) => changeInfo('title', e.target.value, i.id)}
                        />
                        <Input
                            placeholder="Описание"
                            value={i.description}
                            onChange={(e) => changeInfo('description', e.target.value, i.id)}
                        />
                        <Button onClick={() => removeChem(i)}>
                            Удалить
                        </Button>
                    </div>
                )
            }
            <Button onClick={addBrand}>Добавить</Button>
        </div>
    )
}

export default AddPhone;