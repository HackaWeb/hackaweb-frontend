"use client";

import { useState } from "react";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { IoTrophyOutline } from "react-icons/io5";
import { LeftColumnProps } from "./LeftColumn.props";
import { getAchievements } from "@/data/getAchievements";
import { RenderRating } from "@/helpers/RenderRating";
import { Button } from "@/components/ui/Button";
import { updateUserProfile, deleteUserProfile } from "@/api/user";
import { toast } from "react-toastify";
import {
    DEFAULT_FIELD_ERROR,
    RequestError,
} from "@/api/responses/common/failure.interface";
import { printToastErrorMessages } from "@/helpers/displayToasts";
import { setCookie } from "@/helpers/setCookie";
import { useRouter } from "next/navigation";

export const LeftColumn = ({ profile }: LeftColumnProps) => {
    const router = useRouter();
    const achievements = getAchievements(profile);

    const [avatar, setAvatar] = useState<string | null>(profile.avatar ?? null);

    const updateAvatarHandler = async (
        imageData: File,
    ): Promise<RequestError[]> => {
        const formData = new FormData();
        formData.append("Avatar", imageData);

        try {
            const data = await updateUserProfile(formData);
            if ("statusCode" in data) {
                return data.statusCode === 400
                    ? data.errors
                    : [{ field: "", message: data.message }];
            } else {
                setAvatar(data.avatarUrl);
                router.refresh();
                toast.success("Аватар успішно змінено!");
                return [];
            }
        } catch (error) {
            console.error(error);
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const deleteAvatarHandler = async () => {
        const body = new FormData();
        body.append("avatar", "");

        try {
            const data = await updateUserProfile(body);

            if ("statusCode" in data) {
                if ("message" in data) {
                    printToastErrorMessages([data.message]);
                }
            } else {
                router.refresh();
                setAvatar(null);
                toast.success("Аватар успішно видалено!");
            }
        } catch (error) {
            console.error(error);
            toast.error(DEFAULT_FIELD_ERROR.message);
        }
    };

    const onAvatarChange = async (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setAvatar(URL.createObjectURL(file));
        const result = await updateAvatarHandler(file);

        if (result.length > 0) {
            printToastErrorMessages(result.map((res) => res.message));
        }
    };

    const deleteProfileHandler = async () => {
        try {
            const data = await deleteUserProfile();
            if ("statusCode" in data && data.statusCode !== 200) {
                return data.errors;
            }
            return [];
        } catch (error) {
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const onProfileDelete = async () => {
        try {
            const result = await deleteProfileHandler();
            if (result.length === 0) {
                toast.success("Ваш профіль успішно видалено!");
                setCookie("token", "");
                router.push("/");

                const timeout = setTimeout(() => {
                    router.refresh();
                    clearTimeout(timeout);
                });
            } else {
                printToastErrorMessages(result.map((res) => res.message));
            }
        } catch (error) {
            toast.error(DEFAULT_FIELD_ERROR.message);
        }
    };

    return (
        <div>
            <div className="p-4 bg-blackOpacity rounded-md">
                <div className="w-full h-auto aspect-square border border-purple rounded-md p-2 relative">
                    <RenderRating
                        rating={profile.rating}
                        className="gap-[6px] absolute top-1 left-1"
                    />
                    <div className="bg-blackOpacity-dark w-full h-full flex items-center justify-center rounded-md overflow-hidden">
                        {avatar ? (
                            <>
                                <Button
                                    className="absolute top-1 right-1 p-1"
                                    onClick={deleteAvatarHandler}
                                    color="redBorder"
                                >
                                    <AiOutlineClose className="size-5" />
                                </Button>
                                <img
                                    src={avatar}
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </>
                        ) : (
                            <AiOutlineUser className="text-purple size-20" />
                        )}
                    </div>
                </div>
                <label className="underline text-purple mt-2 text-center block cursor-pointer">
                    Змінити аватар
                    <input
                        type="file"
                        accept=".png"
                        className="hidden"
                        onChange={onAvatarChange}
                    />
                </label>
                <ul className="mt-6 pb-4 border-b-2 border-b-gray-300 border-opacity-10 flex flex-col justify-start gap-2 relative">
                    {achievements.unlocked.map((achiev, index) => (
                        <li
                            key={index}
                            className="bg-blackOpacity-dark text-yellow border-2 border-purple p-1 rounded-md w-fit inline-block"
                        >
                            {achiev}
                        </li>
                    ))}
                    <IoTrophyOutline className="absolute right-0 bottom-0 text-purple size-8" />
                </ul>
                <ul className="mt-4 flex flex-col gap-2">
                    {achievements.locked.map((achiev, index) => (
                        <li
                            key={index}
                            className="bg-blackOpacity-dark text-yellow border-2 border-purple p-1 opacity-50 text-sm rounded-md w-fit inline-block"
                        >
                            {achiev}
                        </li>
                    ))}
                </ul>
            </div>
            <Button
                className="mt-6 w-full"
                color="redBorder"
                onClick={onProfileDelete}
            >
                Видалити акаунт
            </Button>
        </div>
    );
};
