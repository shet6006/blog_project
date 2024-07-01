import React, { useContext, useState, useMemo } from 'react';
import { AppDataContext } from './DataContext';
import { useNavigate } from 'react-router-dom';

function Left() {
  const { categories, posts } = useContext(AppDataContext);
  const [categoryStates, setCategoryStates] = useState({}); // 각 카테고리의 상태를 객체로 관리
  const navigate = useNavigate();

  const togglePostList = (categoryName) => {
    setCategoryStates(prevState => ({
      ...prevState,
      [categoryName]: !prevState[categoryName]
    }));
    console.log(`Toggled category: ${categoryName}`);
  };

  const filteredPostsByCategory = useMemo(() => {
    const filtered = {};
    categories.map(category => {
      filtered[category.name] = posts.filter(post => post.category_name === category.name);
    });
    return filtered;
  }, [posts, categories]);

  const handle_Postview = (id) => {
    navigate(`/postview/${id}`);
  };

  return (
    <div className="left">
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <div
              className="underline-list"
              onClick={() => togglePostList(category.name)}
            >
              {category.name}
            </div>
            {categoryStates[category.name] && (
              <ul style={{ margin: '0 0 0 15px', padding: 0 }}>
                {filteredPostsByCategory[category.name].map(post => (
                  <li className="underline-list" onClick={() => handle_Postview(post.id)} key={post.id} style={{ fontSize: '10px' }}>{post.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Left;
