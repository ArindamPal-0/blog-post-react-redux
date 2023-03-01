import AddPost from "../components/AddPost";
import PostsList from "../components/PostsList";

function HomePage() {
    return (
        <section className="flex w-full flex-col items-center justify-start gap-2">
            <AddPost />
            <PostsList />
        </section>
    );
}

export default HomePage;
