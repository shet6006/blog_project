import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppDataContext } from "../DataContext";
import React, { useContext } from 'react';

function SetPosts(){
    const navigate = useNavigate();
    const { posts, setPosts } = useContext(AppDataContext);


    //게시글 삭제
    const delete_Post = (id) => {
        axios.delete('http://localhost:5000/posts/deletepost', { params: { id } })
        .then(response => {
          const updatedPosts = posts.filter(post => posts.id !== id);
          setPosts(updatedPosts);
        })
        .catch(error => {
          console.error('Error deleting post:', error);
        });
      };

    //글쓰기
    const create_Post = () =>{
        navigate(`/writepost`);
    }
    return(
        <div>
            <h1>카테고리 목록록</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <span>{post.title}</span>
                    <button className="fade-button" onClick={() => delete_Post(post.id)}>삭제</button>
                </div>
            ))}
            <button className="fade-button" onClick={create_Post}>글 쓰기</button>
        </div>
    );
}

export default SetPosts;
