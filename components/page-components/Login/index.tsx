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
import { INVALID_INPUTES_MESSAGE } from "@/constants";

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
                    return [{ field: "", message: res.message }];
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
        <div className="container sm:mt-12 mt-6 flex flex-col place-items-center">
            <h1>Авторизація</h1>
            <form onSubmit={onSubmit} className="flex flex-col w-full">
                <div className="space-y-2 sm:mt-10 mt-6">
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
                <Button
                    color="purpleBackground"
                    type="submit"
                    className="px-10 sm:px-20 text-lg mt-5 mx-auto sm:mt-10"
                >
                    Увійти
                </Button>
                <span className="mt-8 sm:mt-20 text-center">
                    Або увійти через соц. мережі
                </span>
            </form>
        </div>
    );
};
