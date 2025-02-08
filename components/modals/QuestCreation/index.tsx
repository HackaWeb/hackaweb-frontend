"use client";
import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectModals } from "@/store/slices/modals";
import ModalBg from "../ModalBg";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import Image from "next/image";
import { RiEditLine } from "react-icons/ri";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

function QuestCreation() {
    const modals = useAppSelector(selectModals);

    return (
        isModalOpened("QuestCreation", modals) && (
            <>
                <div className="container absolute left-1/3 top-32 z-10 flex flex-col place-content-center place-items-center bg-blue max-w-5xl p-8">
                    <ReturnBtn className="self-start" modal="QuestCreation" />
                    <h1>Створення Квесту</h1>
                    <div className="relative w-3/4 mt-10">
                        <Image
                            src="/test.png"
                            alt="Квест"
                            className="w-full h-auto"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                        <Button
                            className="absolute right-4 bottom-4"
                            color="purpleBackground"
                        >
                            <RiEditLine size={24} />
                        </Button>
                    </div>
                    <form>
                        <label htmlFor="name">Назва квесту</label>
                        <Input id="name" />
                        <label htmlFor="description">Опис квесту</label>
                        <Textarea id="description" />
                        <label htmlFor="description">{"Тривалість(хв)"}</label>
                        <Input id="description" type="number" />
                        <span>Список питань</span>
                    </form>
                </div>
                <ModalBg modal="QuestCreation" />
            </>
        )
    );
}

export default QuestCreation;
