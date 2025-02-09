"use client";

import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import ModalBg from "../../modals/ModalBg";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { RiEditLine } from "react-icons/ri";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { BsFillImageFill } from "react-icons/bs";
import { selectModals, toggleModal } from "@/store/slices/modals/modals";
import { selectQuestions } from "@/store/slices/questions/questions";
import { FiEdit2 } from "react-icons/fi";

export const CreateQuest = () => {
    const dispatch = useAppDispatch();
    const questions = useAppSelector(selectQuestions);
    const modals = useAppSelector(selectModals);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<string | null>(null);

    const onQuestionAddClick = () => {
        dispatch(toggleModal("QuestCreation"));
        dispatch(toggleModal("QuestionCreation"));
    };

    const onCreateQuestSubmit = (e: FormEvent) => {
        e.preventDefault();
        toast.info("Створення Квесту");
    };

    const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];

        if (uploadedFile) {
            const fileURL = URL.createObjectURL(uploadedFile);
            setFile(fileURL);
        }
    };

    return (
        isModalOpened("QuestCreation", modals) && (
            <>
                <div className="absolute left-[50%] -translate-x-[50%] max-w-[700px] w-full top-10 z-10 flex flex-col place-content-center place-items-center bg-blue p-6">
                    <ReturnBtn className="self-start" modal="QuestCreation" />
                    <div className="text-3xl mt-10">Створення Квесту</div>
                    <div className="w-full p-4">
                        <div className="relative w-full mt-2">
                            {file ? (
                                <img
                                    src={file}
                                    alt="Зображення квесту"
                                    className="w-full h-auto aspect-square object-cover"
                                />
                            ) : (
                                <div className="w-full h-auto border-2 border-purple aspect-square flex items-center justify-center">
                                    <BsFillImageFill className="size-20 text-gray" />
                                </div>
                            )}
                            <Input
                                id="picture"
                                type="file"
                                ref={fileInputRef}
                                className="hidden "
                                accept="image/*"
                                onChange={onImageUpload}
                            />
                            <Button
                                className="absolute right-4 p-3 bottom-4"
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
                                <label htmlFor="duration" className="text-gray">
                                    Тривалість (хв)
                                </label>
                                <Input
                                    id="duration"
                                    type="number"
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-6">
                                <div className="space-y-3">
                                    <span className="text-gray">
                                        Список питань
                                    </span>

                                    {questions.map((question, i) => (
                                        <div key={i} className="flex gap-2">
                                            <Input
                                                disabled
                                                defaultValue={question.title}
                                            />
                                            <Button color="purpleBackground">
                                                <FiEdit2 size={20} />
                                            </Button>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    color="yellowBorder"
                                    className="mt-8"
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
