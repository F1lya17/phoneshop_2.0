"use client";

import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <form className="login__form">
                <h2 className="login__title">Регистрация</h2>
                <div className="login__email input-block">
                    <h3 className="login__email-label input-label">Введите почту:</h3>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="login__password input-block">
                    <h3 className="login__password-label input-label">Введите пароль:</h3>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p className="login__link">Есть аккаунт? <Link href="/login">Войдите</Link></p>
                <Button>Зарегистрироваться</Button>
            </form>
        </div>
    );
}