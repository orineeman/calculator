import { useState } from "react";
import "./App.css";
import Arithmetics from "./components/Arithmetics";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import Display2 from "./components/Display2";

function App() {
  const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const arrArithmetics = ["+", "-", "*", "/", "=", "AC"];
  let num1 = [];
  let num2 = [];
  let targilim = [];
  let act;
  let result = 0;
  const [results, setResults] = useState(result);
  const [targil, setTargil] = useState(targilim);

  function arithmetics({ arithmetic }) {
    if (arithmetic === "=") {
      let number1 = num1.join("");
      let number2 = num2.join("");
      if (act === "+") {
        setResults(parseInt(number1) + parseInt(number2));
      } else if (act === "-") {
        setResults(number1 - number2);
      } else if (act === "*") {
        setResults(number1 * number2);
      } else if (act === "/") {
        setResults(number1 / number2);
      }
      num1 = [];
      num2 = [];
      act = "";
    } else if (arithmetic === "AC") {
      num1 = [];
      num2 = [];
      act = "";
      setResults(0);
      // setTargil([]);
    } else {
      act = arithmetic;
      targilim.push(act);
      console.log(targilim.join(""));
      // setTargil(targilim);
    }
  }
  function numForCalculation(number) {
    if (act === "+" || act === "-" || act === "*" || act === "/") {
      num2.push(number);
      targilim.push(number);
      console.log(targilim.join(""));
      // setTargil(targilim);
    } else {
      num1.push(number);
      targilim.push(number);
      console.log(targilim.join(""));
      // setTargil(targilim);
    }
  }

  return (
    <div className="App">
      <div>
        <Display result={results} />
        <Display2 targil={targil} />
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
