import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";

import type { Post } from "../context/BlogContext";
import { useBlog } from "../context/BlogContext";

import HeartFillIcon from "../assets/heart-fill.svg";
import HeartNoFillIcon from "../assets/heart-nofill.svg";
import PencilIcon from "../assets/pencil.svg";
import TrashIcon from "../assets/trash.svg";

function PostsPage() {
    const { postId } = useParams();
    const { posts, likePost } = useBlog();

    const [post, setPost] = useState<Post | undefined>();
    const [error, setError] = useState<string | undefined>(undefined);
    useEffect(() => {
        setPost(undefined);
        setError(undefined);
        if (postId) {
            // zod transform string postId to integer
            const parseResult = z
                .string()
                .transform((val) => parseInt(val, 10))
                .safeParse(postId);
            if (parseResult.success) {
                // console.log(parseResult.data);

                const id = parseResult.data;

                const index = posts.findIndex((post) => post.id === id);

                if (index !== -1) {
                    setPost(posts[index]);
                } else {
                    console.error(`Post with PostId '${postId}' not found.`);
                    setError(`Post with PostId '${postId}' Not Found.`);
                }
            } else {
                console.error("Invalid Post Id.");
                setError("Invalid Post Id.");
            }
        }

        return () => {
            setPost(undefined);
            setError(undefined);
        };
    }, [postId, posts]);

    return (
        <>
            <Link
                className="text-blue-600 underline hover:text-blue-400"
                to={import.meta.env.BASE_URL}
            >
                Go to Home Page
            </Link>
            <section className="flex w-3/4 flex-col items-start justify-start rounded border bg-amber-200 px-4 py-2">
                <section className="flex w-full items-center justify-between">
                    <span className="rounded border-2 border-amber-600 bg-white py-1 px-2 text-xl font-bold text-amber-600">
                        Posts - {postId}
                    </span>
                    <div className="flex gap-1">
                        <button className="rounded-full bg-white p-1 hover:bg-gray-50">
                            <img src={PencilIcon} alt="edit icon" />
                        </button>
                        <button className="rounded-full bg-white p-1 hover:bg-red-50">
                            <img
                                style={{
                                    filter: "invert(13%) sepia(89%) saturate(5675%) hue-rotate(358deg) brightness(101%) contrast(73%)",
                                }}
                                src={TrashIcon}
                                alt="delete icon"
                            />
                        </button>
                    </div>
                </section>
                <div className="p-2" />
                {error && (
                    <section className="my-2 flex w-full items-center justify-center gap-2 rounded border-2 border-red-500 p-1 text-xl ">
                        <span className="rounded bg-red-500 p-1 font-bold text-white">
                            ERROR:
                        </span>
                        <span className="text-red-500">{error}</span>
                    </section>
                )}
                {post && (
                    <article className="flex flex-col justify-start gap-4">
                        <header className="flex items-center justify-start gap-2">
                            <h2 className="text-2xl underline">{post.title}</h2>
                            <button
                                className={[
                                    "flex w-fit items-center justify-center rounded border-2 bg-white",
                                    post.like
                                        ? "border-red-500"
                                        : "border-red-200",
                                ].join(" ")}
                                onClick={() => {
                                    if (likePost) {
                                        likePost(post.id, !post.like);
                                    }
                                }}
                            >
                                <img
                                    className="w-8"
                                    src={
                                        post.like
                                            ? HeartFillIcon
                                            : HeartNoFillIcon
                                    }
                                    alt="like"
                                />
                            </button>
                        </header>
                        <p className="text-justify text-lg">{post.content}</p>
                    </article>
                )}
            </section>
        </>
    );
}

export default PostsPage;
