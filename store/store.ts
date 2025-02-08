import { configureStore } from "@reduxjs/toolkit";
import modals from "./slices/modals/modals";

export const store = configureStore({
    reducer: { modals },
});
