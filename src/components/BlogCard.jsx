/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const randomColors = [
  { bg: "bg-blue-100", text: "text-blue-600" },
  { bg: "bg-green-100", text: "text-green-600" },
  { bg: "bg-purple-100", text: "text-purple-600" },
  { bg: "bg-orange-100", text: "text-orange-600" },
  { bg: "bg-red-100", text: "text-red-600" },
  { bg: "bg-yellow-100", text: "text-yellow-600" },
  { bg: "bg-pink-100", text: "text-pink-600" },
  { bg: "bg-gray-100", text: "text-gray-600" },
];

const BlogCard = ({
  title,
  content,
  image,
  postId,
  author,
  createdAt,
  categories,
}) => {
  const getRandomColor = () => {
    // Select a random color from the array
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    return randomColors[randomIndex];
  };

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
            <h1 className="text-2xl font-bold text-primary mb-3">{title}</h1>
            <GoArrowUpRight size={24} />
          </span>
          <p className="text-base text-muted-foreground line-clamp-3">
            {content}
          </p>
        </div>

        {/* Dynamic Categories */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category, index) => {
              const { bg, text } = getRandomColor();
              return (
                <span
                  key={index}
                  className={`${bg} ${text} px-3 py-1 rounded-full text-xs font-bold`}
                >
                  {category}
                </span>
              );
            })}
          </div>
        )}
      </section>
    </Link>
  );
};

export default BlogCard;
