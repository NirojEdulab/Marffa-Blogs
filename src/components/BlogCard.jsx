import { Link } from "react-router-dom";
import BlogCardImage from "../assets/replicate-prediction-pehyvxv9zsrj20ck9t7rze01hm.png";
import { GoArrowUpRight } from "react-icons/go";

const BlogCard = () => {
  return (
    <Link to={"/post/123"}>
      <section className="w-full p-4 border rounded-lg text-start h-full">
        <img
          src={BlogCardImage}
          alt="blog-image"
          className="rounded-lg w-full h-auto object-cover"
        />
        <p className="font-semibold text-base text-[#6941C6] mt-4">
          Author Name • 06th, Dec 2024
        </p>
        <div className="flex gap-2 mt-2 flex-col">
          <span className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary mb-3">
              Blog Heading
            </h1>
            <GoArrowUpRight size={24} />
          </span>
          <p className="text-base text-muted-foreground line-clamp-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            quae repellat laborum eveniet recusandae cumque enim vitae provident
            suscipit, fugiat quo nam possimus placeat pariatur! Placeat porro
            odit veniam quo velit aut magni ea necessitatibus accusamus delectus
            itaque, voluptatem fugit ratione excepturi. 
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
            Lifestyle
          </span>
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">
            Shopping
          </span>
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-bold">
            Lifestyle
          </span>
        </div>
      </section>
    </Link>
  );
};

export default BlogCard;
