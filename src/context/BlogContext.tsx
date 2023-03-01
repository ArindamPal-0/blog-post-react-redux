import { createContext, useContext, useState } from "react";
import { z } from "zod";

const ZPost = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
    like: z.boolean().optional(),
});

export type Post = z.infer<typeof ZPost>;

const ZAddPost = ZPost.pick({ title: true, content: true });

export type AddPost = z.infer<typeof ZAddPost>;

const ZEditPost = ZAddPost.partial().merge(ZPost.pick({ id: true }));

type EditPost = z.infer<typeof ZEditPost>;

type BlogContextType = {
    posts: Post[];
    addPost?: (post: AddPost) => void;
    editPost?: (post: EditPost) => void;
    deletePost?: (postId: number) => void;
    likePost?: (postId: number, like: boolean) => void;
};

const BlogContext = createContext<BlogContextType>({
    posts: [],
});

const initialPosts: Post[] = [
    {
        id: 1,
        title: "Structure of a Typescript Error",
        content: `Understanding TypeScript errors can be extremely tough. They have a reputation for having complicated wording, and can be extraordinarily long.
        So, if you're looking to improve your TypeScript errors - aim to always compare objects to objects, instead of functions to functions. This means you should prefer typing return types and parameters over giving a type to the function itself.`,
        like: false,
    },
    {
        id: 2,
        title: "When should you use Zod?",
        content: `When your app has inputs you don't trust, use Zod.
        When your app has inputs you trust but don't control, validate them with Zod.        
        When your app has inputs you trust and control, I usually don't validate them with Zod.`,
        like: false,
    },
    {
        id: 3,
        title: "Rewriting TypeScript in Rust? You'd have to be...",
        content: `For the last few months, Donny (or kdy1 on GitHub) has been walking a long, lonely road. The author of swc, a native-speed replacement for Babel, has his eyes on another goal: rewriting TypeScript in Rust.
        stc is his attempt. It's a drop-in replacement for tsc supporting "all typing and type inference", including all the complexity of generics, conditional types and template literals.`,
        like: false,
    },
    {
        id: 4,
        title: "Announcing TanStack Query v4",
        content: `We're excited to announce the next version of TanStack Query, previously known as react-query 🎉. The rebranding and restructuring to a monorepo now finally allows us to bring the joy of react-query to other frameworks, like vue, svelte or solid.`,
        like: false,
    },
    {
        id: 5,
        title: "Every Important HTTP Status Code Explained",
        content: `HTTP status codes are vital to creating an API and in this article I will explain all the important HTTP status codes and when to use them.`,
        like: false,
    },
];

let postsCount = initialPosts.length;

export default function BlogContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [posts, setPosts] = useState<Post[]>(initialPosts);

    function addPost(post: AddPost) {
        const parsedResult = ZAddPost.safeParse(post);

        if (parsedResult.success) {
            postsCount++;
            setPosts([
                ...posts,
                { ...parsedResult.data, id: postsCount, like: false },
            ]);
        } else {
            console.error("Invalid Post object passed.");
        }
    }

    function editPost(editPost: EditPost) {
        const parsedResult = ZEditPost.safeParse(editPost);

        if (parsedResult.success) {
            const parsedData = parsedResult.data;
            if (parsedData.title || parsedData.content) {
                const index = posts.findIndex(
                    (value) => value.id === parsedData.id
                );

                if (index !== -1) {
                    // TODO: check if valid
                    posts.splice(index, 1, { ...posts[index], ...parsedData });

                    setPosts([...posts]);
                }
            } else {
                console.error("Pass atleast new title or content to edit.");
            }
        }
    }

    function deletePost(postId: Post["id"]) {
        const parsedResult = z.number().safeParse(postId);

        if (parsedResult.success) {
            const parsedPostId = parsedResult.data;

            const index = posts.findIndex((value) => value.id === parsedPostId);

            if (index !== -1) {
                // TODO: check if valid
                posts.splice(index, 1);

                setPosts([...posts]);
            }
        }
    }

    function likePost(postId: Post["id"], like: boolean) {
        const parsedResult = ZPost.pick({ id: true, like: true })
            .required()
            .safeParse({ id: postId, like });

        if (parsedResult.success) {
            const parsedData = parsedResult.data;

            const index = posts.findIndex(
                (value) => value.id === parsedData.id
            );

            if (index !== -1) {
                // TODO: check if valid
                posts.splice(index, 1, {
                    ...posts[index],
                    like: parsedData.like,
                });

                setPosts([...posts]);
            }
        }
    }

    return (
        <BlogContext.Provider
            value={{ posts, addPost, editPost, deletePost, likePost }}
        >
            {children}
        </BlogContext.Provider>
    );
}

export const useBlog = () => useContext(BlogContext);
