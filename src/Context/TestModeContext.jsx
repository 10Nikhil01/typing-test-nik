import { createContext, useContext, useState } from "react";

const TestModeContext = createContext();

export const TestModeContextProvider = ({children}) =>{

    const [testMode, setTestMode] = useState('word');  // time or word
    const [testSeconds, setTestSeconds] = useState(15);
    const [testWords, setTestWords] = useState(30);  // 10 or 20 or 30
    
    const values = {
        testMode,
        setTestMode,
        testSeconds,
        setTestSeconds,
        testWords,
        setTestWords
    }

    return (<TestModeContext.Provider value={values}>{children}</TestModeContext.Provider>)
}

export const useTestMode = ()=>useContext(TestModeContext);