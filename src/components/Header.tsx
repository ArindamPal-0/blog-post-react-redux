import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex items-center justify-start bg-gradient-to-r from-red-500 to-amber-500 py-6 px-8">
            <h1 className="text-3xl font-bold text-white underline hover:decoration-dashed">
                <Link to={import.meta.env.BASE_URL}>Blog Posts App</Link>
            </h1>
        </header>
    );
}

export default Header;
