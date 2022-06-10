import "./Arithmetics.css";
import BtnArithmetic from "../BtnArithmetic/BtnArithmetic";

function Arithmetics({ arrArithmetics, arithmetics }) {
  return (
    <div className="arithmetics-div">
      {arrArithmetics.map((arithmetic) => (
        <BtnArithmetic
          key={arithmetic}
          arithmetic={arithmetic}
          arithmetics={arithmetics}
        />
      ))}
    </div>
  );
}

export default Arithmetics;
