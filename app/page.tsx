import { getQuests } from "@/api/quests";
import { HomePageComponent } from "@/components/page-components/Home";
import { Quest } from "@/types/quest.interface";

const serverQuests: Quest[] = [
    {
        id: "1",
        title: "Квест 1",
        description: "Опис квесту 1",
        rate: 4.5,
        imageUrl: "/test.png",
        createdAt: "2022-01-01",
        owner: {
            id: "1",
            email: "danildiachenko23@gmail.com",
            firstName: "Danil",
            lastName: "Diachenko",
            avatar: null,
            rating: 4.5,
            isAdmin: false,
        },
        duration: 60,
        feedbacks: [],
        questions: [],
        leaderboard: [],
    },
    {
        id: "2",
        title: "Квест 2",
        description: "Опис квесту 2",
        rate: 4.5,
        imageUrl: "/test.png",
        createdAt: "2022-01-01",
        owner: {
            id: "1",
            email: "danildiachenko23@gmail.com",
            firstName: "Danil",
            lastName: "Diachenko",
            avatar: null,
            rating: 4.5,
            isAdmin: false,
        },
        duration: 60,
        feedbacks: [],
        questions: [],
        leaderboard: [],
    },
    {
        id: "3",
        title: "Квест 3",
        description: "Опис квесту 3",
        rate: 4.5,
        imageUrl: "/test.png",
        createdAt: "2022-01-01",
        owner: {
            id: "1",
            email: "danildiachenko23@gmail.com",
            firstName: "Danil",
            lastName: "Diachenko",
            avatar: null,
            rating: 4.5,
            isAdmin: false,
        },
        duration: 60,
        feedbacks: [],
        questions: [],
        leaderboard: [],
    },
    {
        id: "4",
        title: "Квест 4",
        description: "Опис квесту 4",
        rate: 4.5,
        imageUrl: "/test.png",
        createdAt: "2022-01-01",
        owner: {
            id: "1",
            email: "danildiachenko23@gmail.com",
            firstName: "Danil",
            lastName: "Diachenko",
            avatar: null,
            rating: 4.5,
            isAdmin: false,
        },
        duration: 60,
        feedbacks: [],
        questions: [],
        leaderboard: [],
    },
    {
        id: "5",
        title: "Квест 5",
        description: "Опис квесту 5",
        rate: 4.5,
        imageUrl: "/test.png",
        createdAt: "2022-01-01",
        owner: {
            id: "1",
            email: "danildiachenko23@gmail.com",
            firstName: "Danil",
            lastName: "Diachenko",
            avatar: null,
            rating: 4.5,
            isAdmin: false,
        },
        duration: 60,
        feedbacks: [],
        questions: [],
        leaderboard: [],
    },
    {
        id: "6",
        title: "Квест 6",
        description: "Опис квесту 6",
        rate: 4.5,
        imageUrl: "/test.png",
        createdAt: "2022-01-01",
        owner: {
            id: "1",
            email: "danildiachenko23@gmail.com",
            firstName: "Danil",
            lastName: "Diachenko",
            avatar: null,
            rating: 4.5,
            isAdmin: false,
        },
        duration: 60,
        feedbacks: [],
        questions: [],
        leaderboard: [],
    },
];

const Home = async () => {
    let quests: Quest[] = [];

    try {
        const response = await getQuests();

        if (response.quizzes) {
            quests = response.quizzes;
        }
    } catch (error) {
        console.log(error);
    }

    return <HomePageComponent serverQuests={serverQuests} />;
};

export default Home;
