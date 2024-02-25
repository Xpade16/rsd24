import { Box, TextField, Typography, Button, Alert } from "@mui/material";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider"
export default function Login() {
    const handleRef = useRef();
    const passwordRef = useRef();
    const { setAuth, setAuthUser } = useAuth();
    const [hasError, setHasError] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    return (<Box>
        <Typography variant="h4">
            Login
        </Typography>
        <Box sx={{ mt: 4 }}>
            <form onSubmit={e => {
                e.preventDefault();
                const handle = handleRef.current.value;
                const password = passwordRef.current.value;

                if (!handle || !password) {
                    setHasError(true);
                    setErrorMessage("Handle and Password required");
                    return false;
                }
                (async () => {
                    const api = import.meta.env.VITE_API_URL;
                    const res = await fetch(`${api}/login`, {
                        method: "POST",
                        body: JSON.stringify({ handle, password }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    if (!res.ok) {
                        setErrorMessage("Incorrect Handle or Password")
                        setHasError(true);
                        return false;
                    }
                    const data = await res.json();
                    localStorage.setItem("token", data.token)

                    fetch(`${api}/verify`, {
                        headers: {
                            Authorization: `Bearer ${data.token}`
                        }
                    })
                        .then(res => res.json())
                        .then(user => {
                            setAuth(true);
                            setAuthUser(user);
                            navigate("/");
                        });
                })();
            }}>
                {hasError && (
                    <Alert
                        severity="warning"
                        sx={{ mb: 4 }}>
                        {errorMessage}
                    </Alert>
                )}
                <TextField
                    label="Handle"
                    fullWidth
                    sx={{ mb: 2 }}
                    inputRef={handleRef}
                />
                <TextField
                    label="Password"
                    fullWidth
                    type="password"
                    sx={{ mb: 2 }}
                    inputRef={passwordRef}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth>
                    Login
                </Button>
            </form>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Link to="/register">Register</Link>
            </Box>
        </Box>
    </Box>)
}