import AllBlogPosts from "@/components/AllBlogPosts";
import Header from "@/components/Header";
import HomePage from "@/page/HomePage";
import NoPageFound from "@/page/NoPageFound";
import BlogDetailPage from "@/page/BlogDetailPage";
import LoginPage from "@/page/LoginPage";
import RegisterPage from "@/page/RegisterPage";
import { BrowserRouter, matchPath, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";

const Router = () => {
  return (
    <HeaderWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Protected Blog Routes */}
        <Route
          path="/post/:postId"
          element={
            <ProtectedRoute allowHome={true}>
              <BlogDetailPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/posts"
          element={
            <ProtectedRoute allowHome={true}>
              <AllBlogPosts />
            </ProtectedRoute>
          }
        />

        {/* Authentication Routes */}
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <RegisterPage />
            </GuestRoute>
          }
        />

        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </HeaderWrapper>
  );
};

// A wrapper to conditionally render the Header
const HeaderWrapper = ({ children }) => {
  const location = useLocation();
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

// Protected Route to check authentication
const ProtectedRoute = ({ children, allowHome = false }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    // If not authenticated and not on home page, redirect to login
    if (!allowHome || location.pathname !== "/") {
      return <Navigate to="/login" />;
    }
  }

  return children;
};

// Route for guests (not logged in users)
const GuestRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    // If authenticated, redirect to home
    return <Navigate to="/" />;
  }

  return children;
};

export default Router;