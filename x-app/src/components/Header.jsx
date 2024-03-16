import { AppBar, Toolbar, IconButton, Box, Badge } from "@mui/material";
import {
    Menu as MenuIcon, X as XIcon,
    Notifications as NotiIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
    People as UsersIcon,
} from "@mui/icons-material"
import { useUIState } from "../providers/UIStateProvider";
import { useAppTheme } from "../providers/AppThemeProvider";


export default function Header() {
    const { setOpenDrawer } = useUIState();
    const { mode, setMode } = useAppTheme();
    return <AppBar position="static" sx={{ bgcolor: "header.background" }}>
        <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }}>
            <IconButton
                edge="start"
                color="inherit"
                onClick={() => {
                    setOpenDrawer(true);
                }}>
                <MenuIcon />
            </IconButton>
            <XIcon />
            <Box>
                <IconButton color="inherit" sx={{ mr: 1 }}>
                    <UsersIcon />
                </IconButton>
                {mode === "dark" ? (
                    <IconButton color="inherit" onClick={() => setMode("light")}>
                        <LightModeIcon />
                    </IconButton>
                ) : (
                    <IconButton color="inherit" onClick={() => setMode("dark")}>
                        <DarkModeIcon />
                    </IconButton>
                )}
                <IconButton color="inherit" edge="end">
                    <Badge
                        badgeContent={1}
                        color="error">
                        <NotiIcon />
                    </Badge>
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
}