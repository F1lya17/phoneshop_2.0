import { Phone } from "@/api/interfacesAoi";
import PhoneCard from "../PhoneCard";
import SortPhonesContainer from "../SortPhones/SortPhonesContainer";

type HomePropsType = {
    phones: Phone[]
}

const Home: React.FC<HomePropsType> = ({ phones }) => {
    return (
        <>
            <SortPhonesContainer />
            <div className="phone-container">
                {phones.map(phone => {
                    return (
                        <PhoneCard key={phone.id} phone={phone} />
                    );
                })}
            </div>
        </>
    );
}

export default Home;