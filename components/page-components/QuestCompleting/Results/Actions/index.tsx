import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const Actions = () => {
    return (
        <div>
            <Link href="#" className="flex justify-center">
                <Button color="purpleBackground">Спробувати ще раз</Button>
            </Link>
            <Link href="/" className="flex justify-center">
                <Button color="purpleBorder" className="mt-3">
                    Повернутися на головну
                </Button>
            </Link>

            <Link href="#" className="flex justify-center">
                <Button color="yellowBorder" className="mt-3">
                    Пройти інший квест цього автора
                </Button>
            </Link>
        </div>
    );
};
