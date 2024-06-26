import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostView = () => {
    const [posts, setposts] = useState([])
    const { id } = useParams();
    const fetch_post = () => {
        axios.get('http://localhost:5000/posts/showpost')
            .then(response => {
                const postData = response.data;
                const foundPost = postData.find(post => post.id === parseInt(id));
                setposts(foundPost);
            })
            .catch(error => {
                console.error('Error fetching titles:', error);
            });
    };
    useEffect(() => {
        fetch_post();
    }, []);

    return (
        <div>
            <h2>{posts.title}</h2>
            <p>{posts.content}</p>
        </div>
    );
}
export default PostView;