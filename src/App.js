import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  function handleClick(b){
    if(typeof(b) === "number"){
      setInput(input + "" + b);
    } else {
      if(b === "."){
        if(input.includes(".")){
          alert(". already exists");
          return;
        }
        setInput(input + "" + b);
      } else if(b === "+" || b === "-" || b === "*" || b === "/"){
        if(operator !== "" && input !== ""){
          calculate();
        }
        setOperator(b);
        setResult(parseFloat(input));
        setInput("");
      } else if(b === "="){
        if(operator === ""){
          return;
        }
        calculate();
      } else if(b === "AC"){
        setInput("");
        setResult(0);
        setOperator("");
      }
    }
  }

  function calculate(){
    let secondNumber = parseFloat(input);
    let output = 0;
    switch(operator){
      case "+":
        output = result + secondNumber;
        break;
      case "-":
        output = result - secondNumber;
        break;
      case "*":
        output = result * secondNumber;
        break;
      case "/":
        output = result / secondNumber;
        break;
      default:
        return;
    }
    setResult(output);
    setInput(output.toString());
    setOperator("");
  }

  return (
    <div>
      <div className='container'>
        
        <input type='text' value={input} readOnly></input>
        <div className='buttons'>
          <button onClick={()=>handleClick(7)}>7</button>
          <button onClick={()=>handleClick(8)}>8</button>
          <button onClick={()=>handleClick(9)}>9</button>
          <button onClick={()=>handleClick("/")}>/</button>
          <br></br>
          <button onClick={()=>handleClick(4)}>4</button>
          <button onClick={()=>handleClick(5)}>5</button>
          <button onClick={()=>handleClick(6)}>6</button>
          <button onClick={()=>handleClick("*")}>*</button>
          <br></br>
          <button onClick={()=>handleClick(3)}>3</button>
          <button onClick={()=>handleClick(2)}>2</button>
          <button onClick={()=>handleClick(1)}>1</button>
          <button onClick={()=>handleClick("-")}>-</button>
          <br></br>
          <button onClick={()=>handleClick(0)}>0</button>
          <button onClick={()=>handleClick(".")}>.</button>
          <button onClick={()=>handleClick("+")}>+</button>
          <button onClick={()=>handleClick("=")}>=</button>
          <br></br>
          <button onClick={()=>handleClick("AC")} className='ac-button'>AC</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
