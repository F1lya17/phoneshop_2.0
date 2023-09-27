import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filter from "./reducers/filter"
import basket from "./reducers/basket"
import user from "./reducers/user"
import phones from "./reducers/phones"

const rootReducer = combineReducers({
    filter,
    basket,
    user,
    phones
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']