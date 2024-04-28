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
      <div className="relative flex flex-col min-h-screen justify-between bg-sky-100 dark:bg-sky-700">
        <img
          src="/assets/bg-image-home.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-sky-100 dark:bg-sky-700 bg-opacity-30 dark:bg-opacity-40"></div>
        <div className="flex-grow"></div>
        <div className="w-full mx-auto p-6 sm:pt-8 sm:px-20 bg-sky-100 dark:bg-sky-800 bg-opacity-60 shadow-xl z-10">
          <h1 className="text-4xl font-emilysCandy font-semibold text-sky-800 dark:text-sky-200 lg:text-6xl text-center">
            Welcome to Laiskliidu&apos;s blog
          </h1>
          <p className="mt-6 text-lg text-sky-700 dark:text-sky-300 text-center">
            This blog is a collection of the colors of my life: <br /> thoughts,
            quotes, music, dreams, and adventures with my beloved companions.
          </p>
          <div className="mt-8 text-start">
            <Link
              to="/search"
              className="text-lg text-sky-500 dark:text-sky-400 font-semibold hover:underline hover:text-sky-600 dark:hover:text-sky-500 hover:font-bold"
            >
              View all posts
            </Link>
          </div>
        </div>

        {/* Additional spacer if needed to balance */}
        <div className="mb-10 md:mb-0"></div>
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
