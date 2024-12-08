import { Link } from "react-router-dom";
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

const HorizontalBlogCard = ({
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

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  return (
    <Link to={`/post/${postId}`}>
      <div className="w-full rounded-lg overflow-hidden p-4 border">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-2/5 mb-4 md:mb-0 md:mr-4">
            <img
              src={image}
              alt={title}
              className="w-full h-auto md:h-full object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/5 flex flex-col justify-between">
            {/* Top Content */}
            <div>
              <p className="text-[#6941C6] font-medium text-sm mb-2">
                {author} • {formatDate(createdAt)}
              </p>

              <h2 className="text-2xl font-bold text-primary mb-3">{title}</h2>

              <p className="line-clamp-3 mb-4 text-muted-foreground">
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalBlogCard;
