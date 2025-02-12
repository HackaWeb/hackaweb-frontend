"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { isModalOpened } from "@/helpers/isModalOpened";
import { toast } from "react-toastify";
import { ModalBg } from "../ModalBg";
import { BsFillImageFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa6";
import { Select } from "@/components/ui/Select";
import { useQuestionModal } from "@/hooks/useQuestionModal";
import { Question } from "@/types/question.interface";
import { useEffect, useRef } from "react";
import {
    addQuestion,
    setOptions,
    setQuestionActiveId,
} from "@/store/slices/quests";

export const CreateQuestion = () => {
    const {
        dispatch,
        fileInputRef,
        fileType,
        modals,
        onFileUpload,
        options,
        questionType,
        questionTypes,
        renderGetAnswer,
        setQuestionType,
        question,
        text,
        resetOptions,
        media,
        setFileType,
        setMedia,
        setText,
    } = useQuestionModal();

    const videoRef = useRef<HTMLVideoElement>(null);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const type = Number(questionType?.value);

        if (!text.length || !options?.length)
            return toast.error("Спочатку заповніть усі поля!");

        const question: Question = {
            id: crypto.randomUUID(),
            text,
            type,
            choiceOptions: options,
            mediaUrl: media ? media : undefined,
            fileType: fileType ? fileType : undefined,
        };

        dispatch(addQuestion(question));
        resetOptions("QuestionCreation", "Питання створено!");
    };

    useEffect(() => {
        if (fileType === "video" && videoRef.current) {
            const video = videoRef.current;
            const handleMetadataLoad = () => {
                if (
                    video.duration >
                    Number(process.env.NEXT_PUBLIC_MAX_VIDEO_DURATION)
                ) {
                    setMedia(null);
                    setFileType(null);
                    toast.error(
                        `Тривалість відео неповинна перевищувати ${process.env.NEXT_PUBLIC_MAX_VIDEO_DURATION} секунд!`,
                    );
                }
            };

            video.addEventListener("loadedmetadata", handleMetadataLoad);

            return () => {
                video.removeEventListener("loadedmetadata", handleMetadataLoad);
            };
        }
    }, [media, fileType]);

    useEffect(() => {
        if (modals.includes("QuestionCreation")) {
            dispatch(setOptions(null));
            dispatch(setQuestionActiveId(null));
        }
    }, [modals]);

    return (
        isModalOpened("QuestionCreation", modals) && (
            <>
                <div className="max-h-[95vh] overflow-y-auto pt-4 fixed left-[50%] -translate-x-[50%] md:max-w-[700px] w-[95%] md:w-full md:top-10 top-4 z-10 bg-blue sm:p-6 flex flex-col rounded-lg bottom-4">
                    <ReturnBtn
                        className="self-start mt-2 mb-10 ml-2 sm:ml-4"
                        modal="QuestionCreation"
                        isPrev
                    />
                    <div className="text-xl sm:text-3xl text-center">
                        Створення Питання
                    </div>
                    <div className="w-full p-4">
                        <div className="relative w-full mt-2">
                            {media ? (
                                fileType === "image" ? (
                                    <img
                                        src={media || question?.mediaUrl}
                                        alt="Зображення питання"
                                        className="w-full h-auto aspect-square object-cover"
                                    />
                                ) : (
                                    <video
                                        src={media || question?.mediaUrl}
                                        controls
                                        ref={videoRef}
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
                                    value={text}
                                    className="mt-2"
                                    placeholder="Назва питання..."
                                    onChange={(e) => setText(e.target.value)}
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
