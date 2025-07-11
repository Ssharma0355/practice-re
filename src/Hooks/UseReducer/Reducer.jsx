import React, { useReducer } from 'react'

const Reducer = () => {
    const reducer =(count, action) =>{
        if(action.type === "+"){
            return count+1;
        }
        else if(action.type === "-"){
            return count-1;
        }
    }
    const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({type:"+"})}>+</button>
        <button onClick={() => dispatch({ type: "-" })}>-</button>
    </div>
  )
}

export default Reducer
