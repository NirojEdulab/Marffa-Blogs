import AllBlogPosts from "@/components/AllBlogPosts";
import Loading from "@/components/Loading";
import RecentBlogs from "@/components/RecentBlogs";
import { Separator } from "@/components/ui/separator";
import useAllPosts from "@/hooks/useAllPosts";

const HomePage = () => {

  const { posts, loading, error } = useAllPosts();

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="flex justify-center items-center gap-4 py-4 px-10 mb-4">
        <p className="text-center text-7xl lg:text-9xl font-extrabold tracking-wider">
          MARRFA BLOGS
        </p>
      </div>
      <Separator />
      <section className="m-6">
        <RecentBlogs posts={posts} />
        <AllBlogPosts posts={posts} />
      </section>
    </>
  );
};

export default HomePage;
