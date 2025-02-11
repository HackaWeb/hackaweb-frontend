import { configureStore } from "@reduxjs/toolkit";
import modals from "./slices/modals/modals";
import aside from "./slices/aside/aside";
import editingQuests from "./slices/quests/editQuests";

export const store = configureStore({
    reducer: { modals, aside, editingQuests },
});
