import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <Link
                className="text-blue-600 underline hover:text-blue-400"
                to={import.meta.env.BASE_URL}
            >
                Go to Home Page
            </Link>
            <h2 className="text-3xl font-bold text-red-500">404</h2>
            <p className="text-xl font-semibold">Not Found</p>
        </>
    );
}

export default NotFoundPage;
