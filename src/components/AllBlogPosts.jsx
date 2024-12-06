import { FaArrowRight } from "react-icons/fa";
import BlogCard from "./BlogCard";
import { Link, useLocation } from "react-router-dom";

const AllBlogPosts = () => {
  const location = useLocation();
  return (
    <section className="container mx-auto px-4 py-8">
      <p className="flex justify-between items-center">
        <span className="text-xl font-semibold mb-4 mt-2">All Blog Posts</span>
        {location.pathname !== "/posts" && (
          <Link
            to={"/posts"}
            className="flex justify-center items-center gap-2 bg-secondary px-4 py-2 rounded-xl font-semibold"
          >
            See All Posts <FaArrowRight />
          </Link>
        )}
      </p>

      <div className="flex justify-center items-center gap-4">
        <div className="grid  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default AllBlogPosts;
