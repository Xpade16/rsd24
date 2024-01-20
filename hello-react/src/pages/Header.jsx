import{
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Badge
}from '@mui/material';

import{
    Checklist as CheckListIcon,
    ClearAll as ClearAllIcon
}from '@mui/icons-material';

export default function Header({count, clear}){
    return (
        <AppBar position='static'>
            <Toolbar>
                <Badge badgeContent={count} color='error'>
                    <CheckListIcon/>
                </Badge>
                <Typography variant='h6' sx={({ml:2,flexGrow:1})}>
                    CheckList
                </Typography>
                <IconButton onClick={clear}>
                    <ClearAllIcon color = "inherit"/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}