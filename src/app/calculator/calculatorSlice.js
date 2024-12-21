import { createSlice } from "@reduxjs/toolkit";
import { retry } from "@reduxjs/toolkit/query";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    answer: "0",
    expression: "",
    operation: "",
  },
  reducers: {
    calculate: (state) => {
      let inputs = state.expression.split(" ").filter((element) => {
        return element != "";
      });
      console.log(inputs);
      let rezultat = 0;
      let operator = "+";
      let i = 0;
      for (; i <= inputs.length - 1; i++) {
        console.log(rezultat);
        if (Number(inputs[i])) {
          switch (operator) {
            case "*":
              rezultat *= Number(inputs[i]);
              operator = "+";
              break;
            case "/":
              rezultat /= Number(inputs[i]);
              operator = "+";
              break;
            default:
              rezultat += Number(inputs[i]);
          }
        } else operator = inputs[i];
      }
      state.answer = rezultat;
    },
    inputNumber: (state, action) => {
      let ans = state.expression.split(" ");
      if (ans[ans.length - 1] === "0" && action.payload === "0") {
      } else {
        state.expression += action.payload;
        ans = state.expression.split(" ");
        state.answer = ans[ans.length - 1];
      }
    },
    clear: (state) => {
      state.answer = "0";
      state.expression = "";
    },
    decimal: (state) => {
      let ans = state.expression.split(" ");
      if (ans[ans.length - 1] === "") {
        state.expression += "0.";
        state.answer = "0.";
      } else if (!state.answer.includes(".")) {
        state.expression += ".";
        state.answer += ".";
      }
    },
  },
});
export const { calculate, inputNumber, clear, decimal } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
