import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState, ModalType } from "./modals.types";

const initialState: ModalState = {
    active: [],
};

const modals = createSlice({
    name: "modals",
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<ModalType>) => {
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

export const { selectModals, selectPrev } = modals.selectors;

export const { toggleModal } = modals.actions;

export default modals.reducer;
