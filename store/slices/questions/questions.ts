import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionsState } from "./questions.types";
import { Question } from "@/types/question.interface";

const initialState: QuestionsState = {
    questions: [],
    currentEditingId: null,
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

        editQuestion: (state, action: PayloadAction<Question>) => {
            const filtered = state.questions.filter(
                (question) => question.id !== action.payload.id,
            );

            return {
                ...state,
                questions: [...filtered, action.payload],
            };
        },

        setEditingId: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                ...state.questions,
                currentEditingId: action.payload,
            };
        },
    },
    selectors: {
        selectQuestions: (state) => state.questions,
        selectEditingQuestion: (state) =>
            state.currentEditingId
                ? state.questions.find((q) => q.id === state.currentEditingId)
                : null,
    },
});

export const { selectQuestions, selectEditingQuestion } = questions.selectors;

export const { addQuestion, setEditingId, editQuestion } = questions.actions;

export default questions.reducer;
