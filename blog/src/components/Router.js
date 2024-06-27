import React from 'react';
import Layout from './Layout';
import WritePost from './WritePost';
import Introd from './Introd';
import Content from'./Content';
import PostView from './PostView';
import Category from './Category';
import Settings from './Settings/Settings';
import SetCategories from './Settings/SetCategories';
import SetPosts from './Settings/SetPosts';
import { createBrowserRouter } from 'react-router-dom';
import CreateCategory from './CreateCategory';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <>
            <Introd />
            <Content /> {/* Content 컴포넌트 추가 */}
          </>
        ),
      },
      {
        path: "writepost",
        element: <WritePost />,
      },
      {
        path: "postview/:id",
        element: <PostView />,
      },
      {
        path: "createcategory",
        element: <CreateCategory />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "settings/categories",
        element: <SetCategories />,
      },
      {
        path: "settings/posts",
        element: <SetPosts />,
      },
    ],
  },
]);

export default router;
