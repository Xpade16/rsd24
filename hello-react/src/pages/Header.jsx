import{
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Badge
}from '@mui/material';

import{
    Checklist as CheckListIcon,
    ClearAll as ClearAllIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon
}from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from '../Theme';

export default function Header({count, clear}){
    const{mode, setMode} = useContext(ThemeContext);
    return (
        <AppBar position='static'>
            <Toolbar>
                <Badge badgeContent={count} color='error'>
                    <CheckListIcon/>
                </Badge>
                <Typography variant='h6' sx={({ml:2,flexGrow:1})}>
                    CheckList
                </Typography>
                {
                    mode =="dark"?
                    <IconButton onClick={()=>{
                        setMode("light");
                    }}>
                        <LightModeIcon color = "inherit"></LightModeIcon>
                    </IconButton>
                    :
                    <IconButton onClick={()=>{
                        setMode("dark");
                    }}>
                        <DarkModeIcon color = "inherit"></DarkModeIcon>
                    </IconButton>
                }
                <IconButton onClick={clear}>
                    <ClearAllIcon color = "inherit"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}