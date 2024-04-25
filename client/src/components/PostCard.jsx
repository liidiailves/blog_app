import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full border border-sky-500 dark:border-sky-800 hover:border-2 overflow-hidden rounded-lg sm:w-[300px] transition-all">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[200px] w-full object-cover group-hover:h-[180px] transition-all duration-300 z-20"
        />
        <div className="p-2 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
          <span className="italic text-sm">{post.category}</span>
          <Link
            to={`/post/${post.slug}`}
            className="z-10 group-hover:bottom-0 absolute bottom-[-140px] left-0 right-0 border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none"
          >
            Read post
          </Link>
        </div>
      </Link>
    </div>
  );
}
