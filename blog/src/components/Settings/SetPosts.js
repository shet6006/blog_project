import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SetPosts(){
    const [title, setTitle] = useState([]);
    const navigate = useNavigate();

    const fetch_post = () => {
        axios.get('http://localhost:5000/posts/showpost')
        .then(response => {
          setTitle(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching titles:', error);
        });
      };
  
      useEffect(() => {
        fetch_post();
      }, []);

    //게시글 삭제
    const delete_Post = (id) => {
        axios.delete('http://localhost:5000/posts/deletepost', { params: { id } })
        .then(response => {
          fetch_post();
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
            <h1>카테고리 목록</h1>
            {title.map(title => (
                <div key={title.id}>
                    <span>{title.title}</span>
                    <button onClick={() => delete_Post(title.id)}>삭제</button>
                </div>
            ))}
            <button onClick={create_Post}>글 쓰기</button>
        </div>
    );
}

export default SetPosts;
