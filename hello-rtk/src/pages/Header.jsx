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
import {useSelector, useDispatch} from "react-redux";
import {clear} from "../app/todoSlice";

export default function Header(){
    const{mode, setMode} = useContext(ThemeContext);
    const list = useSelector(state => state.todo.items);
    const dispatch = useDispatch();
    return (
        <AppBar position='static'>
            <Toolbar>
                <Badge badgeContent={list.filter(item => !item.done).length} color='error'>
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
                <IconButton onClick={()=>{dispatch(clear());}}>
                    <ClearAllIcon color = "inherit"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}