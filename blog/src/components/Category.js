import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Category() {
    const navigate = useNavigate();
    const [category, setCategory] = useState([]);
    const [name, setName] = useState(''); // name 상태 변수 추가

    // 카테고리 삭제 함수
    const delete_category = (id) => {
        axios.delete('http://localhost:5000/category/delete', { params: { id } })
            .then(response => {
                fetchCategories(); // fetch_post가 아니라 fetchCategories로 변경
            })
            .catch(error => {
                console.error('Error deleting category:', error);
            });
    };

    // 카테고리 추가 함수
    const handleSubmit = (event) => {
        event.preventDefault(); // 새로고침 방지

        axios.post('http://localhost:5000/categories', { name })
            .then(response => {
                console.log('Category saved:', response.data);
                setName(''); // 입력 필드 초기화
                alert('등록되었습니다!');
                navigate('../');
            })
            .catch(error => {
                console.error('Error occurred:', error);
            });
    };

    // 카테고리 목록 가져오는 함수
    const fetchCategories = () => {
        axios.get('http://localhost:5000/categories')
            .then(response => {
                setCategory(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    };

    // 컴포넌트 마운트 시 카테고리 목록 가져오기
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="create-category">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} // 상태 업데이트 함수 수정
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>Categories</h2>
                <ul>
                    {category.map(cat => (
                        <li key={cat.id}>
                            {cat.name}
                            <button onClick={() => delete_category(cat.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Category;
