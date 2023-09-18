"use client"

import Image from "next/image";
import Link from "next/link";
import basket from "../../public/basket.svg"
import Button from "./UI/Button";
import { useRouter } from "next/navigation";


const Header = () => {
    const router = useRouter();
    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Link href="/" className="header__logo">F1lyaPhoneShop</Link>
                    <Link href="/basket"><Image alt='корзина' src={basket} /></Link>
                    <Button onClick={() => router.push('/admin')} >Админ панель</Button>
                    <Button onClick={() => router.push('/login')}>Выйти</Button>
                </div>
            </div>
        </header>
    )
}

export default Header;