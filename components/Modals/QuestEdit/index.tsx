"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ReturnBtn } from "@/components/ui/ReturnBtn";
import { Textarea } from "@/components/ui/Textarea";
import { isModalOpened } from "@/helpers/isModalOpened";
import { useQuestModals } from "@/hooks/useQuestModals";
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { IoImageOutline } from "react-icons/io5";
import { RiEditLine } from "react-icons/ri";
import { ModalBg } from "../ModalBg";
import {
    deleteQuestion,
    editQuest,
    editQuestion,
    uploadQuestionMedia,
    uploadQuestMedia,
} from "@/api/quests";
import { EditQuestBody } from "@/api/requestBodies/quests.interface";
import { toast } from "react-toastify";
import { toggleModal } from "@/store/slices/modals/modals";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

function QuestEdit() {
    const router = useRouter();

    const {
        modals,
        onImageUpload,
        onQuestionAddClick,
        onQuestionEditClick,
        quest,
        media,
        questions,
        dispatch,
        removedQuestions,
        deleteQuestionHandler,
    } = useQuestModals();
    const [title, setTitle] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [description, setDescription] = useState<string>("");
    const [duration, setDuration] = useState<string>("");

    const editQuestHandler = async () => {
        if (!questions) return;

        const questBody: EditQuestBody = {
            title,
            description,
            duration: Number(duration),
        };

        try {
            //Upload Quest
            const data = await editQuest(quest!.id, questBody);

            if (media) {
                const questMedia = new FormData();
                const file = await fetch(media!).then((r) => r.blob());
                questMedia.append("file", file as File);

                await uploadQuestMedia(data.id, questMedia);
            }

            //Upload Questions
            for (let question of questions) {
                await editQuestion(question.id, {
                    text: question.text,
                    type: question.type,
                });

                //Upload Media(if available)
                if (question.mediaUrl) {
                    const questionMedia = new FormData();
                    const file = await fetch(question.mediaUrl!).then((r) =>
                        r.blob(),
                    );
                    questionMedia.append("file", file as File);
                    await uploadQuestionMedia(question.id, questionMedia);
                }
            }

            //Remove Questions(if available)
            if (removedQuestions) {
                for (let id of removedQuestions) {
                    await deleteQuestion(id);
                }
            }

            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const onEditQuestSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (
            (!media && !quest?.imageUrl) ||
            !title.length ||
            !Number(duration) ||
            !description.length ||
            !questions?.length
        )
            return toast.error("Заповніть коректно усі поля!");

        const data = await editQuestHandler();
        router.refresh();
        console.log(data);
        toast.success("Квест успішно відредаговано!");
        dispatch(toggleModal("QuestEdit"));
    };

    useEffect(() => {
        if (!quest) return;

        setTitle(quest.title);
        setDescription(quest.description);
        setDuration(quest.duration.toString());
    }, [quest]);

    return (
        isModalOpened("QuestEdit", modals) && (
            <>
                <div className="max-h-[95vh] overflow-y-auto pt-4 fixed left-[50%] -translate-x-[50%] md:max-w-[700px] w-[95%] md:w-full md:top-10 top-4 z-10 bg-blue sm:p-6 flex flex-col rounded-lg bottom-4">
                    <ReturnBtn
                        className="self-start mt-2 mb-10 ml-2 sm:ml-4"
                        modal="QuestEdit"
                    />
                    <div className="text-xl sm:text-3xl text-center">
                        Редагування Квесту
                    </div>
                    <div className="w-full p-4">
                        <div className="relative w-full mt-2">
                            {media || quest?.imageUrl ? (
                                <Image
                                    src={media || quest?.imageUrl!}
                                    alt="Зображення квесту"
                                    className="w-full aspect-square object-cover"
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
                                <RiEditLine className="size-4 sm:size-8" />
                            </Button>
                        </div>
                        <form
                            className="w-full mt-6"
                            onSubmit={onEditQuestSubmit}
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
                                    {questions?.map((question, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-2 place-items-center"
                                        >
                                            {(question.mediaUrl &&
                                                question.mediaUrl.includes(
                                                    ".png",
                                                )) ||
                                            question.fileType === "image" ? (
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
                                            <Button
                                                color="redBorder"
                                                className="bg-red"
                                                type="button"
                                                onClick={() =>
                                                    deleteQuestionHandler(
                                                        question.id,
                                                    )
                                                }
                                            >
                                                <FaRegTrashAlt
                                                    size={20}
                                                    color="white"
                                                />
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
