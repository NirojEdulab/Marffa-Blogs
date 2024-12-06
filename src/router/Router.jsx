import AllBlogPosts from "@/components/AllBlogPosts";
import Header from "@/components/Header";
import HomePage from "@/page/HomePage";
import NoPageFound from "@/page/NoPageFound";
import { BrowserRouter, matchPath, Route, Routes, useLocation } from "react-router-dom";
import BlogDetailPage from "@/page/BlogDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <HeaderWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<AllBlogPosts />} />
          <Route path="/post/:postId" element={<BlogDetailPage />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </HeaderWrapper>
    </BrowserRouter>
  );
};

// A wrapper to conditionally render the Header
const HeaderWrapper = ({ children }) => {
  const location = useLocation();

  // List of routes where the header is shown
  const routesWithHeader = ["/", "/posts", "/post"];
  const showHeader = routesWithHeader.some((route) =>
    matchPath({ path: route, end: false }, location.pathname)
  );

  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  );
};

export default Router;
