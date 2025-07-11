import React, { useContext } from 'react'
import { useTheme } from './MainFile'

const Sam3 = () => {
    const { theme, setTheme } = useContext(useTheme);
    const handleChange =()=>{
        setTheme(!theme)
    }
  return (
    <div>
        <h1>{theme?<p>Light</p> : <p>Dark</p>}</h1>
        <button onClick={handleChange}>Change Theme</button>
    </div>
  )
}

export default Sam3
