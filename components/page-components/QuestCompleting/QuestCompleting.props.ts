import { Quest } from "@/types/quest.interface";
import { Profile } from "@/types/user.interface";

export interface QuestCompletingProps {
    quest: Quest;
    user: Profile;
}
