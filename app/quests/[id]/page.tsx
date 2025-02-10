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
    rating: 4,
    file: "/test.png",
    owner: {
        id: "1",
        firstName: "Danil",
        lastName: "Diachenko",
        avatar: null,
        email: "danildiachenko23@gmail.com",
        rating: 4.5,
    },
    createdAt: "2021-10-10",
    duration: 60,
    questions: [],
    reviews: [
        {
            id: "1",
            rating: 4,
            comment: "Good quest",
            createdAt: "2021-10-10",
            author: {
                id: "1",
                firstName: "Danil",
                lastName: "Diachenko",
                avatar: null,
                rating: 4.5,
                email: "",
            },
        },
        {
            id: "2",
            rating: 5,
            comment: "Very good quest",
            createdAt: "2021-10-10",
            author: {
                id: "1",
                firstName: "Danil",
                lastName: "Diachenko",
                avatar: null,
                rating: 4.5,
                email: "",
            },
        },
        {
            id: "1",
            rating: 4,
            comment: "Good quest",
            createdAt: "2021-10-10",
            author: {
                id: "1",
                firstName: "Danil",
                lastName: "Diachenko",
                avatar: null,
                rating: 4.5,
                email: "",
            },
        },
        {
            id: "2",
            rating: 5,
            comment: "Very good quest",
            createdAt: "2021-10-10",
            author: {
                id: "1",
                firstName: "Danil",
                lastName: "Diachenko",
                avatar: null,
                rating: 4.5,
                email: "",
            },
        },
    ],
    leaderboard: [
        {
            user: {
                id: "1",
                email: "",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
                avatar: null,
            },
            accuracy: 90,
            timeSpent: 45,
            dateCompleted: "2024-02-08T15:00:00Z",
        },
        {
            user: {
                id: "1",
                email: "",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
                avatar: null,
            },
            accuracy: 90,
            timeSpent: 45,
            dateCompleted: "2024-02-08T15:00:00Z",
        },
        {
            user: {
                id: "1",
                email: "",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
                avatar: null,
            },
            accuracy: 90,
            timeSpent: 45,
            dateCompleted: "2024-02-08T15:00:00Z",
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
            <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] mt-6 gap-8 items-start">
                <GeneralInfo quest={quest} />
                <div className="grid ">
                    <Leaderboard quest={quest} />
                    <Reviews quest={quest} />
                </div>
            </div>
        </div>
    );
};

export default QuestDetails;
