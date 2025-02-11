import { PageProps } from "@/.next/types/app/page";
import { getLeaderboardByQuestId } from "@/api/leaderboard";
import { getQuestById } from "@/api/quests";
import { GeneralInfo } from "@/components/page-components/Quest/GeneralInfo";
import { Leaderboard } from "@/components/page-components/Quest/Leaderboard";
import { Reviews } from "@/components/page-components/Quest/Reviews";
import { Button } from "@/components/ui/Button";
import { LeaderboardUser, Quest } from "@/types/quest.interface";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TbArrowBackUp } from "react-icons/tb";

const QuestDetails = async ({ params }: PageProps) => {
    const questId = (await params).id;
    let quest: Quest | null = null;
    let leaderboard: LeaderboardUser[] = [];

    try {
        const response = await getQuestById(questId);

        if (response.quiz) {
            quest = response.quiz;
            console.log(quest);
        }
    } catch (error) {
        console.log(error);
        notFound();
    }

    if (!quest) {
        notFound();
    }

    if (quest) {
        try {
            const response = await getLeaderboardByQuestId(questId);
            if ("error" in response) {
                console.log(response.error);
                return;
            }

            leaderboard = response;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Деталі квесту</h1>
            <Link href="#" className="block mt-4">
                <Button color="purpleBorder">
                    <TbArrowBackUp className="size-6" />
                    <span>Повернутися назад</span>
                </Button>
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] mt-6 gap-8 items-start">
                <GeneralInfo quest={quest} timesPlayed={0} />
                <div className="grid ">
                    <Leaderboard
                        leaderboard={leaderboard}
                        questDuration={quest.duration}
                    />
                    <Reviews quest={quest} />
                </div>
            </div>
        </div>
    );
};

export default QuestDetails;
