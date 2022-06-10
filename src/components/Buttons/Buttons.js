import Button from "../Button/Button";
import "./Buttons.css";

function Buttons({ arrNumbers, numForCalculation }) {
  return (
    <div className="border">
      {arrNumbers.map((number) => (
        <Button
          key={number}
          number={number}
          numForCalculation={numForCalculation}
        />
      ))}
    </div>
  );
}

export default Buttons;
