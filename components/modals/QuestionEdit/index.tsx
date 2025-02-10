"use client";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { isModalOpened } from "@/helpers/isModalOpened";
import { ModalBg } from "../ModalBg";
import { Button } from "@/components/ui/Button";
import { editQuestion } from "@/store/slices/questions/questions";
import { toast } from "react-toastify";
import { BsFillImageFill } from "react-icons/bs";
import { Input } from "@/components/ui/Input";
import { FaVideo } from "react-icons/fa6";
import { Select } from "@/components/ui/Select";
import { useEffect } from "react";
import { useQuestionModal } from "@/hooks/useQuestionModal";
import { QuestionType } from "@/types/question.type";

function QuestionEdit() {
    const {
        dispatch,
        file,
        fileInputRef,
        modals,
        onFileUpload,
        options,
        question,
        questionType,
        questionTypes,
        renderGetAnswer,
        renderQuestionTitle,
        setQuestionType,
        setTitle,
        title,
        resetOptions,
    } = useQuestionModal();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!question) return;

        const type = questionType?.value;

        if (!title.length || !type)
            return toast.error("Спочатку заповніть усі поля!");

        const edited = {
            id: question.id,
            title: title || question.title,
            type: (questionType.value as QuestionType) || question.type,
            options: options.length ? options : question.options,
            file: file ? file : undefined,
        };

        dispatch(editQuestion(edited));
        resetOptions("QuestionEdit", "Питання відредаговано!");
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
                    <ReturnBtn
                        className="self-start"
                        modal="QuestionEdit"
                        isPrev
                    />
                    <div className="text-3xl mt-10">Редагування Питання</div>
                    <div className="w-full p-4">
                        <div className="relative w-full mt-2">
                            {file || question?.file ? (
                                file?.includes(".png") ||
                                question?.file?.includes(".png") ? (
                                    <img
                                        src={file || question?.file}
                                        alt="Зображення питання"
                                        className="w-full h-auto aspect-square object-cover"
                                    />
                                ) : (
                                    <video
                                        src={file || question?.file}
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
                                accept=".png, .mp4"
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
