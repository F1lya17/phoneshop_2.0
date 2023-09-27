import PhonePageContainer from "@/components/Phone/PhonePageContainer";
import React, { useEffect, useState } from "react";

interface PhonePageProps {
    params: { id: string }
}

const PhonePage: React.FC<PhonePageProps> = function ({ params }) {
    return <PhonePageContainer id={params.id} />
}

export default PhonePage;