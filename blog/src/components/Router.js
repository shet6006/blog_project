import React from "react";
import Layout from "./Layout";
import Content from "./Content";
import Write_Essay from "./Write_Essay";
import { createBrowserRouter } from "react-router-dom";
import Introd from "./Introd";
import PostView from "./PostView";


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
                    <Content />
                  </>
                ),
            },
            {
                path: "writeessay",
                element: <Write_Essay />,
            },
            {
                path: "postview/:id",
                element: <PostView />,
            },
        ],
    },
]);


export default router;