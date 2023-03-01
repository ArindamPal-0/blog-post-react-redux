import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/PostsPage";

import BlogContextProvider from "./context/BlogContext";

const router = createBrowserRouter([
    {
        path: import.meta.env.BASE_URL,
        element: <Layout />,
        // FIXME: change to error page
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "posts/:postId",
                element: <PostsPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

function App() {
    return (
        <BlogContextProvider>
            <RouterProvider router={router} />
        </BlogContextProvider>
    );
}

export default App;
