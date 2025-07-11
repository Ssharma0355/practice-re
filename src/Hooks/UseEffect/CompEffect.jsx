import React, { useEffect, useState } from 'react'

const CompEffect = () => {
    const [counter, setCounter] = useState(0);

    // mounting and unmounting
    useEffect(()=>{
        console.log("Mounted");
        return function(){
            console.log("Unmount")
        }
    },[])

    useEffect(()=>{
        console.log("Updated")
    },[counter])

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}> Click</button>
      
    </div>
  )
}

export default CompEffect
