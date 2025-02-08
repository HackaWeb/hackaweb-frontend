"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
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
            <form
                onSubmit={onSubmit}
                className="flex flex-col place-items-center"
            >
                <div className="space-y-2 mt-10">
                    <Input placeholder="Пошта" />
                    <Input placeholder="Пароль" />
                </div>
                <div className="mt-10">
                    <Button
                        color="purpleBackground"
                        type="submit"
                        className="px-20 text-lg"
                    >
                        Увійти
                    </Button>
                </div>
                <span className="mt-20">Або увійти через соц. мережі</span>
            </form>
        </div>
    );
}

export default Login;
