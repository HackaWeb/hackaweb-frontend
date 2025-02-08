import Link from "next/link";
import React from "react";
import Avatar from "..";
import { AvatarControlsProps } from "./AvatarControls.props";
import Block from "@/components/ui/Block";

export const AvatarControls = ({ avatarParams }: AvatarControlsProps) => {
    return (
        <Block className="pb-4">
            <Avatar {...avatarParams} />
            <Link href="/profile/avatar" className="underline">
                Змінити аватар
            </Link>
        </Block>
    );
};
