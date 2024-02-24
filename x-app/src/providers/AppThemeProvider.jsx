import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { deepPurple } from '@mui/material/colors';
import { useState, useMemo, createContext, useContext } from 'react';
const appThemeContext = createContext();

export function useAppTheme() {
    return useContext(appThemeContext)
}

const mode = "light";

export default function AppThemeProvider({ children }) {
    const [mode, setMode] = useState("dark")
    const theme = useMemo(() => {
        return createTheme(
            {
                palette: {
                    mode,
                    ...(mode === "light" ? {
                        // background: "purple",
                        header: { background: deepPurple[600] },
                        banner: { background: "#ccc" }
                    } : {
                        // background:"deeppink",
                        header: { background: deepPurple[900] },
                        banner: { background: "#222" }
                    }),
                }
            });
    }, [mode]);
    return (
        <appThemeContext.Provider value={{ mode, setMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </appThemeContext.Provider>
    )
}