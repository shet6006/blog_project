import React from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
    const navigate = useNavigate();
    
    const categorySettings = () => {
        navigate("categories"); // 상대 경로로 수정
    }
    
    const postSettings = () => {
        navigate("posts"); // 상대 경로로 수정
    }

    return (
        <div>
            <button onClick={categorySettings}>카테고리 관리</button>
            <button onClick={postSettings}>게시글 관리</button>
        </div>
    );
}

export default Settings;
