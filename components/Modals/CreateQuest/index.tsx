"use client";

import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectModals, toggleModal } from "@/store/slices/modals";
import ModalBg from "../ModalBg";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { RiEditLine } from "react-icons/ri";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { cn } from "@/helpers/cn";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { BsFillImageFill } from "react-icons/bs";

export const CreateQuest = () => {
    const dispatch = useAppDispatch();

    const modals = useAppSelector(selectModals);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [file, setFile] = useState<string | null>(null);

    const onQuestionAddClick = () => {
        dispatch(toggleModal("QuestionCreation"));
    };

    const onCreateQuestSubmit = (e: FormEvent) => {
        e.preventDefault();

        toast.info("Створення Квесту");
    };

    return (
        isModalOpened("QuestCreation", modals) && (
            <>
                <div className="absolute left-[50%] -translate-x-[50%] min-w-[600px] top-10 z-10 flex flex-col place-content-center place-items-center bg-blue max-w-5xl p-6">
                    <ReturnBtn className="self-start" modal="QuestCreation" />
                    <span className="text-3xl mt-10">Створення Квесту</span>
                    <div className="w-full p-4">
                        <div className="relative w-full mt-2">
                            {!file?.includes("blob") ? (
                                <div className="w-full h-auto border-purple border-2 aspect-square flex items-center justify-center">
                                    <BsFillImageFill className="size-20 text-gray" />
                                </div>
                            ) : (
                                <img src="" alt="" />
                            )}
                            <Input
                                id="picture"
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                /* onChange={(e) => {
                                    const media = handleMedia(e);
                                    setFile(media ? media : null);
                                }} */
                            />
                            <Button
                                className={cn(
                                    "absolute right-4 p-3",
                                    file?.includes("blob")
                                        ? "top-4"
                                        : "bottom-4",
                                )}
                                color="purpleBackground"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <RiEditLine size={24} />
                            </Button>
                        </div>
                        <form
                            className="w-full mt-6"
                            onSubmit={onCreateQuestSubmit}
                        >
                            <div>
                                <label htmlFor="name" className="text-gray">
                                    Назва квесту
                                </label>
                                <Input
                                    id="name"
                                    className="mt-2"
                                    placeholder="Назва квесту..."
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="description"
                                    className="text-gray"
                                >
                                    Опис квесту
                                </label>
                                <Textarea
                                    id="description"
                                    className="mt-2"
                                    placeholder="Опис квесту..."
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="description"
                                    className="text-gray"
                                >
                                    Тривалість (хв)
                                </label>
                                <Input
                                    id="description"
                                    type="number"
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <div className="text-gray">Список питань</div>
                                <Button
                                    color="yellowBorder"
                                    className="mt-2"
                                    type="button"
                                    onClick={onQuestionAddClick}
                                >
                                    Додати питання
                                </Button>
                            </div>
                            <Button
                                color="purpleBackground"
                                type="submit"
                                className="mx-auto px-16 mt-8"
                            >
                                Зберегти
                            </Button>
                        </form>
                    </div>
                </div>
                <ModalBg modal="QuestCreation" />
            </>
        )
    );
};
