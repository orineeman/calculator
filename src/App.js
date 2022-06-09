import { useState } from "react";
import "./App.css";
import Arithmetics from "./components/Arithmetics";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import Display2 from "./components/Display2";

let num1 = [];
let num2 = [];
let result = 0;
let act = [];
let lastResult = [];
let number1IsTrue = false;
function App() {
  const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const arrArithmetics = ["+", "-", "*", "/", "=", "AC"];
  const [results, setResults] = useState(0);
  const [arithmeticExpression, setArithmeticExpression] = useState("");

  function arithmetics({ arithmetic }) {
    act.push(arithmetic);
    if (act[act.length - 1] === "=") {
      calculation();
    } else if (arithmetic === "AC") {
      num1 = [];
      num2 = [];
      act = [];
      setResults(0);
      setArithmeticExpression("");
    } else {
      if (num2.length > 0) {
        calculation();
        setArithmeticExpression(result + act[act.length - 1]);
      } else if (num1.length > 0) {
        act[act.length - 1] = arithmetic;
        setArithmeticExpression(num1.join("") + act[act.length - 1]);
      } else {
        act[act.length - 1] = arithmetic;
        setArithmeticExpression(arithmeticExpression + act[act.length - 1]);
      }
    }
  }

  function calculation() {
    let number1 = num1.join("");
    let number2 = num2.join("");
    if (act[act.length - 2] === "+") {
      result = parseInt(number1) + parseInt(number2);
    } else if (act[act.length - 2] === "-") {
      result = number1 - number2;
    } else if (act[act.length - 2] === "*") {
      result = number1 * number2;
    } else if (act[act.length - 2] === "/") {
      result = number1 / number2;
    }
    setResults(result);

    let convertToString = result.toString();
    lastResult = [];
    for (let i = 0; i < convertToString.length; i++) {
      lastResult.push(convertToString[i]);
    }
    number1IsTrue = true;
    num1 = lastResult;
    num2 = [];
    setArithmeticExpression("");
  }

  function numForCalculation(number) {
    if (
      act[act.length - 1] === "+" ||
      act[act.length - 1] === "-" ||
      act[act.length - 1] === "*" ||
      act[act.length - 1] === "/"
    ) {
      num2.push(number);
    } else {
      if (number1IsTrue) {
        num1 = [];
        setResults(0);
        number1IsTrue = !number1IsTrue;
      }
      num1.push(number);
    }
    setArithmeticExpression(arithmeticExpression + number);
  }

  return (
    <div className="App">
      <div>
        <Display result={results} />
        <Display2 arithmeticExpression={arithmeticExpression} />
      </div>
      <div>
        <Buttons
          arrNumbers={arrNumbers}
          arrArithmetics={arrArithmetics}
          numForCalculation={numForCalculation}
        />
        <Arithmetics
          arrArithmetics={arrArithmetics}
          arithmetics={arithmetics}
        />
      </div>
    </div>
  );
}

export default App;
