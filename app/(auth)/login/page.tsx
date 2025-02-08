"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { FormEvent } from "react";
import { toast } from "react-toastify";

function Login() {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        toast.info("Авторизація");
    };

    return (
        <div className="container mt-12 flex flex-col place-items-center">
            <h1>Авторизація</h1>
            <form onSubmit={onSubmit} className="flex flex-col">
                <div className="space-y-2 mt-10">
                    <Input placeholder="Пошта" />
                    <Input placeholder="Пароль" />
                </div>
                <Link
                    href="/register"
                    className="mt-2 text-purple text-start text-sm"
                >
                    Не маєте акаунту? Зареєструйтесь!
                </Link>
                <div className="mt-10">
                    <Button
                        color="purpleBackground"
                        type="submit"
                        className="px-20 text-lg mx-auto"
                    >
                        Увійти
                    </Button>
                </div>
                <span className="mt-20 text-center">
                    Або увійти через соц. мережі
                </span>
            </form>
        </div>
    );
}

export default Login;
