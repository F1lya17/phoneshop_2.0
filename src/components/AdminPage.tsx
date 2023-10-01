"use client";

import React, { useState } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import cross from "../../public/cross.svg"
import Image from "next/image";
import Input from "./UI/Input";
import { newPhoneType } from "@/api/interfacesAoi";
import AddPhone from "./AddPhone";

const AdminPage = function () {
    const [openBrand, setOpenBrand] = useState(false);
    const [brandName, setBrandName] = useState('');
    const [openPhone, setOpenPhone] = useState(false);

    const handleClose = () => {
        setBrandName('');
        setOpenBrand(false);
    }

    const addBrand = () => {
        fetch('https://643fbf08b9e6d064befd5c54.mockapi.io/api/devices/brands', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ id: Date.now(), name: brandName })
        });
        handleClose();
    }

    return <div className="admin">
        <Button onClick={() => setOpenBrand(true)}>Добавить бренд</Button>
        <Button onClick={() => setOpenPhone(true)}>Добавить телефон</Button>
        <Modal selector="#modal" open={openBrand} setOpen={setOpenBrand}>
            <div className="add-brand">
                <div className="add-brand__first-line">
                    <div className="add-brand__title">Добавление бренда:</div>
                    <Image onClick={() => setOpenBrand(false)} style={{ 'cursor': 'pointer' }} src={cross} alt="cross" />
                </div>
                <Input
                    value={brandName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandName(e.target.value)}
                    placeholder="Введите название бренда"
                />
                <Button onClick={addBrand}>Добавить</Button>
            </div>
        </Modal>
        <Modal selector="#modal" open={openPhone} setOpen={setOpenPhone}>
            <AddPhone setOpenPhone={setOpenPhone} />
        </Modal>
    </div>
}

export default AdminPage;