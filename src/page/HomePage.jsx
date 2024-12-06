import AllBlogPosts from "@/components/AllBlogPosts";
import RecentBlogs from "@/components/RecentBlogs";
import { Separator } from "@/components/ui/separator";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 py-4 px-10 mb-4">
        <p className="text-center text-7xl lg:text-9xl font-extrabold tracking-wider">
          MARFFA BLOGS
        </p>
      </div>
      <Separator />
      <section className="m-6">
        <RecentBlogs />
        <AllBlogPosts />
      </section>
    </>
  );
};

export default HomePage;
