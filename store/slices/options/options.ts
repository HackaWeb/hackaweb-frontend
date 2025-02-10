import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OptionsState } from "./options.types";
import { ChoiceOption } from "@/types/question.interface";

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
            const filtered = state.options.filter(
                (option) => option.id !== action.payload.id,
            );

            return {
                ...state,
                options: [...filtered, action.payload],
            };
        },
        removeOption: (state, action: PayloadAction<number>) => {
            const options = state.options.filter(
                (option) => option.id !== action.payload,
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
