"use client";
import { login } from "@/api/auth";
import { LoginUserRequest } from "@/api/responses/auth.types";
import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { displayToasts } from "@/helpers/displayToasts";
import {
    INVALID_EMAIL_MESSAGE,
    INVALID_PASSWORD_MESSAGE as INVALID_PASSWORD_LENGTH_MESSAGE,
    isValidEmail,
    isValidPasswordLength,
} from "@/helpers/formHelpers";
import { setCookie } from "@/helpers/setCookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { toast } from "react-toastify";

function Login() {
    const router = useRouter();
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (
            !emailRef ||
            !passwordRef ||
            !emailRef.current ||
            !passwordRef.current
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
            toast.error(INVALID_PASSWORD_LENGTH_MESSAGE);
            return;
        }

        const results = await loginUser({
            email,
            password,
        });

        if (results.length === 0) {
            router.push("/profile");
            toast.success("Вас успішно авторизовано!");
        } else {
            displayToasts(results.map((res) => res.message));
        }
    };

    const loginUser = async (loginOptions: LoginUserRequest) => {
        try {
            const res = await login(loginOptions);
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

    return (
        <div className="container mt-12 flex flex-col place-items-center">
            <h1>Авторизація</h1>
            <form onSubmit={onSubmit} className="flex flex-col">
                <div className="space-y-2 mt-10">
                    <Input type="email" ref={emailRef} placeholder="Пошта" />
                    <Input
                        type="password"
                        ref={passwordRef}
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
}

export default Login;
