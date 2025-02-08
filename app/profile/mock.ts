import { Achievement } from "@/types/achivement.interface";
import { Attempt } from "@/types/attempt.interface";
import { Quest } from "@/types/quest.interface";

export const recentAchievements: Achievement[] = [
    { name: "1 пройдений тест" },
    { name: "1 створений тест" },
];

export const upcomingAchievements: Achievement[] = [
    { name: "10 пройдених тестів" },
    { name: "10 створених тестів" },
];

export const userName = "Ivan Dutov";
export const userEmail = "dutov.ivan@lll.kpi.ua";
export const myQuests: Quest[] = [
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

export const questAttempts: Attempt[] = [
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
