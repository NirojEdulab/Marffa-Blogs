import { FaArrowRight } from "react-icons/fa";
import BlogCard from "./BlogCard";
import { Link, useLocation } from "react-router-dom";
import useAllPosts from "@/hooks/useAllPosts";
import Loading from "./Loading";

const AllBlogPosts = () => {
  const location = useLocation();
  const { posts, loading, error } = useAllPosts();

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <section className="container mx-auto px-4 py-8">
      <p className="flex justify-between items-center">
        <span className="text-xl font-semibold mb-4 mt-2">All Blog Posts</span>
        {location.pathname !== "/posts" && (
          <Link
            to={"/posts"}
            className="flex justify-center items-center gap-2 bg-secondary px-4 py-1 rounded-xl font-semibold"
          >
            See All Posts <FaArrowRight />
          </Link>
        )}
      </p>

      <div className="flex justify-center items-center gap-4">
        <div className="grid  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard
                key={post._id} // Assuming posts have an '_id' field, adjust if necessary
                title={post.title}
                content={post.content}
                image={post.imageUrl} // Adjust according to your data structure
                postId={post._id} // Passing the postId for routing
                author={post.author}
                createdAt={post.createdAt}
              />
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBlogPosts;
