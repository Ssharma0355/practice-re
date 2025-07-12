import React, { useRef, useState } from 'react'

const StopWatchRef = () => {
    const [time, setTime] = useState(0);
    const timeRef  = useRef(null);
    function start(){
       timeRef.current = setInterval(()=>{
         setTime(prevTime => prevTime+1);
        },1000)

    }
    const stop = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
    const reStart = () => {
        stop();
        setTime(0);
    }
  return (
    <div>
        <h1>Stopwatch: {time}</h1>
          <br /><br /><br />
        <button onClick={start}>Start</button>
          <br /><br /><br />
        <button onClick={stop}>Stop</button>
          <br /><br /><br />
        <button onClick={reStart}>Re-start</button>
    </div>
  )
}

export default StopWatchRef
