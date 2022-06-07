import "./Button.css";

function Button({number , numForCalculation}){
        let n = number;
    return(
        
    <button
     onClick= {()=> numForCalculation(n)}
     >{number}</button>
)}

export default Button;