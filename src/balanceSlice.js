import { createSlice } from '@reduxjs/toolkit';

//! Create a slice of the Redux store for the balance state
const balanceSlice = createSlice({

  name: 'counter',

  initialState: {
    value: 0,
  },


  //! Define reducers to update the balance state based on actions
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
    addInterest: (state) => {
      state.value *= 1.05;
    },
    charge: (state) => {
      state.value *= 0.85;
    },
  },

});

//! Export action creators for the balance slice reducers
export const { deposit, withdraw, addInterest, charge } = balanceSlice.actions;

export default balanceSlice.reducer;