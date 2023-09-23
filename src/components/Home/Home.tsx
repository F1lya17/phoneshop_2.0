import { Phone } from "@/api/interfacesAoi";
import SortPhonesContainer from "../SortPhones/SortPhonesContainer";
import Phones from "../Phones";

type HomePropsType = {
    phones: Phone[]
}

const Home: React.FC<HomePropsType> = ({ phones }) => {
    return (
        <>
            <SortPhonesContainer />
            <Phones phones={phones} />
        </>
    );
}

export default Home;