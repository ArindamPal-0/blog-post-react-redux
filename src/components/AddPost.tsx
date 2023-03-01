import { useState } from "react";

import { useBlog } from "../context/BlogContext";

function AddPost() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const { addPost } = useBlog();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // console.log("form submit.");
        if (addPost) {
            addPost({ title, content });

            setTitle("");
            setContent("");
        } else {
            console.error("addPost not defined.");
        }
    }

    return (
        <section className="flex w-1/2 flex-col items-center justify-start gap-1 rounded border pt-2 pb-4">
            <h2 className="text-xl font-bold underline">Add Post</h2>
            <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col items-center justify-center gap-1 px-4"
            >
                <div className="flex w-full flex-col gap-2">
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        className="rounded border px-2 py-1"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex w-full flex-col gap-2">
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        className="rounded border p-2"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button className="rounded bg-amber-500 py-1 px-2 hover:bg-amber-300">
                    Add Post
                </button>
            </form>
        </section>
    );
}

export default AddPost;
