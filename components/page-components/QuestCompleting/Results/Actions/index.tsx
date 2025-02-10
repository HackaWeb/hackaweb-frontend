"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Actions = () => {
    const router = useRouter();

    const redirect = (path: string) => {
        router.push(path);
        router.refresh();
    };
    return (
        <div className="max-w-[300px] mx-auto xl:mx-0 xl:max-w-none">
            <Link href="#" className="flex justify-center">
                <Button color="purpleBackground" className="w-full xl:w-auto">Спробувати ще раз</Button>
            </Link>
            <Button
                color="purpleBorder"
                className="mt-3 mx-auto w-full xl:w-auto"
                onClick={() => redirect("/")}
            >
                Повернутися на головну
            </Button>
            <Button
                color="yellowBorder"
                className="mt-3 w-full xl:w-auto xl:mx-auto"
                onClick={() => redirect("#")}
            >
                Пройти інший квест цього автора
            </Button>
        </div>
    );
};
