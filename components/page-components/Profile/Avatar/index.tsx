import Rating from "@/components/common/Rating";
import Image from "next/image";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AvatarProps } from "./Avatar.props";

const Avatar = ({
    image: imagePath,
    imageAlt: imageDescription,
    rating,
}: AvatarProps) => {
    return (
        <div className="border border-purple w-48 h-48 rounded-md flex justify-center items-center relative">
            {rating && (
                <Rating className="absolute top-1 left-1" rating={rating} />
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
    );
};

export default Avatar;
