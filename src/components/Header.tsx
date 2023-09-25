"use client"

import Image from "next/image";
import Link from "next/link";
import basket from "../../public/basket.svg"
import Button from "./UI/Button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/reduxHooks";


const Header = () => {
    const router = useRouter();
    const { totalCount } = useAppSelector(state => state.basket);

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Link href="/" className="header__logo">F1lyaPhoneShop</Link>
                    <Link className="header__basket" href="/basket"><Image alt='корзина' src={basket} />
                        {totalCount > 0 && <div className="header__count">{totalCount}</div>}
                    </Link>
                    <Button onClick={() => router.push('/admin')} >Админ панель</Button>
                    <Button onClick={() => router.push('/login')}>Выйти</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;