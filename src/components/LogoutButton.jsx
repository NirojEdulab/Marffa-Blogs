import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    };
  
    return (
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded-md">
        Logout
      </button>
    );
  };
  
  export default LogoutButton;
  