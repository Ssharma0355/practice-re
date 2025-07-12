import React, { useEffect, useState } from 'react'

const SeachBar = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const fetchData = async ()=>{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=`)
        const json = await data.json();
        setResults(json.recipes);
    }

    useEffect(()=>{
        fetchData();
    },[input])
    console.log(results)
  return (
    <div>
        <h1>Autocomplete Searchbar</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <div>
              {results.length > 0 && results.map((result) => (<span className='list' key={result.id}>{result.name}</span>))}
        </div>
    </div>
  )
}

export default SeachBar
