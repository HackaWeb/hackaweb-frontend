import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
import Avatar from "@/components/page-components/Profile/Avatar";
import { Button } from "@/components/ui/Button";
import AvatarControls from "@/components/page-components/Profile/Avatar/Controls";
import { Achievement } from "@/types/achivement.interface";

const recentAchievements: Achievement[] = [
    { name: "1 пройдений тест" },
    { name: "1 створений тест" },
];

const upcomingAchievements: Achievement[] = [
    { name: "10 пройдених тестів" },
    { name: "10 створених тестів" },
];

const HomeProfile = () => {
    return (
        <div>
            <h1>Мій кабінет</h1>
            <Button className="mt-4" color="purpleBorder">
                <IoReturnUpBack /> Повернутися назад
            </Button>
            <AvatarControls
                avatarParams={{ rating: 4 }}
                recentAchievements={recentAchievements}
                upcomingAchievements={upcomingAchievements}
            />
        </div>
    );
};

export default HomeProfile;
