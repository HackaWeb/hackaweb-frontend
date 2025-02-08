"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { FormEvent } from "react";
import { toast } from "react-toastify";

function Register() {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        toast.info("Реєстрація");
    };

    return (
        <div className="container mt-12 flex flex-col place-items-center">
            <h1>Реєстрація</h1>
            <form
                onSubmit={onSubmit}
                className="flex flex-col place-items-center"
            >
                <div className="space-y-2 mt-10">
                    <Input placeholder="Пошта" />
                    <Input placeholder="Пароль" />
                    <Input placeholder="Повторити пароль" />
                </div>
                <div className="mt-10">
                    <Button
                        color="purpleBackground"
                        type="submit"
                        className="px-20 text-lg"
                    >
                        Реєстрація
                    </Button>
                </div>
                <span className="mt-20">
                    Або зареєструватися через соц. мережі
                </span>
            </form>
        </div>
    );
}

export default Register;
