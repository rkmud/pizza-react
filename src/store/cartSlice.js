import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../utils/getCartFromLS";
import { calcTotalPrice } from "../utils/calcTotalPrice";
import { calcTotalCount } from "../utils/calcCount";
const {item, totalPrice, totalCount} = getCartFromLS();
const initialState = {
    totalPrice,
    item,
    totalCount,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
     addItem(state, action) {
        const findItem = state.item.find(obj => {
            return obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type
        })
        if(findItem) {
            findItem.count++;
        } else {
            state.item.push({
                key: state.item.length,
                ...action.payload,
                count: 1,
            });
        }
        state.totalPrice = calcTotalPrice(state.item);
        state.totalCount = calcTotalCount(state.item)
       
     },
     minusItem(state, action) {
        const findItem = state.item.find(obj => {
            return obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type
        });
        if(findItem) {
            findItem.count--;
            state.totalPrice = calcTotalPrice(state.item);
            state.totalCount = calcTotalCount(state.item)
        }
     } ,
     removeItem(state, action) {
        console.log(action)
        const findItem = state.item.find(obj => {
            return obj.id === action.payload.id && obj.size === action.payload.size && obj.type === action.payload.type;
          });
        
          if (findItem) {
            const index = state.item.indexOf(findItem);
            state.item.splice(index, 1);
          }
        state.totalPrice = calcTotalPrice(state.item);
        state.totalCount = calcTotalCount(state.item)
     },
     clearItem(state) {
        state.item = [];
        state.totalPrice = 0;
        state.totalCount = 0;
     },
   
  },
});

export const selectCart = (state) => state.cart;
export const { addItem, removeItem, clearItem, minusItem} = cartSlice.actions;
export default cartSlice.reducer;
