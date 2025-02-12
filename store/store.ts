import { configureStore } from "@reduxjs/toolkit";
import modals from "./slices/modals/modals";
import quests from "./slices/quests/quests";
import aside from "./slices/aside/aside";

export const store = configureStore({
    reducer: { modals, aside, quests },
});
