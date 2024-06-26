import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Write_Essay() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [name, setName] = useState([]);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(''); //select박스에서 선택된 옵션
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //새로고침방지

    axios.post('http://localhost:5000/posts', { title, content, category_name: selectedOption })
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

  useEffect(() => {
    axios.get('http://localhost:5000/categories/showcategory')
      .then(response => {
        setName(response.data);
        console.log(name);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []); 

  return (
    <div className="write-post">
      <h2>Write Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <select value={selectedOption} onChange={handleChange}>
          {name.map((name) => (
            <option key={name.name} value={name.name}> 
              {name.name}
            </option> //키와 밸류 모르겠음;;;
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
