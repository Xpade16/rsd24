import {
    Box
} from "@mui/material";

import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { useAuth } from '../providers/AuthProvider';

export default function Home() {

    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([])
    const { authUser } = useAuth();
    const like = _id => {
        const result = posts.map(post => {
            if (post._id === _id) {
                post.likes.push(authUser._id);
            }
            return post;
        });
        setPosts(result);
    }
    const unlike = _id => {
        const result = posts.map(post => {
            if (post._id === _id) {
                post.likes = post.likes.filter(like => like !== authUser._id);
            }
            return post;
        });
        setPosts(result);
    }
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
        ) : (posts.map(post => <PostCard post={post} key={post._id} like={like} unlike={unlike} />))}
    </Box>


}