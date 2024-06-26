import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Content() {
    const navigate = useNavigate();
    const [titles, setTitles] = useState([]);

    const delete_post = (id) => {
      axios.delete('http://localhost:5000/posts/deletepost', { params: { id } })
      .then(response => {
        fetch_post();
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
    };

    const fetch_post = () => {
      axios.get('http://localhost:5000/posts/showpost')
      .then(response => {
        setTitles(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching titles:', error);
      });
    };

    useEffect(() => {
      fetch_post();
    }, []);

    const handleWrite_EssayButtonClick = () => {
        navigate(`/writeessay`);
    };

    const handlePostView = (id) => {
      navigate(`/postview/${id}`);
    };
    
    const Create_Category = () => {
      navigate(`/createcategory`);
    }
    return (
      <div className="content">
        {titles.map((title, index) => (
          <div key={title.id}>
            <span onClick={() => handlePostView(title.id)}>{index + 1} {title.title}</span>
            <button onClick={() => delete_post(title.id)}>글 삭제</button>
          </div>
        ))}
        <button onClick={Create_Category}>카테고리 생성</button>
        <button onClick={handleWrite_EssayButtonClick}>글 쓰기</button>
      </div>
    );
}

export default Content;
