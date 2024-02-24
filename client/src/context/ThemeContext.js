import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [isDarkMode,setIsDarkMode] = useState(true)

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev)
    }
    return (
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
