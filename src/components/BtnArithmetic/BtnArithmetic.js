import "./BtnArithmetic.css";

function BtnArithmetic({arithmetic, arithmetics}){
    return(
        
    <button className="btn-Arithmetic" 
    onClick= {()=> arithmetics({arithmetic})}
    >{arithmetic}</button>
)}

export default BtnArithmetic;