import Image from "next/image";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AvatarProps } from "./Avatar.props";
import { RenderRating } from "@/helpers/RenderRating";

const Avatar = ({
    image: imagePath,
    imageAlt: imageDescription,
    rating,
}: AvatarProps) => {
    return (
        <div className="relative w-48 h-48 flex justify-center items-center">
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-purple to-blue p-[1px]">
                <div className="w-full h-full bg-opacity-75 bg-black rounded-md flex justify-center items-center">
                    {rating && (
                        <RenderRating
                            className="absolute top-2 left-2"
                            rating={rating}
                        />
                    )}
                    {imagePath ? (
                        <Image
                            className="w-32 h-32"
                            src={imagePath}
                            alt={imageDescription ?? "user's avatar"}
                            width={32}
                            height={32}
                        />
                    ) : (
                        <AiOutlineUser className="w-24 h-24 text-purple" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Avatar;
