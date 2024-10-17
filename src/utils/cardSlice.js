import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action)=>{

            // Vanialla (older) Redux => Don't Mutate State 
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;
            state.items.push(action.payload);
        },
        removeItem:(state) => {
            state.items.pop();
        },
        clearCard : (state)=>{
            state.items.length = 0;
        },
    },
});

export const {addItem , removeItem , clearCard} = cardSlice.actions;


export default cardSlice.reducer;