"use client";

import { register } from "@/api/auth";
import { RegisterRequestBody } from "@/api/requestBodies/auth.interface";
import {
    DEFAULT_FIELD_ERROR,
    RequestError,
} from "@/api/responses/common/failure.interface";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
    INVALID_CONFIRMATION_PASSWORD_MESSAGE,
    INVALID_INPUTES_MESSAGE,
    INVALID_PASSWORD_LENGTH_MESSAGE,
    INVALID_PASSWORD_NUMBER_MESSAGE,
    INVALID_PASSWORD_SPECIAL_CHARACTER_MESSAGE,
    INVALID_PASSWORD_UPPERCASE_MESSAGE,
} from "@/constants";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { setCookie } from "@/helpers/setCookie";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const translateErrorMessage = (errorMessage: string) => {
    switch (errorMessage) {
        case "Password must be at least 8 characters":
            return INVALID_PASSWORD_LENGTH_MESSAGE;
        case "Password must contain at least one uppercase letter":
            return INVALID_PASSWORD_UPPERCASE_MESSAGE;
        case "Password must contain at least one number":
            return INVALID_PASSWORD_NUMBER_MESSAGE;
        case "Password must contain at least one special character":
            return INVALID_PASSWORD_SPECIAL_CHARACTER_MESSAGE;
        default:
            return errorMessage;
    }
};

export const RegisterPageComponent = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const registerUser = async (
        registerRequestBody: RegisterRequestBody,
    ): Promise<RequestError[]> => {
        try {
            const res = await register(registerRequestBody);
            if ("jwtToken" in res) {
                setCookie("token", res.jwtToken);
                return [];
            }
            return res.errors.map((error) => ({
                field: "",
                message: translateErrorMessage(error.message),
            }));
        } catch (error) {
            console.error(error);
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (
            !formData.email.trim() ||
            !formData.password.trim() ||
            !formData.confirmPassword.trim()
        ) {
            toast.error(INVALID_INPUTES_MESSAGE);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error(INVALID_CONFIRMATION_PASSWORD_MESSAGE);
            return;
        }

        const results = await registerUser({
            email: formData.email,
            password: formData.password,
        });

        if (results.length === 0) {
            toast.success("Вас успішно зареєстровано!");
            router.refresh();

            const timeout = setTimeout(() => {
                router.push("/profile");
                clearTimeout(timeout);
            }, 1000);
        } else {
            printToastErrorMessages(results.map((res) => res.message));
        }
    };

    return (
        <div className="container sm:mt-12 mt-6 flex flex-col place-items-center">
            <h1>Реєстрація</h1>
            <form
                onSubmit={onSubmit}
                className="flex flex-col place-items-center"
            >
                <div className="space-y-2 sm:mt-10 mt-6">
                    <Input
                        placeholder="Ваша пошта..."
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    <Input
                        placeholder="Придумайте надійний пароль..."
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />
                    <Input
                        placeholder="Повторіть пароль..."
                        type="password"
                        name="new-password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                confirmPassword: e.target.value,
                            })
                        }
                    />
                </div>
                <Button
                    color="purpleBackground"
                    type="submit"
                    className="px-10 sm:px-20 text-lg mt-5 sm:mt-10"
                >
                    Реєстрація
                </Button>
                <span className="mt-8 sm:mt-20">
                    Або зареєструватися через соц. мережі
                </span>
            </form>
        </div>
    );
};
