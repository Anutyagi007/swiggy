import { createSlice } from "@reduxjs/toolkit";


const CartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items=[];
        },
        removeItem:(state,action)=>{
            state.items.pop(action.payload);
        }

    }
})
export const {addItem,clearCart,removeItem}=CartSlice.actions;
export default CartSlice.reducer;
