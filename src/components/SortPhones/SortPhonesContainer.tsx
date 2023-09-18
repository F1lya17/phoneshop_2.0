import React from "react";
import SortPhones from "./SortPhones";

async function getBrands() {
    const response = await fetch("https://643fbf08b9e6d064befd5c54.mockapi.io/api/devices/brands");
    return await response.json();
}

const SortPhonesContainer = async function () {
    const brands = await getBrands();
    return (
        <SortPhones brands={brands} />
    );
}

export default SortPhonesContainer;