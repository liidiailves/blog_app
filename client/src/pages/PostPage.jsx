import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();

        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch("/api/post/getposts?limit=3");
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Something went wrong. Please try again later.</p>
      </div>
    );

  if (!post)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No posts found.</p>
      </div>
    );

  return (
    <main className="p-4 flex flex-col max-w-6xl mx-auto min-h-screen clearfix">
      <h1 className="text-3xl mt-10 p-2 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {post.title}
      </h1>
      <div className="flex justify-between p-2 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span className="self-center">
          {new Date(post.createdAt).toLocaleDateString()}
        </span>
        <Link to={`/search?category=${post.category}`} className="self-center">
          <Button color="gray" pill size="xs">
            {post.category}
          </Button>
        </Link>
      </div>
      {post.images && post.images.length > 0 && (
        <div className="mt-10 p-2 max-w-2xl mx-auto w-full">
          {post.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${post.title}-${index}`}
              className="mb-4 w-full max-h-[400px] object-contain"
            />
          ))}
        </div>
      )}
      <div
        className="p-2 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <div className="max-w-4xl mx-auto w-full">
        <CallToAction />
      </div>
      <CommentSection postId={post._id} />

      <div className="flex flex-col justify-center items-center mb-4">
        <h2 className="text-xl mt-4 mb-4">Recent posts</h2>
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
