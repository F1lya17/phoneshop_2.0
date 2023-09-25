import React, { useEffect, useState } from "react";

interface PhonePageProps {
    params: { id: string }
}

const PhonePage: React.FC<PhonePageProps> = function ({ params }) {
    return <div className="phone-page">
        {params.id}
    </div>
}

export default PhonePage;