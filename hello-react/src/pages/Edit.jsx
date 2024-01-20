import { Input, InputAdornment, IconButton } from "@mui/material";
import { Save as SaveIcon, ArrowBack as BackIcon, Update } from "@mui/icons-material";
import { useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

export default function Edit({ update }) {
    // const inputRef = useRef();
    const {state} = useLocation();
    const navigate = useNavigate();
    const [subject, setSubject] = useState(state.item.subject);
    // if(!state) Navigate("/");
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                update(state.item._id, subject);
                navigate("/");
            }}>
                <Input
                    value = {subject}
                    onChange={e=>{
                        setSubject(e.target.value);
                    }}
                    sx={{ mb: 4 }}
                    fullWidth
                    // inputRef={inputRef}
                    endAdornment={
                        <IconButton type="submit">
                            <SaveIcon />
                        </IconButton>
                    }
                />
            </form>
            <Link to="/"><BackIcon /></Link>
        </div>
    );
}