import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-white dark:bg-black p-4 transition-colors duration-300">
      <div
        className="bg-white dark:bg-secondary 
        shadow-2xl rounded-2xl p-6 md:p-8 
        text-center 
        w-full max-w-md
        border border-secondary dark:border-secondary
        transition-colors duration-300"
      >
        <AlertTriangle
          className="mx-auto mb-4 md:mb-6 
            text-red-500 dark:text-red-400"
          size={80}
          md:size={100}
          strokeWidth={1.5}
        />

        <h1
          className="text-3xl md:text-4xl 
          font-extrabold 
          text-gray-800 dark:text-gray-100 
          mb-3 md:mb-4"
        >
          404 - Page Not Found
        </h1>

        <p
          className="text-base md:text-lg 
          text-gray-600 dark:text-gray-300 
          mb-5 md:mb-6"
        >
          Oops! The page you're looking for seems to have wandered off into the
          digital wilderness.
        </p>

        <div
          className="flex flex-col md:flex-row 
          justify-center 
          space-y-3 md:space-y-0 md:space-x-4"
        >
          <Link
            to={"/"}
            className="flex items-center justify-center 
              bg-blue-500 text-white 
              dark:bg-blue-600 
              px-4 py-2 md:px-6 md:py-3 
              rounded-lg 
              hover:bg-blue-600 dark:hover:bg-blue-500 
              transition-colors"
          >
            <Home className="mr-2" size={20} />
            Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center 
              bg-gray-200 text-gray-700 
              dark:bg-gray-700 dark:text-gray-200 
              px-4 py-2 md:px-6 md:py-3 
              rounded-lg 
              hover:bg-gray-300 dark:hover:bg-gray-600 
              transition-colors"
          >
            Go Back
          </button>
        </div>

        {/* Responsive Illustration */}
        <div className="mt-6 md:mt-8 opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 200"
            className="mx-auto max-w-full h-24 md:h-auto"
          >
            <path
              d="M50,150 Q200,50 350,150"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="4"
              strokeDasharray="10,10"
            />
            <circle cx="200" cy="150" r="20" fill="#EF4444" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NoPageFound;
