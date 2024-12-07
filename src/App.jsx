import { useEffect } from "react";
import Router from "./router/Router";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // Set the Authorization header for subsequent requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <main>
      <Router />
    </main>
  );
}

export default App;
