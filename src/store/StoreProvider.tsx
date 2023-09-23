"use client";

import { FunctionComponent, ReactNode } from "react";
import { Provider } from "react-redux";
import { setupStore } from "./store";

interface StoreProviderProps {
    children?: ReactNode
};

export const StoreProvider: FunctionComponent<StoreProviderProps> = ({ children }): ReactNode => {
    return (
        <Provider store={setupStore()}>
            {children}
        </Provider>
    )
}