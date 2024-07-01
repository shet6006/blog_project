import React, { useContext, useState, useEffect } from 'react';
import { AppDataContext } from './DataContext';

function Left() {
  const { categories, posts } = useContext(AppDataContext);
  const [openCategory, setOpenCategory] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (openCategory) {
      const selectPost = posts.filter(post => post.category_name === openCategory);
      setFilteredPosts(selectPost);
      console.log(selectPost);
    } else {
      setFilteredPosts([]);
    }
  }, [openCategory, posts]);

  const togglePostList = (categoryName) => {
    const newOpenCategory = openCategory === categoryName ? null : categoryName;
    setOpenCategory(newOpenCategory);
    console.log(`Selected category: ${newOpenCategory}`);
  };

  const getPostsForCategory = (categoryName) => {
    const filteredPosts = posts.filter(post => post.category_name === categoryName);
    console.log(`Filtered posts for category '${categoryName}':`, filteredPosts);
    return filteredPosts;
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
            {openCategory === category.name && (
              <ul>
                {getPostsForCategory(category.name).map(post => (
                  <li key={post.id}>{post.title}</li>
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
