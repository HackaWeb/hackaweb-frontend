import { Quest } from "@/types/quest.interface";
import { Profile } from "@/types/user.interface";

export interface LeftColumnProps {
    profile: Profile;
    isEditable: boolean;
    completedQuests: Quest[];
    ownQuests: Quest[];
}
