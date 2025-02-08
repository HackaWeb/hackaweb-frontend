"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { ReduxProps } from "./Redux.props";

export const ReduxProvider = ({ children }: ReduxProps) => {
    return <Provider store={store}>{children}</Provider>;
};
