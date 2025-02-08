import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: QuestionsState = {
    active: [],
};

const questions = createSlice({
    name: "questions",
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<QuestionType>) => {
            const isOpened = state.active.includes(action.payload);

            if (!isOpened)
                return {
                    ...state,
                    active: [...state.active, action.payload],
                };

            const active = state.active.filter((m) => m !== action.payload);
            return { ...state, active, prev: action.payload };
        },
    },
    selectors: {
        selectModals: (state) => state.active,
        selectPrev: (state) => state.prev,
    },
});

export const { selectModals, selectPrev } = questions.selectors;

export const { toggleModal } = questions.actions;

export default questions.reducer;
