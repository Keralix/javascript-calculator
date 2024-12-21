import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculator/calculatorSlice";
export default configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
