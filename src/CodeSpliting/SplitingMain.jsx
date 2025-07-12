import React from 'react'
import { Suspense } from 'react'
import Split2 from './Split2'
const Split1 = React.lazy(()=> import("./Split1"))
const SplitingMain = () => {
  return (
    <div>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Split1 /> 
        </Suspense>
          <Split2 />
      
    </div>
  )
}

export default SplitingMain
