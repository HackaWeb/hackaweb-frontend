"use client";

import { isModalOpened } from "@/helpers/isModalOpened";
import { useAppSelector } from "@/store/hooks/useAppSelector";
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
import {
    selectQuestions,
    setEditingId,
} from "@/store/slices/questions/questions";
import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";
import { IoImageOutline } from "react-icons/io5";
import {
    createQuest,
    uploadQuestionMedia,
    uploadQuestMedia,
} from "@/api/quests";
import { parseQuestionType } from "@/helpers/parseQuestionType";
import { ModalBg } from "../ModalBg";
import { useQuestModals } from "@/hooks/useQuestModals";

export const CreateQuest = () => {
    const {
        media,
        modals,
        onImageUpload,
        onQuestionAddClick,
        onQuestionEditClick,
        questions,
    } = useQuestModals();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [duration, setDuration] = useState<string>("");

    const createQuestHandler = async () => {
        const questMedia = new FormData();
        const file = await fetch(media!).then((r) => r.blob());
        questMedia.append("file", file as File);

        const questBody = {
            title,
            description,
            duration: Number(duration),
            questions: questions.map((question) => {
                return {
                    questionId: question.id,
                    title: question.title,
                    type: parseQuestionType(question.type),
                    options: question.options.map((o) => {
                        return {
                            title: o.title
                                .trim()
                                .replace(" ", "_")
                                .toLowerCase(),
                            isCorrect: o.isCorrect,
                        };
                    }),
                };
            }),
        };

        try {
            const data = await createQuest({ quiz: questBody });
            const { errors } = await uploadQuestMedia(data.id, questMedia);
            for (let question of questions) {
                const questionMedia = new FormData();
                const file = await fetch(question.mediaUrl!).then((r) =>
                    r.blob(),
                );
                questionMedia.append("file", file as File);
                await uploadQuestionMedia(question.id, questionMedia);
            }

            if (errors) console.error(errors);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const onCreateQuestSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (
            !media ||
            !title.length ||
            !Number(duration) ||
            !description.length ||
            !questions.length
        )
            return toast.error("Заповніть коректно усі поля!");

        const data = await createQuestHandler();
        console.log(data);
        toast.success("Квест успішно створено!");
    };

    return (
        isModalOpened("QuestCreation", modals) && (
            <>
                <div className="max-h-[90vh] overflow-y-auto pt-72 absolute left-[50%] -translate-x-[50%] max-w-[700px] w-full top-10 z-10 bg-blue p-6 mx-4 flex flex-col place-content-center place-items-center rounded-lg">
                    <ReturnBtn
                        className="self-start mt-2 mb-10"
                        modal="QuestCreation"
                    />
                    <div className="text-3xl">Створення Квесту</div>
                    <div className="w-full p-4">
                        <div className="relative w-full mt-2">
                            {media ? (
                                <Image
                                    src={media}
                                    alt="Зображення квесту"
                                    className="h-[30rem] aspect-square object-cover"
                                    sizes="100vw"
                                    height={0}
                                    width={0}
                                />
                            ) : (
                                <div className="w-full border-2 border-purple aspect-square flex items-center justify-center">
                                    <BsFillImageFill className="size-20 text-gray" />
                                </div>
                            )}
                            <Input
                                id="picture"
                                type="file"
                                ref={fileInputRef}
                                className="hidden "
                                accept=".png"
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
                                    value={title}
                                    placeholder="Назва квесту..."
                                    onChange={(e) => setTitle(e.target.value)}
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
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    value={description}
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
                                    value={duration}
                                    onChange={(e) =>
                                        setDuration(e.target.value)
                                    }
                                    id="duration"
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-6">
                                <div className="space-y-3">
                                    <span className="text-gray">
                                        Список питань
                                    </span>
                                    {questions.map((question, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-2 place-items-center"
                                        >
                                            {question.fileType === "image" ? (
                                                <figure className="w-14 h-14 place-content-center">
                                                    <Image
                                                        src={question.mediaUrl!}
                                                        alt="question image"
                                                        className="rounded-md "
                                                        sizes="100vw"
                                                        width={0}
                                                        height={0}
                                                    />
                                                </figure>
                                            ) : (
                                                <IoImageOutline size={50} />
                                            )}
                                            <Input
                                                disabled
                                                defaultValue={question.title}
                                            />
                                            <Button
                                                color="purpleBackground"
                                                type="button"
                                                onClick={() =>
                                                    onQuestionEditClick(
                                                        "QuestCreation",
                                                        question.id,
                                                    )
                                                }
                                            >
                                                <FiEdit2 size={20} />
                                            </Button>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    color="yellowBorder"
                                    className="mt-8"
                                    type="button"
                                    onClick={() =>
                                        onQuestionAddClick("QuestCreation")
                                    }
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
