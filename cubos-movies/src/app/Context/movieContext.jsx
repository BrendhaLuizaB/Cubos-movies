'use client'

import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <GlobalContext.Provider value={{inputValue, setInputValue}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
 
