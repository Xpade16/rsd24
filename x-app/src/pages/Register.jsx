import { Box, TextField, Typography, Button, Alert } from "@mui/material";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
    const nameRef = useRef();
    const handleRef = useRef();
    const profileRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const navigate = useNavigate();
    const [hasError, setHasError] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    return (<Box>
        <Typography variant="h4">
            Register
        </Typography>
        <Box sx={{ mt: 4 }}>
            <form onSubmit={e => {
                e.preventDefault();
                const name = nameRef.current.value;
                const handle = handleRef.current.value;
                const profile = profileRef.current.value;
                const password = passwordRef.current.value;
                const confirmPassword = confirmPasswordRef.current.value;


                if (!name || !handle || !password) {
                    setHasError(true);
                } else {
                    setHasError(false);


                    (async () => {
                        const api = import.meta.env.VITE_API_URL;
                        const res = await fetch(`${api}/register`, {
                            method: 'POST',
                            body: JSON.stringify({ name, handle, profile, password }),
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        });
                        if (!res.ok) {
                            setErrorMessage('Please Try Again');
                            setHasError(true);
                            return false;
                        }
                        navigate("/login");
                    })();
                }
            }}>
                {hasError && (
                    <Alert
                        severity="warning"
                        sx={{ mb: 4 }}>
                        name, handle or password required
                    </Alert>
                )}
                {passwordValidation && (
                    <Alert
                        severity="warning"
                        sx={{ mb: 4 }}>
                        Passwords does not match
                    </Alert>
                )}
                <TextField
                    label="Name"
                    fullWidth
                    sx={{ mb: 2 }}
                    inputRef={nameRef}
                />
                <TextField
                    label="Handle"
                    fullWidth
                    sx={{ mb: 2 }}
                    inputRef={handleRef}
                />
                <TextField
                    label="Profile/Bio"
                    fullWidth
                    sx={{ mb: 2 }}
                    inputRef={profileRef}
                />
                <TextField
                    label="Password"
                    fullWidth
                    type="password"
                    sx={{ mb: 2 }}
                    inputRef={passwordRef}
                />
                <TextField
                    label="Confirm Password"
                    fullWidth
                    type="password"
                    sx={{ mb: 2 }}
                    inputRef={confirmPasswordRef}
                    onChange={() => {
                        const password = passwordRef.current.value;
                        const confirmPassword = confirmPasswordRef.current.value;
                        if (password != confirmPassword) {
                            setPasswordValidation(true);
                        } else {
                            setPasswordValidation(false);
                        }
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth>
                    Register
                </Button>
            </form>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Link to="/login">Login</Link>
            </Box>
        </Box>
    </Box>)
}