import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppDataContext } from './DataContext';

function Content() {
    const navigate = useNavigate();
    const { posts, setPosts } = useContext(AppDataContext);

    const delete_Post = (id) => {
        axios.delete('http://localhost:5000/posts/deletepost', { params: { id } })
            .then(response => {
                // 삭제된 글을 제외한 새로운 posts 배열을 생성
                const updatedPosts = posts.filter(post => post.id !== id);
                setPosts(updatedPosts); // 상태 업데이트
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };

    const create_Post = () => {
        navigate(`/writepost`);
    };

    const handle_PostView = (id) => {
        navigate(`/postview/${id}`);
    };

    return (
        <div className="content">
            {posts.map((post, index) => (
                <div key={post.id}>
                    <span onClick={() => handle_PostView(post.id)}>{index + 1} {post.title}</span>
                    <button class="fade-button" onClick={() => delete_Post(post.id)}>글 삭제</button>
                </div>
            ))}
            {/* <button onClick={createCategory}>카테고리 생성</button> */}
            <button className="fade-button" onClick={create_Post}>글 쓰기</button>
        </div>
    );
}

export default Content;
