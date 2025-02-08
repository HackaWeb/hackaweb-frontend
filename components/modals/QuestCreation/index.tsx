"use client";
import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectModals, toggleModal } from "@/store/slices/modals";
import ModalBg from "../ModalBg";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import Image from "next/image";
import { RiEditLine } from "react-icons/ri";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { cn } from "@/helpers/cn";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { handleMedia } from "@/helpers/handleMedia";

function QuestCreation() {
    const dispatch = useAppDispatch();
    const [file, setFile] = useState<string>();
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
                        {file?.includes("blob") ? (
                            <video controls src={file}></video>
                        ) : (
                            <Image
                                src={file || "/test.png"}
                                alt="Картинка Квесту"
                                className="w-full h-auto"
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        )}

                        <Input
                            id="picture"
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept=".jpg, .jpeg, .png, .mp4"
                            onChange={(e) => {
                                const media = handleMedia(e);
                                console.log(media);
                                setFile(media);
                            }}
                        />
                        <Button
                            className={cn(
                                "absolute right-4",
                                file?.includes("blob") ? "top-4" : "bottom-4",
                            )}
                            color="purpleBackground"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <RiEditLine size={24} />
                        </Button>
                    </div>
                    <form
                        className="w-full mt-10 px-10 space-y-10"
                        onSubmit={onSubmit}
                    >
                        <div className="space-y-3">
                            <label htmlFor="name">Назва квесту</label>
                            <Input id="name" className="bg-blue-dark" />
                        </div>

                        <div className="space-y-3">
                            <label htmlFor="description">Опис квесту</label>
                            <Textarea
                                id="description"
                                className="bg-blue-dark"
                            />
                        </div>

                        <div className="space-y-3">
                            <label htmlFor="description">
                                {"Тривалість(хв)"}
                            </label>
                            <Input
                                id="description"
                                type="number"
                                className="bg-blue-dark"
                            />
                        </div>
                        <div className="space-y-4">
                            <span className="mt-10">Список питань</span>
                            {}
                            <Button
                                color="yellowBorder"
                                type="button"
                                onClick={() =>
                                    dispatch(toggleModal("QuestionCreation"))
                                }
                            >
                                Додати питання
                            </Button>
                        </div>
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
