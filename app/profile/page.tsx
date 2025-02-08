import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
import Avatar from "@/components/page-components/Profile/Avatar";
import { Button } from "@/components/ui/Button";
import AvatarControls from "@/components/page-components/Profile/Avatar/Controls";
import { Achievement } from "@/types/achivement.interface";
import ProfileControls from "@/components/page-components/Profile/Controls";
import QuestDashboard from "@/components/page-components/Quest/Dashboard";
import { Quest } from "@/types/quest.interface";
import { Attempt } from "@/types/attempt.interface";

const recentAchievements: Achievement[] = [
    { name: "1 пройдений тест" },
    { name: "1 створений тест" },
];

const upcomingAchievements: Achievement[] = [
    { name: "10 пройдених тестів" },
    { name: "10 створених тестів" },
];

const userName = "Ivan Dutov";
const userEmail = "dutov.ivan@lll.kpi.ua";
const myQuests: Quest[] = [
    {
        id: "1",
        title: "Quest 1",
        description: "Description 1",
        timesPlayed: 30,
        rating: 4,
        imageUrl: "/test.png",
        owner: {
            id: "1",
            nickname: "Danil Diachenko",
            email: "danildiachenko23@gmail.com",
            rating: 4.5,
        },
        createdAt: "2021-10-10",
        timeLimit: 60,
    },
    {
        id: "2",
        title: "Quest 2",
        description: "Description 1",
        timesPlayed: 30,
        rating: 4,
        imageUrl: "/test.png",
        owner: {
            id: "1",
            nickname: "Danil Diachenko",
            email: "danildiachenko23@gmail.com",
            rating: 4.5,
        },
        createdAt: "2021-10-10",
        timeLimit: 60,
    },
    {
        id: "3",
        title: "Quest 3",
        description: "Description 1",
        timesPlayed: 30,
        rating: 4,
        imageUrl: "/test.png",
        owner: {
            id: "1",
            nickname: "Danil Diachenko",
            email: "danildiachenko23@gmail.com",
            rating: 4.5,
        },
        createdAt: "2021-10-10",
        timeLimit: 60,
    },
];

const questAttempts: Attempt[] = [
    {
        questId: "3",
        questTitle: "Quest 3",
        questImageUrl: "/test.png",
        mark: 88,
        maxMark: 100,
        lastPlayedTime: "2021-10-10",
        status: "Пройдено",
    },
];

const HomeProfile = () => {
    return (
        <div>
            <h1>Мій кабінет</h1>
            <Button className="mt-4" color="purpleBorder">
                <IoReturnUpBack /> Повернутися назад
            </Button>
            <div className="flex flex-wrap gap-8 mt-8">
                <AvatarControls
                    avatarParams={{ rating: 4 }}
                    recentAchievements={recentAchievements}
                    upcomingAchievements={upcomingAchievements}
                />
                <ProfileControls
                    defaultEmail={userEmail}
                    defaultName={userName}
                />
                <QuestDashboard
                    className="min-w-1/2"
                    myQuests={myQuests}
                    questAttempts={questAttempts}
                />
            </div>
        </div>
    );
};

export default HomeProfile;
