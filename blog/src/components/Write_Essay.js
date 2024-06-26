import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Write_Essay() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); //새로고침방지

    axios.post('http://localhost:5000/posts', { title, content })
    .then(response => {
      console.log('Post saved:', response.data); //response는 응답받은 객체가 들어있고 http,host등, response.data가 내가 받아온 데이터
      setTitle('');
      setContent('');
      alert('등록되었습니다!');
      navigate('../');
    })
    .catch(error => {
      console.error('error occur!', error);
    });
  }
  return (
    <div className="write-post">
      <h2>Write Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update the title state on input change, e=변화느낌
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)} // Update the content state on input change
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}
export default Write_Essay;
