import React, { useEffect, useState } from 'react'

const PreacticeDebounce = () => {
    const [input ,setInput] = useState("");
    const [results, setResults] = useState([]);

    // fetching data

    const getData = async ()=>{
        console.log("Api calls for " , input)
        const data = await fetch("https://dummyjson.com/recipes/search?q=" + input)
        const json = await data.json();
        setResults(json.recipes);
    }


    // mounting
    useEffect(()=>{
  // debouncing
        const timer = setTimeout(() => { getData(); },300);

        // unmounting 
        return function(){
            clearTimeout(timer);
        }
    },[input])

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <div>
            {results.length >0 && results.map((result) =>(<span className='list' key={result.id}>{result.name}</span>))}
        </div>
    </div>
  )
}

export default PreacticeDebounce
