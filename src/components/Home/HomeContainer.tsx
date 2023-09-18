import Home from "./Home";

async function getPhones() {
    const response = await fetch("https://6502dd6aa0f2c1f3faeb0054.mockapi.io/api/phones", { next: { revalidate: 3600 } });
    return await response.json();
}

const HomeContainer = async () => {
    const phones = await getPhones();
    return <Home phones={phones} />
}

export default HomeContainer;