import { Profile } from "@/types/user.interface";

export const getAchievements = (profile: Profile) => {
    const possibleAchievements = [
        { name: "Топ рейтинг", condition: profile.rating >= 5 },
        { name: "Квестер", condition: profile.questsCompleted >= 10 },
        {
            name: "Майстер квестів",
            condition: profile.createdQuests.length >= 5,
        },
        {
            name: "Рекордсмен",
            condition: profile.completedQuests.some((q) => q.correctness >= 90),
        },
        { name: "Дослідник", condition: profile.completedQuests.length >= 5 },
    ];

    const unlockedAchievements = possibleAchievements
        .filter((ach) => ach.condition)
        .map((ach) => ach.name);

    const lockedAchievements = possibleAchievements
        .filter((ach) => !ach.condition)
        .map((ach) => ach.name);

    return { unlocked: unlockedAchievements, locked: lockedAchievements };
};
