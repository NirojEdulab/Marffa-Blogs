import BlogCard from "./BlogCard";
import HorizontalBlogCard from "./HorizontalBlogCard";

const RecentBlogs = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-2">
      <p className="text-xl font-semibold mb-4 mt-2">Recent Blog Posts</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Blog Card - Full width on small screens, 2/3 on large screens */}
        <div className={posts.length > 1 ? "lg:col-span-2" : "col-span-1"}>
          <BlogCard
            title={posts[0].title}
            content={posts[0].content}
            image={posts[0].imageUrl}
            postId={posts[0]._id}
            author={posts[0].author}
            createdAt={posts[0].createdAt}
            categories={posts[0].categories}
          />
        </div>

        {/* Horizontal Blog Cards - Full width on small screens, 1/3 on large screens */}
        {posts.length > 1 && (
          <div className="lg:col-span-1 flex flex-col gap-6">
            {posts.slice(1, 4).map((post) => (
              <HorizontalBlogCard
                key={post._id}
                title={post.title}
                content={post.content}
                image={post.imageUrl}
                postId={post._id}
                author={post.author}
                createdAt={post.createdAt}
                categories={post.categories}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentBlogs;
