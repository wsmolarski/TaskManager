"use client"

import { setGlobal } from 'next/dist/trace'
import React, {createContext, useState, useContext} from 'react'
import themes from './themes'

export const GlobalContext = createContext()
export const GlobalUpdateContext = createContext()

const [selectedTheme, setSelectedTheme] = useState(0);
const theme = themes[selectedTheme];

export const GlobalProvider = ({children}) => {
    <GlobalContext.Provider value={theme}>
        <GlobalUpdateContext.Provider value={setGlobalState}>
            {children}
        </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
}