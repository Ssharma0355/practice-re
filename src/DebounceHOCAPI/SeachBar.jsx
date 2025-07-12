import React, { useEffect, useState } from 'react'

const SeachBar = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false)
    const fetchData = async ()=>{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
        const json = await data.json();
        setResults(json?.recipes);
    }
    useEffect(()=>{
        fetchData();
    },[input])
    console.log(results)
  return (
    <div>
        <h1>Autocomplete Searchbar </h1>
        <p>Results found : {results.length}</p>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} onFocus={()=>setShowResults(!showResults)}/>
          {showResults ? (<div>
              {results.length > 0 && results.map((result) => (<span className='list' key={result.id}>{result.name}</span>))}
          </div>):""}
    </div>
  )
}

export default SeachBar
