import {
    Box
} from "@mui/material";

import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
export default function Home() {

    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            const api = import.meta.env.VITE_API_URL;
            const res = await fetch(`${api}/posts`);
            const post = await res.json();
            //insert more here
            setPosts(post);
            setIsLoading(false);
        })();
    }, []);
    return <Box>
        {isLoading ? (
            <Box>Loading...</Box>
        ) : posts.map(post => <PostCard post={post} key={post._id} />)}
    </Box>

    
}