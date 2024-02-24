import { Box, TextField, Typography, Button } from "@mui/material";

export default function Login() {

    return <Box>
        <Typography variant="h4">
            Login
        </Typography>
        <Box sx={{ mt: 4 }}>
            <form onSubmit={e => { e.preventDefault(); }}>
                <TextField sx={{ mb: 2 }} label="UserName" variant="outlined" fullWidth />
                <TextField sx={{ mb: 2 }} label="Password" type="password" variant="outlined" fullWidth />
                <Button type="submit" variant="contained" fullWidth>Login</Button>
            </form>
        </Box>
    </Box>
}