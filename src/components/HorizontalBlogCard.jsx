import { Link } from "react-router-dom";
import BlogCardImage from "../assets/replicate-prediction-pehyvxv9zsrj20ck9t7rze01hm.png";

const HorizontalBlogCard = () => {
  return (
    <Link to={"/post/123"}>
      <div className="w-full rounded-lg overflow-hidden p-4 border">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-2/5 mb-4 md:mb-0 md:mr-4">
            <img
              src={BlogCardImage}
              alt="blog-image"
              className="w-full h-auto md:h-full object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-3/5 flex flex-col justify-between">
            {/* Top Content */}
            <div>
              <p className="text-[#6941C6] font-medium text-sm mb-2">
                Author Name • 06th, Dec 2024
              </p>

              <h2 className="text-2xl font-bold text-primary mb-3">
                Blog Heading
              </h2>

              <p className="line-clamp-3 mb-4 text-muted-foreground">
                Blog desc Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Vel deserunt doloribus, corporis perspiciatis corrupti
                assumenda. Possimus sint voluptate ut harum? Soluta consequatur
                suscipit quam ducimus, porro harum aliquam dolore corporis?
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                Lifestyle
              </span>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                Shopping
              </span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                Lifestyle
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalBlogCard;