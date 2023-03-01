import { Link } from "react-router-dom";

import { useBlog } from "../context/BlogContext";

function PostsList() {
    const { posts } = useBlog();
    return (
        <section className="my-4 flex w-1/2 flex-col items-center justify-start gap-2">
            <h2 className="text-xl font-bold underline">Posts List</h2>
            {posts.map((post) => (
                <article
                    className="w-full rounded border bg-amber-400 p-2"
                    key={post.id}
                >
                    <Link
                        className="text-lg font-semibold hover:underline"
                        to={`${import.meta.env.BASE_URL}posts/${post.id}`}
                    >
                        {post.title}
                    </Link>
                </article>
            ))}
        </section>
    );
}

export default PostsList;
