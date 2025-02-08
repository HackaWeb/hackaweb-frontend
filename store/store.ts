import { configureStore } from "@reduxjs/toolkit";
import modals from "./slices/modals";

export const store = configureStore({
    reducer: { modals },
});
