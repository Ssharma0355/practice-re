import React, { useRef, useState } from 'react'

const RefHook = () => {
    const [count, setCount] = useState(0);

    const value = useRef(0); //it will persist the value across the re-render

    const handleClick =()=>{
        value.current = value.current +1;
        console.log(value);
        setCount(count+1);
    }
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default RefHook
