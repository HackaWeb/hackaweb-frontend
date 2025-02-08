import { CompletingType } from "@/types/completingType.type";

export interface WaitingRoomProps {
    completingType: CompletingType;
    onStartQuestClick: () => void;
}
