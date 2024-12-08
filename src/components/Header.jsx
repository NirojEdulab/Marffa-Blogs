import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { GiPaperBoat } from "react-icons/gi";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./theme-provider";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { useAuth } from "@/context/authContext";
import useAllPosts from "@/hooks/useAllPosts";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = localStorage.getItem("vite-ui-theme") || "light";
  // const { isAuthenticated, logout } = useAuth();
  const { isAuthenticated } = useKindeAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { posts, loading, error } = useAllPosts();
  const { login, register, logout } = useKindeAuth();

  const { setTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter posts based on title
    if (term) {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPosts(filtered.slice(0, 10)); // Limit to 10 results
    } else {
      setFilteredPosts([]); // Clear filtered posts when search is empty
    }
  };

  if (loading) return;
  if (error) return;

  return (
    <header>
      <nav className="flex justify-between items-center gap-4 py-4 px-10 shadow-md">
        <Link to={"/"}>
          <div className="flex gap-2 justify-center items-center">
            <GiPaperBoat size={48} />
            <h4 className="text-xl font-bold text-primary hidden sm:block">
              MARRFA BLOGS
            </h4>
          </div>
        </Link>

        {/* Search */}
        {isAuthenticated && (
          <div className="relative w-full max-w-sm">
            <div className="relative">
              <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                <SearchIcon className="h-4 w-4" />
              </div>
              <Input
                id="search"
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8"
                onChange={handleSearch}
                value={searchTerm}
              />
            </div>

            {/* Search Results */}
            {searchTerm && filteredPosts.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden max-h-64 overflow-y-auto">
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post._id}
                      to={`/post/${post._id}`}
                      onClick={() => setSearchTerm("")}
                      className="block"
                    >
                      <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group">
                        <div className="flex items-center justify-between space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-primary transition-colors">
                              {post.title}
                            </p>
                            {post.author && (
                              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                by {post.author}
                              </p>
                            )}
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {filteredPosts.length === 10 && (
                  <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 text-center border-t border-gray-100 dark:border-gray-700">
                    Showing top 10 results. Refine your search for more.
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div className="hidden justify-center items-center gap-2 sm:flex">
          {!isAuthenticated ? (
            <>
              <Button onClick={register}>Register</Button>
              <Button onClick={login} variant="ghost">Log In</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={logout}>
                Logout
              </Button>
            </>
          )}
          <ModeToggle />
        </div>
        <button
          className="p-2 sm:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm dark:bg-black/95"
          >
            <div className="flex flex-col h-full justify-center items-center space-y-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex flex-col space-y-6 justify-center items-center gap-y-6"
              >
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="text-3xl font-bold hover:text-primary transition-colors"
                >
                  Home
                </Link>

                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/"
                      onClick={toggleMenu}
                      className="text-3xl font-bold hover:text-primary transition-colors"
                    >
                      Login
                    </Link>

                    <Link
                      to="/"
                      onClick={toggleMenu}
                      className="text-3xl font-bold hover:text-primary transition-colors"
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <p
                      className="text-3xl font-bold cursor-pointer"
                      onClick={() => {
                        logout();
                        toggleMenu();
                      }}
                    >
                      Logout
                    </p>
                  </>
                )}

                <Switch
                  checked={theme == "dark" ? true : false}
                  onCheckedChange={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 180 }}
                transition={{ delay: 0.3 }}
                onClick={toggleMenu}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Separator />
    </header>
  );
};

export default Header;
