"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { Textarea } from "@/components/ui/Textarea";
import { isModalOpened } from "@/helpers/isModalOpened";
import { useQuestModals } from "@/hooks/useQuestModals";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { IoImageOutline } from "react-icons/io5";
import { RiEditLine } from "react-icons/ri";
import { ModalBg } from "../ModalBg";
import { getQuestById } from "@/api/quests";
import { setEditingQuest } from "@/store/slices/quests/editQuests";

function QuestEdit() {
    const {
        dispatch,
        modals,
        onImageUpload,
        onQuestionAddClick,
        onQuestionEditClick,
        quest,
        media,
    } = useQuestModals();

    const [title, setTitle] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [description, setDescription] = useState<string>("");
    const [duration, setDuration] = useState<string>("");

    const getQuest = async (id: string) => {
        const data = await getQuestById(id);
        dispatch(setEditingQuest(data.quiz));

        setTitle(data.quiz.title);
        setDescription(data.quiz.description);
        setDuration(data.quiz.duration.toString());
    };

    useEffect(() => {
        getQuest("f43735d6-5c9c-47ae-b41e-e4774df121f7");
    }, []);

    return (
        isModalOpened("QuestEdit", modals) && (
            <>
                <div className="max-h-[90vh] overflow-y-auto pt-72 absolute left-[50%] -translate-x-[50%] max-w-[700px] w-full top-10 z-10 bg-blue p-6 mx-4 flex flex-col place-content-center place-items-center rounded-lg">
                    <ReturnBtn
                        className="self-start mt-2 mb-10"
                        modal="QuestEdit"
                    />
                    <div className="text-3xl">Редагування Квесту</div>
                    <div className="w-full p-4">
                        <div className="relative w-full mt-2">
                            {media || quest?.imageUrl ? (
                                <Image
                                    src={media || quest?.imageUrl!}
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
                        <form className="w-full mt-6">
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
                                    {quest?.questions.map((question, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-2 place-items-center"
                                        >
                                            {question.mediaUrl &&
                                            question.mediaUrl.includes(
                                                ".png",
                                            ) ? (
                                                <figure className="w-14 h-14 place-content-center">
                                                    <Image
                                                        src={question.mediaUrl}
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
                                                defaultValue={question.text}
                                            />
                                            <Button
                                                color="purpleBackground"
                                                type="button"
                                                onClick={() =>
                                                    onQuestionEditClick(
                                                        "QuestEdit",
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
                                        onQuestionAddClick("QuestEdit")
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
                <ModalBg modal="QuestEdit" />
            </>
        )
    );
}

export default QuestEdit;
