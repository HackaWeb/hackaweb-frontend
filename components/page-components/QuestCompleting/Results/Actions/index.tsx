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
        <div>
            <Link href="#" className="flex justify-center">
                <Button color="purpleBackground">Спробувати ще раз</Button>
            </Link>
            <Button
                color="purpleBorder"
                className="mt-3 mx-auto"
                onClick={() => redirect("/")}
            >
                Повернутися на головну
            </Button>

            <Button
                color="yellowBorder"
                className="mt-3 mx-auto"
                onClick={() => redirect("#")}
            >
                Пройти інший квест цього автора
            </Button>
        </div>
    );
};
