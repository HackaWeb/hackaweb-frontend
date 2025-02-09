import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OptionsState } from "./options.types";
import { ChoiceOption, Question } from "@/types/question.interface";

const initialState: OptionsState = {
    options: [],
};

const options = createSlice({
    name: "options",
    initialState,
    reducers: {
        setOptions: (state, action: PayloadAction<ChoiceOption[]>) => {
            return {
                ...state,
                options: action.payload,
            };
        },
        addOption: (state, action: PayloadAction<ChoiceOption>) => {
            return {
                ...state,
                options: [...state.options, action.payload],
            };
        },
        editOption: (state, action: PayloadAction<ChoiceOption>) => {
            const options = state.options.filter(
                (option) => option.title === action.payload.title,
            );

            return {
                ...state,
                options: [...options, action.payload],
            };
        },
        removeOption: (state, action: PayloadAction<string>) => {
            const options = state.options.filter(
                (o) => o.title !== action.payload,
            );

            return {
                ...state,
                options,
            };
        },
    },
    selectors: {
        selectOptions: (state) => state.options,
    },
});

export const { selectOptions } = options.selectors;

export const { addOption, removeOption, setOptions, editOption } =
    options.actions;

export default options.reducer;
