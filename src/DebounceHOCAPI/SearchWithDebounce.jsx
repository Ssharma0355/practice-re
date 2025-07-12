import React, { useEffect, useState } from 'react'

const SearchWithDebounce = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);

    //calling api
    const getRecipies = async ()=>{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
        const json = await data.json();
        setResult(json.recipes);
    }

    // mounting
    useEffect(()=>{
        getRecipies();
    },[input])

    console.log(result)
  return (
    <div>
          <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
          <div>
              {result.length > 0 && result.map(r => (<span className='list' key={r.id}>{r.name}</span>))}
          </div>
    </div>
  )
}

export default SearchWithDebounce
