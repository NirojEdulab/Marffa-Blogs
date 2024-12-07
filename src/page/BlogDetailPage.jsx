import { Calendar, Tag, BookOpen } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import useSinglePost from "@/hooks/useSinglePost";
import { useParams } from "react-router-dom";
import useAllPosts from "@/hooks/useAllPosts";
import Loading from "@/components/Loading";

const BlogDetailPage = () => {
  const { postId } = useParams();
  const { post, loading, error } = useSinglePost(postId);
  const { posts, loading: postsLoading, error: postsError } = useAllPosts();

  if (loading || postsLoading) return <Loading />;
  if (error || postsError) return <p>{error || postsError}</p>;

  const otherPosts = posts.filter((item) => item._id !== postId);

  return (
    <div className="container mx-auto px-4 py-8 lg:flex">
      {/* Main Blog Content */}
      <div className="lg:w-2/3 lg:pr-8">
        {/* Blog Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary mb-4">{post.title}</h1>

          {/* Blog Meta Information */}
          <div className="flex items-center text-muted-foreground mb-4">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="mr-4">{post.createdAt}</span>
            <BookOpen className="w-5 h-5 mr-2" />
            <span>{post.author}</span>
          </div>

          {/* Blog Image */}
          <div className="mb-6">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none text-primary">
            <p>{post.content}</p>
          </div>

          {/* Tags */}
          <div className="flex items-center mt-6">
            <Tag className="w-5 h-5 mr-2 text-primary" />
            {/* <div className="space-x-2">
              {post?.category?.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="bg-primary text-secondary px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Related Blogs Sidebar */}
      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <h2 className="text-xl font-semibold mb-6 text-primary">
          Related Blogs
        </h2>
        <div className="flex flex-col justify-center items-center gap-y-4">
          {otherPosts && otherPosts.length > 0 ? (
            otherPosts.map((post) => (
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
    </div>
  );
};

export default BlogDetailPage;
