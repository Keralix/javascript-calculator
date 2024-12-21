import { useState } from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { inputNumber,calculate,clear, decimal} from "./app/calculator/calculatorSlice"

function App() {

  const dispatch = useDispatch()
  const answer = useSelector((state)=>state.calculator.answer)
  const expression = useSelector((state)=>state.calculator.expression)
  function buttonPress(action){
    switch(action){
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": 
       dispatch(inputNumber(action))
        break;
      case "+":
      case "/":
      case "*":
        dispatch(inputNumber(" "+action+" "))
        break;
      case "-":
        dispatch(inputNumber(" "+action))
        break;
      case "clear":
        dispatch(clear());
        break;
      case "equals":
        dispatch(calculate());
        break;
      case "decimal":
        dispatch(decimal());
        break;
      default:
        console.log("error")
    }
  }
  return (
    <div className='container'>
      <div id="calculator">
      <div id='display-container'>
        <div id="expression">{expression}</div>
        <div id="display">{answer}</div>
      </div>
        <button onClick={()=>buttonPress("clear")} className="clearBtn" id="clear">C</button>
        <button onClick={()=>buttonPress("/")} className="operationBtn" id="divide">/</button>
        <button onClick={()=>buttonPress("*")} className="operationBtn" id="multiply">*</button>
        <button onClick={()=>buttonPress("7")} className="numberBtn" id="seven">7</button>
        <button onClick={()=>buttonPress("8")} className="numberBtn" id="eight">8</button>
        <button onClick={()=>buttonPress("9")} className="numberBtn" id="nine">9</button>
        <button onClick={()=>buttonPress("-")} className="operationBtn" id="subtract">-</button>
        <button onClick={()=>buttonPress("4")} className="numberBtn" id="four">4</button>
        <button onClick={()=>buttonPress("5")} className="numberBtn" id="five">5</button>
        <button onClick={()=>buttonPress("6")} className="numberBtn" id="six">6</button>
        <button onClick={()=>buttonPress("+")} className="operationBtn" id="add">+</button>
        <button onClick={()=>buttonPress("1")} className="numberBtn" id="one">1</button>
        <button onClick={()=>buttonPress("2")} className="numberBtn" id="two">2</button>
        <button onClick={()=>buttonPress("3")} className="numberBtn" id="three">3</button>
        <button onClick={()=>buttonPress("equals")} className="equalBtn" id="equals">=</button>
        <button onClick={()=>buttonPress("0")} className="numberBtn" id="zero">0</button>
        <button onClick={()=>buttonPress("decimal")} className="numberBtn" id="decimal">.</button>
          </div>
    </div>
  )
}

export default App
