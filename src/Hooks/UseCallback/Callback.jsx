import React, { useCallback, useState } from 'react'
import Child11 from './Child11';
// 2 cases - unnessacry rednder of child component save
const Callback = () => {
    const [counter, setCounter] = useState(0);
    //when re-render then function refrence re-creates 
    // const handleClick =()=>{
    //     setCounter(counter+1)
    // }
    const handleClick = useCallback(()=>{
        setCounter(counter + 1)
    },[]); 
    //function is freezee
  return (
    <div>
        <h1>{counter}</h1>
          <button onClick={handleClick}>Increment</button>
          <Child11 btnName={"Sachin"} handleClick={handleClick}/>
    </div>
  )
}

export default Callback
