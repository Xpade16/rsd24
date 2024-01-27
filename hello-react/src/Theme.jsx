
import { useState, useMemo, createContext } from "react";
import AppRouter from "./pages/AppRouter"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
export const ThemeContext = createContext();

export default function Theme(){
    const[mode, setMode] = useState("dark");

    const theme = useMemo(()=>{
        return createTheme({
            palette:{
                mode,
            }
        });
    },[mode])
    return <ThemeContext.Provider value ={{mode, setMode}}>
        <ThemeProvider theme = {theme}>
            <CssBaseline/>
            <AppRouter/>
        </ThemeProvider>
    </ThemeContext.Provider>
}