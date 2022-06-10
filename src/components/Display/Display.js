import "./Display.css";

function Display({result}){
    return(
    // <div className="result">{result}</div>
    <input className="result" value={result} readOnly/>
)}

export default Display;