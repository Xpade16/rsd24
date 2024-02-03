import { Input, InputAdornment, IconButton } from "@mui/material";
import { Save as SaveIcon, ArrowBack as BackIcon, Update } from "@mui/icons-material";
import { useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {update} from "../app/todoSlice"

export default function Edit() {
    // const inputRef = useRef();
    const {state} = useLocation();
    const navigate = useNavigate();
    const [subject, setSubject] = useState(state.item.subject);
    const dispatch = useDispatch();
    // if(!state) Navigate("/");
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(update({_id: state.item._id, subject}));
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