import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    AddItem: (state, action) => {
      let existItem = state.items.find((item) => item.id === action.payload.id)
      if (existItem) {
        state.items = state.items.map((item) => 
          item.id === action.payload.id ? {...item, qty: item.qty + 1} : item
        )
      } else {
        state.items.push(action.payload)
      }
    },
    RemoveItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    InrementQty: (state, action) => {
      state.items = state.items.map((item) => 
        item.id === action.payload ? {...item, qty: item.qty + 1} : item
      )
    },
    DecrementQty: (state, action) => {
      state.items = state.items.map((item) => 
        item.id === action.payload ? {...item, qty: item.qty - 1} : item
      )
    },
  }
})

export const {AddItem, RemoveItem, InrementQty, DecrementQty} = cartSlice.actions
export default cartSlice.reducer