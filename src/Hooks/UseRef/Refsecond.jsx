import React, { useRef } from 'react'

const Refsecond = () => {
    const btnRef = useRef();
    const changeClr = () =>{
        btnRef.current.style.backgroundColor = "red";
    }
  return (
    <div>
          <button ref={btnRef}>Hellooo</button>
        <br /><br /><br />
        <button onClick={changeClr}>Change color of upar wala button</button>
      
    </div>
  )
}

export default Refsecond
