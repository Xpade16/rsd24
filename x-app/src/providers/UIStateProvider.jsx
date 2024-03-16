import { useState, createContext, useContext } from "react";

const UIStateContext = createContext();

export function useUIState(){
    return useContext(UIStateContext);
}

export default function UIStateProvider({children}){
    const [openDrawer, setOpenDrawer] = useState(true);
    const [openFeedback, setOpenFeedback] = useState(true);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    return(
    <UIStateContext.Provider 
    value={{
        openDrawer,
        setOpenDrawer,
        openFeedback,
        setOpenFeedback,
        feedbackMessage, 
        setFeedbackMessage,
        }}>
        {children}
    </UIStateContext.Provider>);
}