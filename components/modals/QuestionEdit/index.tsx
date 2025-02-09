"use client";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import {
    selectModals,
    selectPrev,
    toggleModal,
} from "@/store/slices/modals/modals";
import ModalBg from "../ModalBg";
import { Button } from "@/components/ui/Button";
import {
    editQuestion,
    selectEditingQuestion,
} from "@/store/slices/questions/questions";
import { useEffect, useRef, useState } from "react";
import { InputAnswer } from "../CreateQuestion/InputAnswer";
import { Choice } from "../CreateQuestion/ChoiceAnswer";
import { TrueFalseAnswer } from "../CreateQuestion/TrueFalseAnswer";
import { SelectOption } from "@/types/selectOption.interface";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { selectOptions, setOptions } from "@/store/slices/options/options";
import { QuestionType } from "@/types/question.type";
import { BsFillImageFill } from "react-icons/bs";
import { Input } from "@/components/ui/Input";
import { FaVideo } from "react-icons/fa6";
import { Select } from "@/components/ui/Select";

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

function QuestionEdit() {
    const dispatch = useAppDispatch();

    const modals = useAppSelector(selectModals);
    const question = useAppSelector(selectEditingQuestion);
    const prevModal = useAppSelector(selectPrev);
    const options = useAppSelector(selectOptions);
    const fileInputRef = useRef<HTMLInputElement>(null);
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
                return <InputAnswer fetchedOptions={question?.options} />;
            case "choice":
                return <Choice fetchedOptions={question?.options} />;
            case "boolean":
                return <TrueFalseAnswer fetchedOptions={question?.options} />;
            default:
                return <></>;
        }
    };

    const renderQuestionTitle = () => {
        switch (question?.type) {
            case "input":
                return "Відкритого типу";
            case "choice":
                return "Вибір з варіантами";
            case "boolean":
                return "Правда/Брехня";
            default:
                return "";
        }
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const type = questionType?.value;

        if (!title.length || !type)
            return toast.error("Спочатку заповніть усі поля!");

        const edited = {
            id: question!.id,
            title: title || question!.title,
            type: questionType.value || question!.type,
            options: options.length ? options : question!.options,
            image: file && fileType === "image" ? file : question?.image,
            video: file && fileType === "video" ? file : question?.video,
        };

        dispatch(editQuestion(edited));

        setTitle("");
        setFile(null);
        setQuestionType(null);
        dispatch(setOptions([]));
        dispatch(toggleModal("QuestionEdit"));
        if (prevModal) dispatch(toggleModal(prevModal));
        toast.info("Питання відредаговано!");
    };

    useEffect(() => {
        if (question) {
            setQuestionType({
                title: renderQuestionTitle(),
                value: question.type,
            });
            setTitle(question.title);
        }
    }, [question]);

    return (
        isModalOpened("QuestionEdit", modals) && (
            <>
                <div className="absolute left-[50%] -translate-x-[50%] max-w-[700px] w-full top-10 z-10 flex flex-col place-content-center place-items-center bg-blue p-6">
                    <ReturnBtn className="self-start" modal="QuestionEdit" />
                    <div className="text-3xl mt-10">Редагування Питання</div>
                    <div className="w-full p-4">
                        <div className="relative w-full mt-2">
                            {file || question?.image || question?.video ? (
                                file || question?.image ? (
                                    <img
                                        src={file || question?.image}
                                        alt="Зображення питання"
                                        className="w-full h-auto aspect-square object-cover"
                                    />
                                ) : (
                                    <video
                                        src={file || question?.video}
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
                <ModalBg modal="QuestionEdit" />
            </>
        )
    );
}

export default QuestionEdit;
