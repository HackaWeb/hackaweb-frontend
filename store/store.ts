import { configureStore } from "@reduxjs/toolkit";
import modals from "./slices/modals/modals";
import questions from "./slices/questions/questions";
import options from "./slices/options/options";
import aside from "./slices/aside/aside";

export const store = configureStore({
    reducer: { modals, questions, options, aside },
});
