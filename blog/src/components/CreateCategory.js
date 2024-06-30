import React, { useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppDataContext } from './DataContext';

function CreateCategory() {
    const { categories, setCategories } = useContext(AppDataContext);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const add_Category = (event) => {
        event.preventDefault(); // 새로고침 방지

        axios.post(`http://localhost:5000/categories`, { name })
            .then(response => {
                console.log('Category saved:', response.data);
                setName(''); // 입력 필드 초기화
                alert('등록되었습니다!');
                setCategories(response.data);
                navigate(`../settings/categories/`);
            })
            .catch(error => {
                console.error('Error occurred:', error);
            });
    };

    return (
        <div>
            <h2>카테고리 생성하기</h2>
            <form onSubmit={add_Category}>
                <div>
                    <label>카테고리명: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <button className="fade-button" type="submit">등록</button>
            </form>
        </div>
    );
}

export default CreateCategory;