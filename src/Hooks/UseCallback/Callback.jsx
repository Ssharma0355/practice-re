import React, { useState } from 'react'
import Child11 from './Child11';
// 2 cases - unnessacry rednder of child component save
const Callback = () => {
    const [counter, setCounter] = useState(0);
    const handleClick =()=>{
        setCounter(counter+1)

    }
  return (
    <div>
        <h1>{counter}</h1>
          <button onClick={handleClick}>Increment</button>
          <Child11 btnName={"Sachin"} handleClick={handleClick}/>
    </div>
  )
}

export default Callback
