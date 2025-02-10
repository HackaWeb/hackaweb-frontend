"use client";

import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoTrophyOutline } from "react-icons/io5";
import { LeftColumnProps } from "./LeftColumn.props";
import { getAchievements } from "@/data/getAchievements";
import { RenderRating } from "@/helpers/RenderRating";
import { Button } from "@/components/ui/Button";
import { AiOutlineClose } from "react-icons/ai";
import { deleteUserProfile, updateUserProfile } from "@/api/user";
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

    const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;
        const imageUrl = URL.createObjectURL(file);
        setAvatar(imageUrl);

        const result = await updateAvatar(file);

        if (result.length === 0) {
            toast.success("Аватар завантажено успішно!");
        } else {
            printToastErrorMessages(result.map((res) => res.message));
        }
    };

    const updateAvatar = async (imageData: File): Promise<RequestError[]> => {
        const formData = new FormData();
        formData.append("Avatar", imageData);

        try {
            const data = await updateUserProfile(formData);
            if ("statusCode" in data) {
                if (data.statusCode === 400) {
                    return data.errors;
                } else if (data.statusCode === 401) {
                    return [{ field: "", message: data.message }];
                }
                return [DEFAULT_FIELD_ERROR];
            } else {
                setAvatar(data.avatarUrl);
                return [];
            }
        } catch (error) {
            console.error(error);
            return [DEFAULT_FIELD_ERROR];
        }
    };

    const onDelete = async () => {
        try {
            const result = await deleteProfile();
            if (result.length === 0) {
                toast.success("Ваш профіль успішно видалено!");
                setCookie("token", "");
                router.push("/");
            } else {
                printToastErrorMessages(result.map((res) => res.message));
            }
        } catch (error) {
            console.log(error);
            toast.error(DEFAULT_FIELD_ERROR.message);
        }
    };

    const deleteProfile = async () => {
        const data = await deleteUserProfile({ userId: profile.id });
        console.log(data);
        if ("statusCode" in data) {
            if (data.statusCode === 400) {
                return data.errors;
            } else if (data.statusCode === 200) {
                return [];
            }
            return [DEFAULT_FIELD_ERROR];
        }
        return [];
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
                                    onClick={() => setAvatar(null)}
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
                        accept="image/*"
                        className="hidden"
                        onChange={onFileChange}
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
                onClick={onDelete}
            >
                Видалити акаунт
            </Button>
        </div>
    );
};
