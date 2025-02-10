import { getProfile } from "@/api/user";
import { MyProfilePageComponent } from "@/components/page-components/MyProfile";
import { getCookie } from "@/helpers/getCookie";
import { Profile } from "@/types/user.interface";
import { redirect } from "next/navigation";

/* const defaultProfile: Profile = {
    id: "1",
    email: "testuser@example.com",
    firstName: "Test",
    lastName: "User",
    rating: 5,
    createdQuests: [
        {
            id: "quest1",
            title: "Adventure in the Forest",
            description: "Explore the mysterious forest and solve puzzles.",
            rating: 4.8,
            imageUrl: "/test.png",
            createdAt: "2024-02-08T12:00:00Z",
            owner: {
                id: "1",
                email: "testuser@example.com",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
                avatar: null,
            },
            leaderboard: [],
            timeLimit: 30,
            reviews: [],
            questions: [],
        },
        {
            id: "quest1",
            title: "Adventure in the Forest",
            description: "Explore the mysterious forest and solve puzzles.",
            rating: 4.8,
            imageUrl: "/test.png",
            createdAt: "2024-02-08T12:00:00Z",
            owner: {
                id: "1",
                email: "testuser@example.com",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
                avatar: null,
            },
            leaderboard: [],
            timeLimit: 30,
            reviews: [],
            questions: [],
        },
        {
            id: "quest1",
            title: "Adventure in the Forest",
            description: "Explore the mysterious forest and solve puzzles.",
            rating: 4.8,
            imageUrl: "/test.png",
            createdAt: "2024-02-08T12:00:00Z",
            owner: {
                id: "1",
                email: "testuser@example.com",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
                avatar: null,
            },
            leaderboard: [],
            timeLimit: 30,
            reviews: [],
            questions: [],
        },
    ],
    avatar: null,
    completedQuests: [
        {
            quest: {
                id: "quest2",
                title: "Mystery of the Lost Treasure",
                description:
                    "Find the lost treasure hidden deep in the mountains.",
                rating: 4.7,
                imageUrl: "/test.png",
                createdAt: "2024-02-07T15:00:00Z",
                owner: {
                    id: "2",
                    email: "questowner@example.com",
                    firstName: "Quest",
                    lastName: "Owner",
                    rating: 4.9,
                    avatar: null,
                },
                timeLimit: 45,
                reviews: [],
                questions: [],
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
                ],
            },
            accuracy: 90,
            dateCompleted: "2024-02-08T15:00:00Z",
            timeSpent: 45,
            user: {
                id: "1",
                avatar: null,
                email: "",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
            },
        },
    ],
}; */

const MyProfile = async () => {
    const token = await getCookie("token");
    let profile: Profile | null = null;

    if (!token) {
        profile = null;
    }
    try {
        const data = await getProfile();

        if ("statusCode" in data) {
            redirect("/login");
            /* profile = defaultProfile; */
        } else {
            profile = { ...data, createdQuests: [], completedQuests: [] };
        }

        /* console.log(profile); */
    } catch (error) {
        console.error(error);
        redirect("/login");
    }

    return <MyProfilePageComponent profile={profile} />;
};

export default MyProfile;
