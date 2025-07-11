import React, { createContext, useState } from 'react'
import Comp1 from './Comp1';


const UserContext = createContext();
const Parent = () => {
    const [user, setUser] = useState({
        name:"Sachin Sharma",
        email:"ssharma0355@gmail.com",
        job:"SDE"
    })
  return (
      <UserContext.Provider value={user}>
        <Comp1 />
      </UserContext.Provider>
  )
}

export default Parent;
export { UserContext  }
