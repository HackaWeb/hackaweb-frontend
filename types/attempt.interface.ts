export interface Attempt {
    questId: string;
    questTitle: string;
    questImageUrl: string;
    mark: number;
    maxMark: number;
    lastPlayedTime: string;
    status: "Пройдено" | "В процесі" | "Не почато";
}
