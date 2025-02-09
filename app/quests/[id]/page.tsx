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
    finishers: [
        {
            id: "1dsar23gfdgfd",
            firstName: "Danil",
            lastName: "Diachenko",
            avatar: null,
            time: 60,
            score: 100,
            email: "danildiachenko23@gmail.com",
            rating: 4.5,
        },
        {
            id: "131gfdg43rgfd",
            firstName: "Danil",
            lastName: "Diachenko",
            avatar: null,
            time: 60,
            score: 90,
            email: "danildiachenko23@gmail.com",
            rating: 4.5,
        },
        {
            id: "1fgd24rfgd",
            firstName: "Danil",
            lastName: "Diachenko",
            avatar: null,
            time: 60,
            score: 80,
            email: "danildiachenko23@gmail.com",
            rating: 4.5,
        },
    ],
};

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
                <Leaderboard quest={quest} />
            </div>
        </div>
    );
};

export default QuestDetails;
