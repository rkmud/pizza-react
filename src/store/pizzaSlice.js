import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: 'loading'
};

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (params) => {
    const {currentPage, category, sortBy, order, search} = params;
    const response = await axios.get(`https://65831edc02f747c8367b1d4c.mockapi.io/api/pizza/pizzas?page=${currentPage}&limit=8${category}&sortBy=${sortBy}&order=${order}${search}`)
    const { data, headers } = response; 
    return { data, contentLength: headers.get('content-length'), contentType: headers.get('content-type') };
})

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
        state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
        state.items = [];
        console.log(state)
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.status = 'success';
        console.log(action)
        console.log(state)

      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.items = [];
        state.status = 'error';
    });
  },
});

export const {setItems} = pizzaSlice.actions;
export default pizzaSlice.reducer;
