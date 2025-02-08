"use client";
import React from "react";
import { IoReturnUpBack, IoTrophyOutline } from "react-icons/io5";
import { Button } from "@/components/ui/Button";
import QuestDashboard from "@/components/page-components/Quest/Dashboard";
import AchievementGroup from "@/components/page-components/MyProfile/Achievement/Group";
import Achievement from "@/components/page-components/MyProfile/Achievement";
import UserQuestsDashboard from "@/components/page-components/Quest/Dashboard/User";
import CompletedQuestsDashboard from "@/components/page-components/Quest/Dashboard/Completed";
import Avatar from "@/components/page-components/MyProfile/Avatar";
import { useRouter } from "next/navigation";
import {
    myQuests,
    questAttempts,
    recentAchievements,
    userName,
} from "@/app/profile/mock";

const UserProfile = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Профіль користувача {userName}</h1>
            <Button
                className="mt-4"
                color="purpleBorder"
                onClick={() => router.back()}
            >
                <IoReturnUpBack /> Повернутися назад
            </Button>
            <div className="flex flex-wrap gap-8 mt-8">
                <div className="flex flex-col gap-8">
                    <Avatar rating={4} />
                    <div className="flex flex-col gap-3 w-full">
                        <AchievementGroup className="relative">
                            {recentAchievements.map((a) => (
                                <Achievement key={a.name} achievement={a} />
                            ))}
                            <IoTrophyOutline className="w-4 h-4 text-purple absolute right-2 bottom-2" />
                        </AchievementGroup>
                        <hr />
                    </div>
                </div>
                <QuestDashboard
                    className="min-w-1/2"
                    myQuests={myQuests}
                    questAttempts={questAttempts}
                    isActionable={false}
                >
                    <UserQuestsDashboard
                        title={`Тести користувача ${userName}`}
                        quests={myQuests}
                        isActionable={false}
                    />
                    <CompletedQuestsDashboard
                        title={`Тести, пройдені користувачем ${userName}`}
                        attempts={questAttempts}
                    />
                </QuestDashboard>
            </div>
        </div>
    );
};

export default UserProfile;
