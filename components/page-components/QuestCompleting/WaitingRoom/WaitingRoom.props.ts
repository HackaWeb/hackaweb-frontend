import { Quest } from "@/types/quest.interface";

export interface WaitingRoomProps {
    onStartQuestClick: () => void;
    quest: Quest;
}
