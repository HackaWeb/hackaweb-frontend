import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState, ModalType } from "./modals.types";

const initialState: ModalState = [];

const modals = createSlice({
    name: "modals",
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<ModalType>) => {
            return state.includes(action.payload)
                ? state.filter((m) => m !== action.payload)
                : [...state, action.payload];
        },
    },
    selectors: {
        selectModals: (state) => state,
    },
});

export const { selectModals } = modals.selectors;

export const { toggleModal } = modals.actions;

export default modals.reducer;
