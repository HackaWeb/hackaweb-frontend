import { Feedback } from "@/types/feedback.interface";
import { ChoiceOption, Question } from "@/types/question.interface";
import { User } from "@/types/user.interface";

export interface EditQuestsState {
    editingQuest: EditQuest | null;
    editingQuestion: Question | null;
    editingOptions: ChoiceOption[] | null;
}

export interface EditQuest {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    rate: number;
    imageUrl: string;
    passCount: number;
    duration: number;
    owner: User;
    feedbacks: Feedback[];
    questions: Question[];
}

export interface EditQuestion {
    id: string;
    body: Question;
}
