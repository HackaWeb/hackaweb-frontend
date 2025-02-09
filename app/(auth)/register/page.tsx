"use client";
import { register } from "@/api/auth";
import { RegisterUserRequest } from "@/api/responses/auth.types";
import { RequestError } from "@/api/responses/common/failure.interface";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { displayToasts } from "@/helpers/displayToasts";
import {
    INVALID_CONFIRMATION_PASSWORD_MESSAGE,
    INVALID_EMAIL_MESSAGE,
    INVALID_PASSWORD_MESSAGE,
    isValidEmail,
    isValidPasswordLength,
} from "@/helpers/formHelpers";
import { setCookie } from "@/helpers/setCookie";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

function Register() {
    const router = useRouter();
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

    const onSubmit = async (e: FormEvent) => {
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

        const results = await registerUser({
            email,
            password,
        });

        if (results.length === 0) {
            toast.success("Вас успішно зареєстровано!");
            router.push("profile");
        } else {
            displayToasts(results.map((res) => res.message));
        }
    };

    const registerUser = async (
        registerOptions: RegisterUserRequest,
    ): Promise<RequestError[]> => {
        try {
            const res = await register(registerOptions);
            if ("jwtToken" in res) {
                setCookie("jwtToken", res.jwtToken);
                return [];
            }
            return res.errors;
        } catch (error) {
            console.error(error);
            return [
                { field: "", message: "Невідома помилка. Зв'яжіться з нами!" },
            ];
        }
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
