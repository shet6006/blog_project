import React, { useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppDataContext } from './DataContext';
import CKEditorComponent from './CKEditorComponent';

function WritePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { posts, setPosts } = useContext(AppDataContext);
  const { categories } = useContext(AppDataContext);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(categories[0].name); //select박스에서 선택된 옵션

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleEditorChange = (data) => {
    setContent(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //새로고침방지

    axios.post('http://localhost:5000/posts', { title, content, category_name: selectedOption })
    .then(response => {
      console.log('Post saved:', response.data); //response는 응답받은 객체가 들어있고 http,host등, response.data가 내가 받아온 데이터
      setTitle('');
      setContent('');
      alert('등록되었습니다!');
      setPosts(response.data);
      navigate('/');
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
          <select value={selectedOption} onChange={handleChange}>
            {categories.map((category) => (
              <option key={category.name} value={category.name}> 
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update the title state on input change
          />
        </div>    
        <div>
          <label htmlFor="content">Content:</label>
          <CKEditorComponent
            data={content}
            onChange={handleEditorChange}
          />
        </div>
        <button className="fade-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WritePost;
