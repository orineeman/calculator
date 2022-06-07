import "./BtnArithmetic.css";

function BtnArithmetic({arithmetic, arithmetics}){
    return(
        
    <button 
    onClick= {()=> arithmetics({arithmetic})}
    >{arithmetic}</button>
)}

export default BtnArithmetic;