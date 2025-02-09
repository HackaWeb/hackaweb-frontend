import { MyProfilePageComponent } from "@/components/page-components/MyProfile";
import { Profile } from "@/types/user.interface";

const profile: Profile = {
    id: "1",
    email: "testuser@example.com",
    nickname: "TestUser",
    rating: 5,
    questsCompleted: 3,
    createdQuests: [
        {
            id: "quest1",
            title: "Adventure in the Forest",
            description: "Explore the mysterious forest and solve puzzles.",
            rating: 4.8,
            imageUrl: "/quest.png",
            createdAt: "2024-02-08T12:00:00Z",
            owner: {
                id: "1",
                email: "testuser@example.com",
                nickname: "TestUser",
                rating: 4.5,
                avatar: "",
            },
            timesPlayed: 120,
            timeLimit: 30,
            reviews: [],
        },
    ],
    avatar: "",
    completedQuests: [
        {
            id: "quest2",
            title: "Mystery of the Lost Treasure",
            description: "Find the lost treasure hidden deep in the mountains.",
            rating: 4.7,
            imageUrl: "/quest.png",
            createdAt: "2024-02-07T15:00:00Z",
            owner: {
                id: "2",
                email: "questowner@example.com",
                nickname: "QuestMaster",
                rating: 4.9,
                avatar: "",
            },
            timesPlayed: 200,
            timeLimit: 45,
            reviews: [],
            correctness: 85,
        },
        {
            id: "quest3",
            title: "Escape from the Haunted Mansion",
            description: "Solve the clues and escape from the haunted mansion.",
            rating: 4.5,
            imageUrl: "/quest.png",
            createdAt: "2024-02-06T18:00:00Z",
            owner: {
                id: "3",
                email: "hauntedmaster@example.com",
                nickname: "GhostHunter",
                rating: 4.6,
                avatar: "",
            },
            timesPlayed: 150,
            timeLimit: 60,
            reviews: [],
            correctness: 72,
        },
    ],
};

const MyProfile = () => {
    return <MyProfilePageComponent profile={profile} />;
};

export default MyProfile;
