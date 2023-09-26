import { createSlice } from "@reduxjs/toolkit"

type initialStateType = {
    email: string,
    isAuth: boolean
}

const initialState: initialStateType = {
    email: '',
    isAuth: false,
}


export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.isAuth = true;
        },
        logout(state) {
            state.email = '';
            state.isAuth = false;
        }
    }
})

export default userReducer.reducer;