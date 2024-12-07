// src/hooks/useSinglePost.jsx
import { useState, useEffect } from "react";
import axios from "axios";

const useSinglePost = (postId) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs/blog/${postId}`); // Adjust with your API endpoint
        setPost(response.data.blog);
      } catch (err) {
        setError("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  return { post, loading, error };
};

export default useSinglePost;
