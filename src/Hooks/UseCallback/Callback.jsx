import React, { useState } from 'react'

const Callback = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
        <h1>{counter}</h1>
          <button onClick={() => setCounter(counter+1)}>Increment</button>
      
    </div>
  )
}

export default Callback
