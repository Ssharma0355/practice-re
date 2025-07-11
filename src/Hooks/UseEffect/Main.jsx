import React, { useState } from 'react'
import CompEffect from './CompEffect';

const Main = () => {
    const [mount, setMount] = useState(true);
  return (
    <div>
          <button onClick={() => setMount(!mount)}>click</button>

        {mount ? <CompEffect />: ""}
    </div>
  )
}

export default Main
