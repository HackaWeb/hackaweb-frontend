import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditQuest, EditQuestion, EditQuestsState } from "./editQuests.types";
import { ChoiceOption, Question } from "@/types/question.interface";

const initialState: EditQuestsState = {
    editingQuest: null,
    editingQuestion: null,
    editingOptions: null,
};

const editingQuests = createSlice({
    name: "editingQuests",
    initialState,
    reducers: {
        setEditingQuest: (state, action: PayloadAction<EditQuest | null>) => {
            if (!action.payload) return { ...state, editingQuest: null };

            return {
                ...state,
                editingQuest: action.payload,
            };
        },
        setEditingQuestion: (state, action: PayloadAction<string | null>) => {
            if (!action.payload) return { ...state, editingQuestion: null };

            const editingQuestion =
                state.editingQuest?.questions.find(
                    (q) => q.id === action.payload,
                ) || null;

            return {
                ...state,
                editingQuestion,
            };
        },
        setEditingOptions: (
            state,
            action: PayloadAction<ChoiceOption[] | null>,
        ) => {
            if (!action.payload) return { ...state, editingOptions: null };

            const editingOptions = state.editingQuestion!.choiceOptions;

            return {
                ...state,
                editingOptions,
            };
        },
        addQuestion: (state, action: PayloadAction<Question>) => {
            if (state.editingQuest) {
                const questions = [
                    ...state.editingQuest.questions,
                    action.payload,
                ];
                return {
                    ...state,
                    editingQuest: {
                        ...state.editingQuest,
                        questions,
                    },
                };
            }
        },

        editQuestion: (state, action: PayloadAction<EditQuestion>) => {
            if (state.editingQuest) {
                const filtered = state.editingQuest.questions.filter(
                    (q) => q.id === action.payload.id,
                );
                const questions = [...filtered, action.payload.body];

                return {
                    ...state,
                    editingQuest: {
                        ...state.editingQuest,
                        questions,
                    },
                };
            }
        },

        // addOption: (state, action: PayloadAction<Question>) => {
        //     if (state.editingQuest) {
        //         return {
        //             ...state,
        //             editingQuest: {
        //                 ...state.editingQuest,
        //                 questions,
        //             },
        //         };
        //     }
        // },
        // editOption: (state, action: PayloadAction<Question>) => {
        //     if (state.editingQuest) {
        //         const questions = [
        //             ...state.editingQuest.questions,
        //             action.payload,
        //         ];
        //         return {
        //             ...state,
        //             editingQuest: {
        //                 ...state.editingQuest,
        //                 questions,
        //             },
        //         };
        //     }
        // },
    },
    selectors: {
        selectEditingQuest: (state) => state.editingQuest,
        selectEditingQuestion: (state) => state.editingQuestion,
        selectEditingOptions: (state) => state.editingQuestion?.choiceOptions,
    },
});

export const {
    selectEditingQuest,
    selectEditingOptions,
    selectEditingQuestion,
} = editingQuests.selectors;

export const {
    setEditingQuest,
    setEditingQuestion,
    setEditingOptions,
    addQuestion,
    editQuestion,
} = editingQuests.actions;

export default editingQuests.reducer;
