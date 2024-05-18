import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import PostCard from "../components/PostCard";

export default function Love() {
  const [recentPosts, setRecentPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts?limit=3&category=love");
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRecentPosts();
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="relative flex flex-col md:flex-row flex-grow min-h-screen md:min-h-0">
        {/* Background image for small screens */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center md:hidden"
          style={{ backgroundImage: 'url("/assets/love.jpg")' }}
        >
          <div className="absolute inset-0 dark:bg-sky-800 bg-opacity-70 dark:bg-opacity-30"></div>
        </div>

        {/* Main content */}
        <div className="relative flex flex-col gap-2 p-2 max-w-md mx-auto md:mx-auto md:my-auto md:bg-opacity-100 md:bg-transparent rounded-lg md:rounded-none z-10 flex-grow md:items-center md:justify-center md:ml-40">
          <div className="flex flex-col md:items-center">
            <p className="text-md text-sky-700 dark:text-sky-400 flex flex-col text-center">
              Jack Russell Terrier
            </p>
            <h1 className="text-3xl font-sedan font-semibold text-center my-2">
              Lexberry&apos;s
              <br />
              <span className="md:hidden">Snow Star Love</span>
              <span className="hidden md:inline">Snow Star</span>
              <br className="hidden md:block" />
              <span className="hidden md:inline">Love</span>
            </h1>
          </div>
          <div className="flex flex-col mt-auto md:items-center">
            <p className="text-md text-sky-700 dark:text-sky-500 flex flex-col text-center">
              Born on 16.02.2015
            </p>
            <Link
              to="https://register.kennelliit.ee/index.php?page=dogCard&dogId=204097"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md sm:text-lg text-sky-500 font-semibold hover:underline hover:text-sky-600 hover:font-bold text-center"
            >
              Love in Estonian Kennel Club Register
            </Link>
            <Link
              to="https://www.lexberrys.eu/?page_id=629"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md sm:text-lg text-sky-500 font-semibold hover:underline hover:text-sky-600 hover:font-bold text-center"
            >
              Love&apos;s family in kennel Lexberry&apos;s homepage
            </Link>
          </div>
        </div>

        {/* Background image for large screens */}
        <div className="flex-1 hidden md:flex items-center justify-center relative">
          <img
            src="/assets/love.jpg"
            alt="Background"
            className="h-full max-h-[600px] object-contain dark:opacity-70"
          />
        </div>
      </div>

      {/* Recent posts section */}
      <div className="relative flex flex-col justify-center items-center mb-4 md:mt-8">
        <h2 className="text-xl mt-4 mb-4">Recent posts</h2>
        {loading ? (
          <Spinner size="xl" />
        ) : error ? (
          <p>Something went wrong. Please try again later.</p>
        ) : (
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            {recentPosts && recentPosts.length > 0 ? (
              recentPosts.map((post) => <PostCard key={post._id} post={post} />)
            ) : (
              <p>No recent posts available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
