import { Link, useParams } from "react-router-dom";

function PostsPage() {
    const { postId } = useParams();
    return (
        <>
            <Link
                className="text-blue-600 underline hover:text-blue-400"
                to={import.meta.env.BASE_URL}
            >
                Go to Home Page
            </Link>
            <section>Posts Page - {postId}</section>
        </>
    );
}

export default PostsPage;
