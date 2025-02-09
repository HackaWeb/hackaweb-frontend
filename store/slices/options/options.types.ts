import { ChoiceOption } from "@/types/question.interface";

export type OptionsState = {
    options: ChoiceOption[];
};

export interface EditOption extends ChoiceOption {
    index: number;
}
