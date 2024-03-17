"use client"

import { createContext, useEffect, useState } from "react";

//context to share app theme across elements
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
}

//provide theme context
export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => getFromLocalStorage());

    const toggle = () => {
        setTheme(
            theme === "light" ? "dark" : "light"
        )
    }

    useEffect(()=>{
        localStorage.setItem("theme",theme)
    }, [theme]);

    return (
        //provide theme context to its childrens
        <ThemeContext.Provider value = {{theme, toggle}}>{children}</ThemeContext.Provider>
    )
}

