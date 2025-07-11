import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0);
    const [number,setNumber] = useState(0);
    const expensiveCal = (num) =>{
        console.log("Inside cal")
        for(let i=0;i<10000000;i++){}
        return num*2;
    }
    const doubleResult = useMemo(() => expensiveCal(number),[number])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>

        <div>
            <h2>{doubleResult}</h2>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        </div>
      
    </div>
  )
}

export default Memo
