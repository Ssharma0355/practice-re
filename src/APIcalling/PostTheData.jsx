import axios from 'axios';
import React, { useState } from 'react'

const PostTheData = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [result, setResults] = useState(null);

    const sendData = ()=>{
        try{
            axios.post("https://jsonplaceholder.typicode.com/posts",{
                title,
                body
            })
                .then((res) => setResults(res.data) )
        }
        catch(err){
            console.log(err)
            

        }
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        sendData();

    }
  return (
    <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <br />
          <label>Body</label>
          <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
          <br />
          <button onClick={handleSubmit}>Submit</button>

          {result && <p>{result.title}  {result.body}</p>}
    </div>
  )
}

export default PostTheData
