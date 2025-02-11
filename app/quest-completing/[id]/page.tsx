import { getQuestById } from "@/api/quests";
import { getMyProfile } from "@/api/user";
import { QuestCompletingPageComponent } from "@/components/page-components/QuestCompleting";
import { getCookie } from "@/helpers/getCookie";
import { Quest } from "@/types/quest.interface";
import { QuestionWhileTesting } from "@/types/question.interface";
import { redirect } from "next/navigation";

const QuestCompleting = async ({ params }: { params: { id: string } }) => {
    const token = await getCookie("token");
    const questId = params.id;
    let isAuthorized;

    if (!token) {
        redirect("/login");
    }

    try {
        const profileData = await getMyProfile();

        if ("email" in profileData) {
            isAuthorized = true;
        } else {
            isAuthorized = false;
        }
    } catch (error) {
        console.error(error);
        isAuthorized = false;
    }

    if (!isAuthorized) {
        redirect("/login");
    }

    let quest: Quest | null = null;

    try {
        /* quest = await getQuestById(questId); */
        // if not found => notFound()
        console.log(quest);
    } catch (error) {
        console.error(error);
    }

    quest = {
        /* id: string;
                title: string;
                description: string;
                createdAt: string;
                file: string;
                rate: number;
                ownerId: string;
                duration: number;
                questions: [
                    {
                        id: string;
                        title: string;
                        mediaUrl: string;
                        type: number;
                        choiceOptions: [
                            {
                                id: number;
                                title: string;
                                isCorrect: boolean;
                            },
                        ];
                    },
                ];
                leaderboard: LeaderboardUser[]; //Чекаємо Фікс від Сергія
                feedbacks: [
                    {
                        id: string;
                        text: string;
                        rate: number;
                        createdAt: string;
                    },
                ]; */
        id: "1",
        title: "Quest 1",
        description: "Description",
        createdAt: "2022-01-01",
        file: "/test.png",
        rate: 5,
        ownerId: "1",
        duration: 60,
        leaderboard: [],
        feedbacks: [],
        questions: undefined,
    };

    return <QuestCompletingPageComponent quest={quest} />;
};

export default QuestCompleting;
