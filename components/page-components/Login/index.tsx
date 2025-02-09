"use client";

import { login } from "@/api/auth";
import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { setCookie } from "@/helpers/setCookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { LoginRequestBody } from "@/api/requestBodies/auth.interface";
import {
    INVALID_EMAIL_OR_PASSWORD_MESSAGE,
    INVALID_INPUTES_MESSAGE,
} from "@/constants";

export const LoginPageComponent = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({ email: "", password: "" });

    const loginUser = async (loginRequestBody: LoginRequestBody) => {
        try {
            const res = await login(loginRequestBody);

            if ("jwtToken" in res) {
                setCookie("jwtToken", res.jwtToken);
                return [];
            }

            if ("statusCode" in res) {
                if (res.statusCode === 400) {
                    return res.errors;
                } else if (res.statusCode === 401) {
                    return [
                        {
                            field: "",
                            message:
                                res.message === "Invalid email or password."
                                    ? INVALID_EMAIL_OR_PASSWORD_MESSAGE
                                    : res.message,
                        },
                    ];
                }
            }
            return [DEFAULT_FIELD_ERROR];
        } catch (error) {
            console.error(error);
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!formData.email.trim() || !formData.password.trim()) {
            toast.error(INVALID_INPUTES_MESSAGE);
            return;
        }

        const results = await loginUser({
            email: formData.email,
            password: formData.password,
        });

        if (results.length === 0) {
            toast.success("Вас успішно авторизовано!");
            router.push("/profile");
        } else {
            printToastErrorMessages(results.map((res) => res.message));
        }
    };

    return (
        <div className="container mt-12 flex flex-col place-items-center">
            <h1>Авторизація</h1>
            <form onSubmit={onSubmit} className="flex flex-col">
                <div className="space-y-2 mt-10">
                    <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Пошта"
                    />
                    <Input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                        placeholder="Пароль"
                    />
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
};
