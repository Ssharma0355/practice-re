import React, { useEffect, useState } from 'react'

const AddPost = () => {
    const [data, setData] = useState({
        title:"",
        body:"",

    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        setData((prevData) =>({
            ...prevData,
            value:data.title,
        }) )
    }

    useEffect(()=>{
        // postData(data)
    })
  return (
    <div>
        <form>
            <label htmlFor="">Title</label>
              <input type="text" value={data.title} onChange={(e) => setData(e.target.value)}/>
            <label htmlFor="">Body</label>
              <textarea value={data.body} onChange={(e) => setData(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>

        </form>
      
    </div>
  )
}

export default AddPost
