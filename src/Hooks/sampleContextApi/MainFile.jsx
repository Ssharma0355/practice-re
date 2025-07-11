import React, { createContext, useState } from 'react'
import Sam1 from './Sam1'

const useTheme = createContext();

const MainFile = () => {
    const [theme, setTheme] = useState(false);

  return (
    <div className={theme ? "light" : "dark"}>
          <useTheme.Provider value={{ theme, setTheme }}>
              <Sam1 />
          </useTheme.Provider>
    </div>
  )
}

export default MainFile;
export { useTheme }
