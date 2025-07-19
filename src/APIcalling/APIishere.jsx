import React, { useEffect, useState } from 'react'
import axios from 'axios'


const APIishere = () => {
    const [list, setList] = useState([])
    const getData = () =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setList(res.data));

    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        {list.length>0 && list.map(m=>(<p>{m.name}</p>))}

      
    </div>
  )
}

export default APIishere
