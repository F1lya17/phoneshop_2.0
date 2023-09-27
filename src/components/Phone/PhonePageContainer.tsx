import React from "react";
import PhonePage from "./PhonePage";
import { Phone } from "@/api/interfacesAoi";

async function getPhone(id: string) {
    const response = await fetch(`https://6502dd6aa0f2c1f3faeb0054.mockapi.io/api/phones/${id}`, { next: { revalidate: 3600 } });
    return await response.json();
}

type PhonePageContainerPropsType = {
    id: string
}

const PhonePageContainer: React.FC<PhonePageContainerPropsType> = async ({ id }) => {
    const phone: Phone = await getPhone(id);
    return <PhonePage phone={phone} />
}

export default PhonePageContainer;