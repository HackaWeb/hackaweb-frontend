import { UserProfilePageComponent } from "@/components/page-components/UserProfile";
import { Profile } from "@/types/user.interface";
import { getProfile } from "@/api/user";
import { toast } from "react-toastify";
import { DEFAULT_FIELD_ERROR } from "@/api/responses/common/failure.interface";
import { getPathname } from "@/helpers/getPathname";
import { getCookie } from "@/helpers/getCookie";

const defaultProfile: Profile = {
    id: "1",
    email: "testuser@example.com",
    firstName: "Test",
    lastName: "User",
    rating: 5,
    isAdmin: false,
    createdQuests: [
        {
            id: "quest1",
            title: "Adventure in the Forest",
            description: "Explore the mysterious forest and solve puzzles.",
            rating: 4.8,
            file: "/test.png",
            createdAt: "2024-02-08T12:00:00Z",
            owner: {
                id: "1",
                email: "testuser@example.com",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
                avatar: null,
                isAdmin: false,
            },
            leaderboard: [],
            duration: 30,
            reviews: [],
            questions: [],
        },
        {
            id: "quest1",
            title: "Adventure in the Forest",
            description: "Explore the mysterious forest and solve puzzles.",
            rating: 4.8,
            file: "/test.png",
            createdAt: "2024-02-08T12:00:00Z",
            owner: {
                id: "1",
                email: "testuser@example.com",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
                avatar: null,
                isAdmin: false,
            },
            leaderboard: [],
            duration: 30,
            reviews: [],
            questions: [],
        },
        {
            id: "quest1",
            title: "Adventure in the Forest",
            description: "Explore the mysterious forest and solve puzzles.",
            rating: 4.8,
            file: "/test.png",
            createdAt: "2024-02-08T12:00:00Z",
            owner: {
                id: "1",
                email: "testuser@example.com",
                firstName: "Test",
                lastName: "User",
                rating: 4.5,
                avatar: null,
                isAdmin: false,
            },
            leaderboard: [],
            duration: 30,
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
                file: "/test.png",
                createdAt: "2024-02-07T15:00:00Z",
                owner: {
                    id: "2",
                    email: "questowner@example.com",
                    firstName: "Quest",
                    lastName: "Owner",
                    rating: 4.9,
                    avatar: null,
                    isAdmin: false,
                },
                duration: 45,
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
                            isAdmin: false,
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
                isAdmin: false,
            },
        },
    ],
};

const UserProfile = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const token = await getCookie("token");

    let isAdmin = false;
    if (token && token.length) {
        try {
            const profile = await getProfile();
            if (!("statusCode" in profile) && profile.isAdmin) {
                isAdmin = true;
            }
        } catch (error) {
            console.error(error);
            toast.error(DEFAULT_FIELD_ERROR.message);
        }
    }

    return <UserProfilePageComponent id={id} isAdmin={isAdmin} />;
};

export default UserProfile;
