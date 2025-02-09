"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
    INVALID_CONFIRMATION_PASSWORD_MESSAGE,
    INVALID_EMAIL_MESSAGE,
    INVALID_PASSWORD_MESSAGE,
    isValidEmail,
    isValidPasswordLength,
} from "@/helpers/formHelpers";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

function Register() {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (
            !emailRef ||
            !passwordRef ||
            !confirmPasswordRef ||
            !emailRef.current ||
            !passwordRef.current ||
            !confirmPasswordRef.current
        ) {
            return;
        }

        const email = emailRef.current.value;
        if (!isValidEmail(email)) {
            toast.error(INVALID_EMAIL_MESSAGE);
            return;
        }

        const password = passwordRef.current.value;
        if (!isValidPasswordLength(password)) {
            toast.error(INVALID_PASSWORD_MESSAGE);
            return;
        }

        const confirmPassword = confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            toast.error(INVALID_CONFIRMATION_PASSWORD_MESSAGE);
            return;
        }

        toast.success("Вас успішно зареєстровано!");
    };

    return (
        <div className="container mt-12 flex flex-col place-items-center">
            <h1>Реєстрація</h1>
            <form
                onSubmit={onSubmit}
                className="flex flex-col place-items-center"
            >
                <div className="space-y-2 mt-10">
                    <Input placeholder="Пошта" type="email" ref={emailRef} />
                    <Input
                        placeholder="Пароль"
                        type="password"
                        ref={passwordRef}
                    />
                    <Input
                        placeholder="Повторити пароль"
                        type="password"
                        ref={confirmPasswordRef}
                    />
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
