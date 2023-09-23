import { Brand } from "@/api/interfacesAoi";
import { createSlice } from "@reduxjs/toolkit"

type initialStateType = {
    brand: Brand,
    from: string,
    to: string,
}

const initialState: initialStateType = {
    brand: { id: '-1', name: 'Не выбрано' },
    from: '0',
    to: '200000',
}

export const filterReducer = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setBrand(state, action) {
            state.brand = action.payload;
        },
        setFrom(state, action) {
            state.from = action.payload;
        },
        setTo(state, action) {
            state.to = action.payload;
        }
    }
})

export default filterReducer.reducer;