import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { AppDataContext } from './DataContext';

const PostView = () => {
    const { posts } = useContext(AppDataContext);
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <p>{post.category_name}</p>
        </div>
    );
};

export default PostView;
