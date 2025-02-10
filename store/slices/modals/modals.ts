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

            if (!isOpened) {
                return {
                    ...state,
                    active: [...state.active, action.payload],
                };
            }

            const active = state.active.filter((m) => m !== action.payload);
            return { ...state, active, prev: action.payload };
        },
        setDeletingInfo: (
            state,
            action: PayloadAction<
                { title: string; callback: () => void } | undefined
            >,
        ) => {
            state.deletingInfo = action.payload;
        },
    },
    selectors: {
        selectModals: (state) => state.active,
        selectPrev: (state) => state.prev,
        selectDeletingInfo: (state) => state.deletingInfo,
    },
});

export const { selectModals, selectPrev, selectDeletingInfo } = modals.selectors;
export const { toggleModal, setDeletingInfo } = modals.actions;

export default modals.reducer;
