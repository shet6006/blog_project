import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import React, { useContext } from 'react';
import { AppDataContext } from "../DataContext";
import { useNavigate } from "react-router-dom";

function SetCategories() {
    const navigate = useNavigate();
    const { categories, setCategories } = useContext(AppDataContext);

    //카테고리 제거 함수
    const delete_Category = (id) => {
        axios.delete('http://localhost:5000/categories/deletecategory', { params: { id } })
            .then(response => {
                const updatedCategories = categories.filter(category => category.id !== id);
                setCategories(updatedCategories); // 상태 업데이트
            })
            .catch(error => {
                console.error('Error deleting category:', error);
            });
    };


    //카테고리 생성 이동
    const create_Category = () => {
        navigate(`/createcategory`);
        }

    return (
        <div>
            <h1>카테고리 목록</h1>
            {categories.map(category => (
                <div key={category.name}>
                    <span>{category.name}</span>
                    <button onClick={() => delete_Category(category.id)}>삭제</button>
                </div>
            ))}
            <button onClick={create_Category}>카테고리 생성</button>
        </div>
    );
}

export default SetCategories;