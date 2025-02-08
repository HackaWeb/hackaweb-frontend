import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import Avatar from "..";
import { AvatarControlsProps } from "./AvatarControls.props";
import Achievement from "../../Achievement";
import { TfiCup } from "react-icons/tfi";
import AchievementGroup from "../../Achievement/Group";
import Block from "@/components/ui/Block";

const AvatarControls = ({
    avatarParams,
    recentAchievements,
    upcomingAchievements,
}: AvatarControlsProps) => {
    return (
        <Block className="pb-4">
            <Avatar {...avatarParams} />
            <Link href="/profile/avatar" className="underline">
                Змінити аватар
            </Link>
            <div className="flex flex-col gap-3 w-full">
                <AchievementGroup>
                    {recentAchievements.map((a) => (
                        <Achievement key={a.name} achievement={a} />
                    ))}
                </AchievementGroup>
                <hr />
                <AchievementGroup className="relative">
                    {upcomingAchievements.map((a) => (
                        <Achievement
                            className="text-[6pt] opacity-50"
                            key={a.name}
                            achievement={a}
                        />
                    ))}
                    <TfiCup className="w-4 h-4 text-purple absolute right-2 bottom-2" />
                </AchievementGroup>
            </div>
        </Block>
    );
};

export default AvatarControls;
