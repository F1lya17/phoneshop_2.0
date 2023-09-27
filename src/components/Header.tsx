"use client"

import Image from "next/image";
import Link from "next/link";
import basket from "../../public/basket.svg"
import Button from "./UI/Button";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { userReducer } from "@/store/reducers/user";
import { useEffect } from "react";


const Header = () => {
    const router = useRouter();
    const { totalCount } = useAppSelector(state => state.basket);
    const { isAuth } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const { logout, setUser } = userReducer.actions;

    const outLogin = (e: React.MouseEvent) => {
        e.preventDefault();
        if (window.confirm('Вы точно хотите выйти?')) {
            localStorage.setItem('auth', '');
            dispatch(logout());
            router.push('/login');
        }
    }

    useEffect(() => {
        const email = localStorage.getItem('auth');
        if (email) {
            dispatch(setUser(email));
        }
    }, [])

    return (
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <Link href="/" className="header__logo">F1lyaPhoneShop</Link>
                    <Link className="header__basket" href="/basket"><Image alt='корзина' src={basket} />
                        {totalCount > 0 && <div className="header__count">{totalCount}</div>}
                    </Link>
                    {
                        isAuth ?
                            <>
                                <Button onClick={() => router.push('/admin')}>Админ панель</Button>
                                <Button onClick={outLogin}>Выйти</Button>
                            </>
                            :
                            <Button onClick={() => router.push('/login')}>Войти</Button>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;