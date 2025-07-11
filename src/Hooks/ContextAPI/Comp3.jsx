import React,{useContext} from 'react'
import { UserContext } from './Parent'

const Comp3 = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.job}</h1>
      
    </div>
  )
}

export default Comp3
