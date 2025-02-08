"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { selectModals } from "@/store/slices/modals";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import ModalBg from "../ModalBg";
import { handleMedia } from "@/helpers/handleMedia";
import { SelectOption } from "@/types/selectOption.interface";

function QuestionCreation() {
    const modals = useAppSelector(selectModals);
    const dispatch = useAppDispatch();
    const [questionType, setQuestionType] = useState<SelectOption | null>();
    const [file, setFile] = useState<string>();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.info("Створення Питання");
    };

    return (
        isModalOpened("QuestionCreation", modals) && (
            <>
                <div className="container absolute left-1/3 top-10 z-10 flex flex-col place-content-center place-items-center bg-blue max-w-5xl p-8">
                    <ReturnBtn
                        className="self-start"
                        modal="QuestionCreation"
                    />
                    <span className="text-3xl">Створення Квесту</span>
                    <div className="w-3/4 mt-10">
                        {file?.includes("blob") ? (
                            <video controls src={file}></video>
                        ) : (
                            <Image
                                src={file || "/question.png"}
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
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="text-purple underline cursor-pointer text-center mt-2"
                        >
                            Змінити відео/картинку
                        </div>
                    </div>
                    <form
                        className="w-full mt-10 px-10 space-y-10"
                        onSubmit={onSubmit}
                    >
                        <div className="space-y-3">
                            <label htmlFor="name">Назва питання</label>
                            <Input id="name" className="bg-blue-dark" />
                        </div>

                        <div className="space-y-3">
                            <label htmlFor="description">Тип питання</label>
                            {/* <Select
                                placeholder="Оберіть тип питання"
                                activeOption={questionType}
                            /> */}
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
                <ModalBg modal="QuestionCreation" />
            </>
        )
    );
}

export default QuestionCreation;
