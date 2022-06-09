import { useState } from "react";
import "./App.css";
import Arithmetics from "./components/Arithmetics";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import Display2 from "./components/Display2";

let num1 = [];
let num2 = [];
let result = 0;
let act;
function App() {
  const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const arrArithmetics = ["+", "-", "*", "/", "=", "AC"];
  const [results, setResults] = useState(result);
  const [targil, setTargil] = useState("");

  function arithmetics({ arithmetic }) {
    if (arithmetic === "=") {
      let number1 = num1.join("");
      let number2 = num2.join("");
      console.log(num1);
      console.log(num2);
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
      setTargil("");
    } else if (arithmetic === "AC") {
      num1 = [];
      num2 = [];
      act = "";
      setResults(0);
      setTargil("");
    } else {
      act = arithmetic;
      console.log("ori", targil + act);
      setTargil(targil + act);
    }
  }

  function numForCalculation(number) {
    if (act === "+" || act === "-" || act === "*" || act === "/") {
      num2.push(number);
      setTargil(targil + number);
      console.log("check", targil + number);
    } else {
      num1.push(number);
      setTargil(targil + number);
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
