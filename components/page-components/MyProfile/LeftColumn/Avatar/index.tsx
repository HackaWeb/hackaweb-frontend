import Image from "next/image";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AvatarProps } from "./Avatar.props";
import { RenderRating } from "@/helpers/RenderRating";
import Link from "next/link";

export const Avatar = ({ profile }: AvatarProps) => {
    return (
        <div className="pb-4">
            <div className="relative w-full aspect-square flex justify-center items-center border-purple border rounded-md p-2">
                <div className="w-full h-full bg-opacity-75 bg-blackOpacity-dark rounded-md flex justify-center items-center">
                    <RenderRating
                        className="absolute top-2 left-2 gap-[6px]"
                        rating={profile.rating}
                    />
                    {profile.avatar ? (
                        <Image
                            className="w-32 h-32"
                            src={profile.avatar}
                            alt={profile.nickname}
                            width={32}
                            height={32}
                        />
                    ) : (
                        <AiOutlineUser className="w-24 h-24 text-purple" />
                    )}
                </div>
            </div>
            <Link href="/profile/avatar" className="underline mt-2 block">
                Змінити аватар
            </Link>
        </div>
    );
};
