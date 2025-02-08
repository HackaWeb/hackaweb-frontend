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
import { FormEvent, useRef } from "react";
import { toast } from "react-toastify";

function QuestCreation() {
    const modals = useAppSelector(selectModals);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        toast.info("Створення Квесту");
    };

    return (
        isModalOpened("QuestCreation", modals) && (
            <>
                <div className="container absolute left-1/3 top-10 z-10 flex flex-col place-content-center place-items-center bg-blue max-w-5xl p-8">
                    <ReturnBtn className="self-start" modal="QuestCreation" />
                    <span className="text-3xl">Створення Квесту</span>
                    <div className="relative w-3/4 mt-10">
                        <Image
                            src="/test.png"
                            alt="Квест"
                            className="w-full h-auto"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                        <Input
                            id="picture"
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={(e) => fileInputRef.current?.click()}
                        />
                        <Button
                            className="absolute right-4 bottom-4"
                            color="purpleBackground"
                        >
                            <RiEditLine size={24} />
                        </Button>
                    </div>
                    <form
                        className="w-full mt-10 px-10 space-y-10"
                        onSubmit={onSubmit}
                    >
                        <div className="space-y-2">
                            <label htmlFor="name">Назва квесту</label>
                            <Input id="name" className="bg-blue-dark" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description">Опис квесту</label>
                            <Textarea
                                id="description"
                                className="bg-blue-dark"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description">
                                {"Тривалість(хв)"}
                            </label>
                            <Input
                                id="description"
                                type="number"
                                className="bg-blue-dark"
                            />
                        </div>
                        <div className="mt-10">Список питань</div>
                        <Button
                            color="purpleBackground"
                            type="submit"
                            className="mx-auto px-16 text-lg"
                        >
                            Зберегти
                        </Button>
                    </form>
                </div>
                <ModalBg modal="QuestCreation" />
            </>
        )
    );
}

export default QuestCreation;
