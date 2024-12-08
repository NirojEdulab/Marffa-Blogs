// src/hooks/useAllPosts.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const useAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getToken } = useKindeAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const accessToken = await getToken();
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setPosts(response.data);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [getToken]);

  return { posts, loading, error };
};

export default useAllPosts;
