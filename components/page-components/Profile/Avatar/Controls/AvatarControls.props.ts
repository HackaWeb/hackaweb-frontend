import { Achievement } from "@/types/achivement.interface";
import { AvatarProps } from "../Avatar.props";

export interface AvatarControlsProps {
    avatarParams: AvatarProps;
    recentAchievements: Achievement[];
    upcomingAchievements: Achievement[];
}
