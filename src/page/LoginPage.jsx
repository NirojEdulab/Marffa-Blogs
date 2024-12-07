import { useState } from "react";
import { useAuth } from "@/context/authContext.jsx";
import { Navigate, useNavigate } from "react-router-dom"; // Import Navigate for redirect
import axios from "axios";

const LoginPage = () => {
  const { isAuthenticated, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  // If user is already authenticated, redirect to home page
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, { email, password });
      const { accessToken, refreshToken } = response.data;

      // Save the tokens to localStorage
      await login(accessToken, refreshToken);

      navigate("/"); // Redirect to home page after successful login
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)] p-4">
      <div className="bg-secondary p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-primary">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-2 border border-secondary text-primary dark:text-secondary rounded-md"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-2 border border-secondary text-primary dark:text-secondary rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
