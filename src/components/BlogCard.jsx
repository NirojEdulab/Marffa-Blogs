import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const BlogCard = ({ title, content, image, postId, author, createdAt }) => {
  return (
    <Link to={`/post/${postId}`}>
      <section className="w-full p-4 border rounded-lg text-start h-full">
        <img
          src={image}
          alt="blog-image"
          className="rounded-lg w-full h-auto object-cover"
        />
        <p className="font-semibold text-base text-[#6941C6] mt-4">
          {author} • {createdAt}
        </p>
        <div className="flex gap-2 mt-2 flex-col">
          <span className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary mb-3">
              {title}
            </h1>
            <GoArrowUpRight size={24} />
          </span>
          <p className="text-base text-muted-foreground line-clamp-3">
            {content}
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
