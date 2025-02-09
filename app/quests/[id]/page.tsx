import { GeneralInfo } from "@/components/page-components/Quest/GeneralInfo";
import { Leaderboard } from "@/components/page-components/Quest/Leaderboard";
import { Reviews } from "@/components/page-components/Quest/Reviews";
import { Button } from "@/components/ui/Button";
import { Quest } from "@/types/quest.interface";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

const quest: Quest = {
    id: "1",
    title: "Quest 1",
    description: "Description 1",
    timesPlayed: 30,
    rating: 4,
    imageUrl: "/test.png",
    owner: {
        id: "1",
        firstName: "Danil",
        lastName: "Diachenko",
        avatar: null,
        email: "danildiachenko23@gmail.com",
        rating: 4.5,
    },
    createdAt: "2021-10-10",
    timeLimit: 60,
    questions: [],
    reviews: [],
};

const leaderboardData = [
    {
        id: 1,
        nickname: "Danil Diachenko",
        avatar: null,
        time: "60 хв.",
        score: "100/100",
    },
    {
        id: 2,
        nickname: "Danil Diachenko",
        avatar: null,
        time: "60 хв.",
        score: "100/100",
    },
    {
        id: 3,
        nickname: "Danil Diachenko",
        avatar: null,
        time: "60 хв.",
        score: "100/100",
    },
];

const QuestDetails = () => {
    return (
        <div>
            <h1>Деталі квесту</h1>
            <Link href="#" className="block mt-4">
                <Button color="purpleBorder">
                    <TbArrowBackUp className="size-6" />
                    <span>Повернутися назад</span>
                </Button>
            </Link>
            <div className="grid grid-cols-[0.4fr_0.6fr] mt-6 gap-8 items-start">
                <div>
                    <GeneralInfo quest={quest} />
                    <Reviews quest={quest} />
                </div>
                <Leaderboard data={leaderboardData} />
            </div>
        </div>
    );
};

export default QuestDetails;
