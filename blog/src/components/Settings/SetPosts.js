import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppDataContext } from "../DataContext";
import React, { useContext } from 'react';

function SetPosts(){
    const navigate = useNavigate();
    const { posts, setPosts } = useContext(AppDataContext);
    const { categories } = useContext(AppDataContext);

    //게시글 삭제
    const delete_Post = (id) => {
        axios.delete('http://localhost:5000/posts/deletepost', { params: { id } })
        .then(response => {
          const updatedPosts = posts.filter(post => post.id !== id);
          setPosts(updatedPosts);
        })
        .catch(error => {
          console.error('Error deleting post:', error);
        });
      };

    //글쓰기
    const create_Post = () => {
        if(categories.length === 0 ){
            alert('카테고리를 먼저 생성해주세요!');
        }else
            navigate(`/writepost`);
    };

    return(
        <div>
            <h1>글 목록</h1>
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
