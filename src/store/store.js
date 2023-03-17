import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../balanceSlice";


//! Define and export a Redux store with the balance reducer
export default configureStore ({
  //! The reducer object specifies how to update the state based on actions
  reducer: {
    //! The key "counter" maps to the balanceReducer function
    counter: balanceReducer,
  },
});