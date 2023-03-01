import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex items-center justify-start bg-gradient-to-r from-red-500 via-amber-500 to-red-500 py-6 px-8">
            <Link
                className=" group rounded border-4 border-white bg-transparent p-2 "
                to={import.meta.env.BASE_URL}
            >
                <h1 className="text-3xl font-extrabold text-white underline group-hover:decoration-dashed">
                    Blog Posts App
                </h1>
            </Link>
        </header>
    );
}

export default Header;
