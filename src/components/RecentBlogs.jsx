import BlogCard from "./BlogCard";
import HorizontalBlogCard from "./HorizontalBlogCard";

const RecentBlogs = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <p className="text-xl font-semibold mb-4 mt-2">Recent Blog Posts</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Blog Card - Full width on small screens, 2/3 on large screens */}
        <div className="lg:col-span-2">
          <BlogCard />
        </div>

        {/* Horizontal Blog Cards - Full width on small screens, 1/3 on large screens */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <HorizontalBlogCard />
          <HorizontalBlogCard />
          <HorizontalBlogCard />
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
