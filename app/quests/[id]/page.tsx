import { GeneralInfo } from "@/components/page-components/Quest/GeneralInfo";
import { Leaderboard } from "@/components/page-components/Quest/Leaderboard";
import { Reviews } from "@/components/page-components/Quest/Reviews";
import { Quest } from "@/types/quest.interface";

const quest: Quest = {
    id: "1",
    title: "Quest 1",
    description: "Description 1",
    timesPlayed: 30,
    rating: 4,
    imageUrl: "/quest.png",
    owner: {
        id: "1",
        nickname: "Danil Diachenko",
        email: "danildiachenko23@gmail.com",
        rating: 4.5,
    },
    createdAt: "2021-10-10",
    timeLimit: 60,
};

const QuestDetails = () => {
    return (
        <div>
            <h1>Деталі квесту</h1>
            <div className="grid grid-cols-[0.33fr_0.66fr]">
                <div>
                    <GeneralInfo quest={quest} />
                    <Reviews quest={quest} />
                </div>
                <Leaderboard />
            </div>
        </div>
    );
};

export default QuestDetails;
