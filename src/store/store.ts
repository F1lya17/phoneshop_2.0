import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filter from "./reducers/filter"

const rootReducer = combineReducers({
    filter
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']