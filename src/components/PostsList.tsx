import { Link } from "react-router-dom";

import { useBlog } from "../context/BlogContext";

function PostsList() {
    const { posts } = useBlog();
    return (
        <section className="my-4 flex w-1/2 flex-col items-center justify-start gap-2">
            <h2 className="text-xl font-bold underline">Posts List</h2>
            {posts.map((post) => (
                <Link
                    className="group w-full rounded border border-amber-400 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent p-2"
                    key={post.id}
                    to={`${import.meta.env.BASE_URL}posts/${post.id}`}
                >
                    <h3 className="text-lg font-semibold group-hover:underline">
                        {post.title}
                    </h3>
                </Link>
            ))}
        </section>
    );
}

export default PostsList;
