import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionsState } from "./questions.types";
import { Question } from "@/types/question.interface";

const initialState: QuestionsState = {
    questions: [],
};

const questions = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addQuestion: (state, action: PayloadAction<Question>) => {
            return {
                ...state,
                questions: [...state.questions, action.payload],
            };
        },
    },
    selectors: {
        selectQuestions: (state) => state.questions,
    },
});

export const { selectQuestions } = questions.selectors;

export const { addQuestion } = questions.actions;

export default questions.reducer;
