import React, { useState } from 'react'

const Count = () => {
    const [cnt,setCnt] = useState(0);
  return (
    <div>
        <h1>{cnt}</h1>
        <button onClick={()=>setCnt(cnt+1)}>+</button>
          <button onClick={() => setCnt(cnt - 1)}>-</button>
    </div>
  )
}

export default Count
