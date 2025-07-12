import React, { useCallback, useState } from 'react'

const SecondCallback = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const expensiveCalculation = useCallback(() =>{
        console.log("inside calculation");
        let result =0
        for(let i=0;i<1000;i++){
            result = i * 2;
        }
        return result
        
    },[])
    const handleClick=()=>{
    setCount(count+1);
    }
    // const doubleCount = expensiveCalculation();


  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Increment</button>
        <div>
              <h1>{expensiveCalculation()}</h1>
              <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
      
    </div>
  )
}

export default SecondCallback
