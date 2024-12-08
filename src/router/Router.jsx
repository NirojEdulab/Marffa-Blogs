import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import HomePage from "@/page/HomePage";
import AllBlogPosts from "@/components/AllBlogPosts";
import BlogDetailPage from "@/page/BlogDetailPage";
import NoPageFound from "@/page/NoPageFound";
import NotAuthorized from "@/page/NotAuthorized"; // Import the new page
import Header from "@/components/Header";
import Loading from "@/components/Loading";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useKindeAuth();

  if (isLoading) {
    // Optional: Add a loading spinner or placeholder
    return <Loading />;
  }

  if (!isAuthenticated) {
    // Redirect to NotAuthorized page if not authenticated
    return <Navigate to="/not-authorized" replace />;
  }

  return children;
};

const Router = () => {
  const { isLoading } = useKindeAuth();
  const path = useLocation().pathname;

  if(isLoading){
    return <Loading />
  }

  return (
    <>
      {/* Show header only when authenticated */}
      {path !== '/not-authorized' && <Header />}

      <Routes>
        {/* Public Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Not Authorized Route */}
        <Route path="/not-authorized" element={<NotAuthorized />} />

        {/* Protected Routes */}
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <AllBlogPosts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/post/:postId"
          element={
            <ProtectedRoute>
              <BlogDetailPage />
            </ProtectedRoute>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
};

export default Router;