import { Phone } from "@/api/interfacesAoi"
import { createSlice } from "@reduxjs/toolkit"

type initialStateType = {
    phones: Phone[];
}

const initialState: initialStateType = {
    phones: []
}


export const phonesReducer = createSlice({
    name: 'phones',
    initialState,
    reducers: {
        setPhones(state, action) {
            state.phones = action.payload;
        }
    }
})

export default phonesReducer.reducer;