import { Routes, Route, Navigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import HomePage from "@/page/HomePage";
import AllBlogPosts from "@/components/AllBlogPosts";
import BlogDetailPage from "@/page/BlogDetailPage";
import NoPageFound from "@/page/NoPageFound";
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
    // Redirect to home if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};

const Router = () => {
  const { isLoading } = useKindeAuth();
  if(isLoading){
    return <Loading />
  }

  return (
    <>
      {/* Show header only when authenticated */}
      <Header />

      <Routes>
        {/* Public Route */}
        <Route path="/" element={<HomePage />} />

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
