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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = localStorage.getItem("vite-ui-theme") || "light";

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

  return (
    <header>
      <nav className="flex justify-between items-center gap-4 py-4 px-10 shadow-md">
        <Link to={"/"}>
          <div className="flex gap-2 justify-center items-center">
            <GiPaperBoat size={48} />
            <h4 className="text-xl font-bold text-primary hidden sm:block">
              MARFFA BLOGS
            </h4>
          </div>
        </Link>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <div className="relative">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
              <SearchIcon className="h-4 w-4" />
            </div>
            <Input
              id="search"
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8"
            />
          </div>
        </div>
        <div className="hidden justify-center items-center gap-2 sm:flex">
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
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
