import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get('http://localhost:5000/categories/showcategory');
        const postsResponse = await axios.get('http://localhost:5000/posts/showpost');
        setCategories(categoriesResponse.data);
        setPosts(postsResponse.data);
        console.log(categoriesResponse.data);
        console.log(postsResponse.data);
      } catch (error) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppDataContext.Provider value={{ categories, setCategories, posts, setPosts, loading, error }}>
      {children}
    </AppDataContext.Provider>
  );
};
