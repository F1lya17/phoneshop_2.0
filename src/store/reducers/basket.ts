import { Brand, Phone, BasketPhone } from "@/api/interfacesAoi";
import { createSlice } from "@reduxjs/toolkit"

type initialStateType = {
    basketArray: BasketPhone[],
    totalCount: number,
    totalPrice: number
}

const initialState: initialStateType = {
    basketArray: [],
    totalCount: 0,
    totalPrice: 0
}

function phoneIndex(basketArray: BasketPhone[], phone: Phone): number {
    for (let i = 0; i < basketArray.length; i++) {
        if (basketArray[i].id === phone.id) {
            return i;
        }
    }
    return -1;
}

export const basketReducer = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addPhone(state, action) {
            let index = phoneIndex(state.basketArray, action.payload);
            if (index > -1) {
                state.basketArray[index].count++;
            }
            else {
                state.basketArray.push({ ...action.payload, count: 1 })
            }
            state.totalCount++;
            state.totalPrice += action.payload.price;
        },
        changeCount(state, action) {
            let index = phoneIndex(state.basketArray, action.payload.phone);
            if (state.basketArray[index].count === 1 && action.payload.count === -1) {
                state.basketArray.splice(index, 1);
            }
            else {
                state.basketArray[index].count += action.payload.count;
                state.totalCount += action.payload.count;
                state.totalPrice += state.basketArray[index].price * action.payload.count;
            }
        },
        removePhone(state, action) {
            let index = phoneIndex(state.basketArray, action.payload);
            state.totalCount -= state.basketArray[index].count;
            state.totalPrice -= state.basketArray[index].price * state.basketArray[index].count;
            state.basketArray.splice(index, 1);
        }
    }
})

export default basketReducer.reducer;