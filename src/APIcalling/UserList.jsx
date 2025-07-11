import React, { useEffect, useState } from 'react'
import axios from "axios"

const UserList = () => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const getData = () =>{
        setLoading(true);
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setData(res.data))
            .catch((err)=>console.log(err))
            .finally(() => setLoading(false));  
    }
 //fetching mount
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
          {loading ? (<h1>Loading data....</h1>):(
              <table className='table-container'>
                  <thead className='table-head'>
                      <tr>
                          <th>User Id</th>
                          <th>User Name</th>
                          <th>Email</th>
                          <th>userName</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data.map((user, id) => (
                          <tr key={id}>
                              <td>{user.id}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>{user.username}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          )
          }
    </div>
  )
}

export default UserList
