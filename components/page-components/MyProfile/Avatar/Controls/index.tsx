import Link from "next/link";
import React from "react";
import Avatar from "..";
import { AvatarControlsProps } from "./AvatarControls.props";

export const AvatarControls = ({ avatarParams }: AvatarControlsProps) => {
    return (
        <div className="pb-4">
            <Avatar {...avatarParams} />
            <Link href="/profile/avatar" className="underline mt-2 block">
                Змінити аватар
            </Link>
        </div>
    );
};
