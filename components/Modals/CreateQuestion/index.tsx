"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import ModalBg from "../../modals/ModalBg";
import { SelectOption } from "@/types/selectOption.interface";
import { BsFillImageFill } from "react-icons/bs";
import { QuestionType } from "@/types/question.type";
import { InputAnswer } from "./InputAnswer";
import { TrueFalseAnswer } from "./TrueFalseAnswer";
import { Choice } from "./ChoiceAnswer";
import {
    selectModals,
    selectPrev,
    toggleModal,
} from "@/store/slices/modals/modals";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import {
    addQuestion,
    selectQuestions,
} from "@/store/slices/questions/questions";
import { FaVideo } from "react-icons/fa6";
import { Select } from "@/components/ui/Select";
import { selectOptions, setOptions } from "@/store/slices/options/options";

interface CustomSelectOption extends SelectOption {
    value: QuestionType;
}

const questionTypes: CustomSelectOption[] = [
    {
        title: "Відкритого типу",
        value: "input",
    },
    {
        title: "Вибір з варіантами",
        value: "choice",
    },
    {
        title: "Правда/Брехня",
        value: "boolean",
    },
];

export const CreateQuestion = () => {
    const dispatch = useAppDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const modals = useAppSelector(selectModals);
    const prevModal = useAppSelector(selectPrev);
    const questions = useAppSelector(selectQuestions);
    const options = useAppSelector(selectOptions);
    const [questionType, setQuestionType] = useState<SelectOption | null>(null);
    const [file, setFile] = useState<string | null>(null);
    const [fileType, setFileType] = useState<"image" | "video" | null>(null);
    const [title, setTitle] = useState<string>("");

    const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];

        if (uploadedFile) {
            const fileURL = URL.createObjectURL(uploadedFile);
            const isVideo = uploadedFile.type.includes("video");

            setFile(fileURL);
            setFileType(isVideo ? "video" : "image");
        }
    };

    const renderGetAnswer = () => {
        switch (questionType?.value) {
            case "input":
                return <InputAnswer />;
            case "choice":
                return <Choice />;
            case "boolean":
                return <TrueFalseAnswer />;
            default:
                return <></>;
        }
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const type = questionType?.value;

        if (!title.length || !type || !options.length)
            return toast.error("Спочатку заповніть усі поля!");

        const question = {
            id: questions.length + 1,
            title,
            type,
            options,
            image: file && fileType === "image" ? file : undefined,
            video: file && fileType === "video" ? file : undefined,
        };

        dispatch(addQuestion(question));

        setTitle("");
        setFile(null);
        setQuestionType(null);
        dispatch(setOptions([]));
        dispatch(toggleModal("QuestionCreation"));
        if (prevModal) dispatch(toggleModal(prevModal));
        toast.info("Питання створено!");
    };

    return (
        isModalOpened("QuestionCreation", modals) && (
            <>
                <div className="absolute left-[50%] -translate-x-[50%] max-w-[700px] w-full top-10 z-10 flex flex-col place-content-center place-items-center bg-blue p-6">
                    <ReturnBtn
                        className="self-start"
                        modal="QuestionCreation"
                    />
                    <div className="text-3xl mt-10">Створення Питання</div>
                    <div className="w-full p-4">
                        <div className="relative w-full mt-2">
                            {file ? (
                                fileType === "image" ? (
                                    <img
                                        src={file}
                                        alt="Зображення питання"
                                        className="w-full h-auto aspect-square object-cover"
                                    />
                                ) : (
                                    <video
                                        src={file}
                                        controls
                                        className="w-full h-auto aspect-square object-cover"
                                    />
                                )
                            ) : (
                                <div className="w-full h-auto border-2 border-purple aspect-square flex items-center justify-center">
                                    <BsFillImageFill className="size-20 text-gray" />
                                </div>
                            )}
                            <Input
                                id="media"
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*,video/*"
                                onChange={onFileUpload}
                            />
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="text-purple underline cursor-pointer text-center mt-2 flex items-center justify-center gap-2"
                            >
                                <FaVideo size={18} /> Змінити відео/картинку
                            </div>
                        </div>
                        <form className="w-full mt-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="name" className="text-gray">
                                    Назва питання
                                </label>
                                <Input
                                    id="name"
                                    value={title}
                                    className="mt-2"
                                    placeholder="Назва питання..."
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="questionType"
                                    className="text-gray"
                                >
                                    Тип питання
                                </label>
                                <Select
                                    placeholder="Оберіть тип питання..."
                                    activeOption={questionType}
                                    options={questionTypes}
                                    setActiveOption={setQuestionType}
                                    className="mt-2"
                                    id="questionType"
                                />
                            </div>
                            {renderGetAnswer()}
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
                <ModalBg modal="QuestionCreation" />
            </>
        )
    );
};
