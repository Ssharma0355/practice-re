import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const expensiveCalculation =(num)=>{
        console.log("Expensive cal");
        for(let i=0;i<1000000000;i++){}
            return num * 2;
    }
    const doubleValue = useMemo(()=>expensiveCalculation(number),[number])
  return (
    <div>
          <h1>{doubleValue}</h1>
          <input type="number" value={number} onChange={(e) =>setNumber(e.target.value)} />
       <h1>{count}</h1>
       <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Memo
