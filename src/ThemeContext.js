import React from 'react';
export const ThemeContext = React.createContext()
export function ThemeProvider({children}){
    const [dark,setDark]=React.useState(true)
    const toggleTheme=()=>{
        setDark(prev=>!prev)
    }
    return (
       <ThemeContext.Provider value={{dark,toggleTheme}}>
        {children}
       </ThemeContext.Provider>
    )

}