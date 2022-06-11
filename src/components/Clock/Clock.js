import { useState ,useEffect} from "react";
function Clock(){

    const [time, setTime] = useState(new Date());
    
    function refreshClock() {
        setTime(new Date());
    }
    useEffect(() => {
      const timeId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timeId);
      };
    }, []);
    return (
      <span>
        {time.toLocaleTimeString()}
      </span>
    );
  }
  export default Clock;