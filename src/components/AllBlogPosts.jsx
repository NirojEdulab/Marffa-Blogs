import { FaArrowRight, FaSort } from "react-icons/fa";
import BlogCard from "./BlogCard";
import { Link, useLocation } from "react-router-dom";
import useAllPosts from "@/hooks/useAllPosts";
import Loading from "./Loading";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const AllBlogPosts = () => {
  const location = useLocation();
  const { posts, loading, error } = useAllPosts();

  const [filterCategory, setFilterCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc"); // default to newest first

  // Extract unique categories from posts, flattening the categories array
  const categories = posts
    ? ["all", ...new Set(posts.flatMap((post) => post.categories || []))]
    : ["all"];

  // Filter and Sort posts
  const processedPosts = posts
    ? (() => {
        // First, filter by category
        const filteredPosts =
          filterCategory === "all"
            ? posts
            : posts.filter(
                (post) =>
                  post.categories && post.categories.includes(filterCategory)
              );

        // Then, sort by date
        return filteredPosts.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return sortOrder === "desc"
            ? dateB.getTime() - dateA.getTime()
            : dateA.getTime() - dateB.getTime();
        });
      })()
    : [];

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <span className="text-xl font-semibold text-center md:text-left w-full">All Blog Posts</span>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center md:justify-end">
          {location.pathname !== "/posts" ? (
            <Link
              to={"/posts"}
              className="flex justify-center items-center gap-2 bg-secondary px-4 py-1 rounded-xl font-semibold text-center"
            >
              See All Posts <FaArrowRight />
            </Link>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center md:justify-end">
              {/* Category Filter Dropdown */}
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Filter by Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all"
                        ? "All Categories"
                        : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-sm border px-2 py-2 rounded-md w-full md:w-auto">
                  <FaSort />
                  Sort by Date
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex items-center gap-2 border px-2 py-1 rounded-md w-full md:w-auto">
                  <DropdownMenuItem
                    onClick={() => setSortOrder("desc")}
                    className={sortOrder === "desc" ? "bg-secondary" : ""}
                  >
                    Newest First
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSortOrder("asc")}
                    className={sortOrder === "asc" ? "bg-secondary" : ""}
                  >
                    Oldest First
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {processedPosts.length > 0 ? (
            processedPosts.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                content={post.content}
                image={post.imageUrl}
                postId={post._id}
                author={post.author}
                createdAt={post.createdAt}
                categories={post.categories}
              />
            ))
          ) : (
            <p className="col-span-full text-center">No posts available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBlogPosts;