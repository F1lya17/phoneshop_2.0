import { Phone } from "@/api/interfacesAoi";

type HomePropsType = {
    phones: Phone[]
}

const Home: React.FC<HomePropsType> = ({ phones }) => {
    return (
        <>
            {phones.map(phone => {
                return (
                    <div>
                        {phone.name}
                    </div>
                );
            })}
        </>
    );
}

export default Home;