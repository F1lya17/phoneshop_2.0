import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import filter from "./reducers/filter"
import basket from "./reducers/basket"
import user from "./reducers/user"
import { reviewAPI } from "@/services/ReviewService";

const rootReducer = combineReducers({
    filter,
    basket,
    user,
    [reviewAPI.reducerPath]: reviewAPI.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reviewAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']