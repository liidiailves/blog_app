import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className=" flex flex-col gap-6 lg:p-28 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-emilysCandy font-bold lg:text-5xl text-center">
          Welcome to Laiskliidu&apos;s blog
        </h1>
        <p className="text-sky-700 text-sm sm:text-md">
          This blog is a collection of the colors of my life: thoughts, quotes,
          music, dreams, and adventures with my beloved companions.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-sky-500 font-bold hover:underline hover:font-bold text-center"
        >
          View all posts
        </Link>
      </div>
      <div className="p-4 bg-gradient-to-r from-sky-100 to-sky-400 dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-800">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-4 flex flex-col gap-8 py-8">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 justify-between">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg font-semibold text-sky-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
