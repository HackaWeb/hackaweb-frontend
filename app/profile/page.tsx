"use client";
import React from "react";
import { IoReturnUpBack, IoTrophyOutline } from "react-icons/io5";
import { Button } from "@/components/ui/Button";
import AvatarControls from "@/components/page-components/Profile/Avatar/Controls";
import ProfileControls from "@/components/page-components/Profile/Controls";
import QuestDashboard from "@/components/page-components/Quest/Dashboard";
import AchievementGroup from "@/components/page-components/Profile/Achievement/Group";
import {
    myQuests,
    questAttempts,
    recentAchievements,
    upcomingAchievements,
    userEmail,
    userName,
} from "./mock";
import Achievement from "@/components/page-components/Profile/Achievement";
import UserQuestsDashboard from "@/components/page-components/Quest/Dashboard/User";
import CompletedQuestsDashboard from "@/components/page-components/Quest/Dashboard/Completed";
import { useRouter } from "next/navigation";

const HomeProfile = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Мій кабінет</h1>
            <Button
                className="mt-4"
                color="purpleBorder"
                onClick={() => router.back()}
            >
                <IoReturnUpBack /> Повернутися назад
            </Button>
            <div className="flex flex-wrap gap-8 mt-8">
                <div className="flex flex-col gap-8">
                    <AvatarControls
                        avatarParams={{ rating: 4 }}
                        recentAchievements={recentAchievements}
                        upcomingAchievements={upcomingAchievements}
                    />

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
                            <IoTrophyOutline className="w-4 h-4 text-purple absolute right-2 bottom-2" />
                        </AchievementGroup>
                    </div>
                    <Button
                        className="text-red w-full hover:text-white"
                        color="redBorder"
                    >
                        Видалити акаунт
                    </Button>
                </div>
                <ProfileControls
                    defaultEmail={userEmail}
                    defaultName={userName}
                />
                <QuestDashboard
                    className="min-w-1/2"
                    myQuests={myQuests}
                    questAttempts={questAttempts}
                    isActionable={true}
                >
                    <UserQuestsDashboard
                        title="Мої тести"
                        quests={myQuests}
                        isActionable={true}
                    />
                    <CompletedQuestsDashboard
                        title="Пройдені тести"
                        attempts={questAttempts}
                    />
                </QuestDashboard>
            </div>
        </div>
    );
};

export default HomeProfile;
