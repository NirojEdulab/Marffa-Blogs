import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const KINDE_CLIENT_ID = import.meta.env.VITE_KINDE_CLIENT_ID
const KINDE_DOMAIN = import.meta.env.VITE_KINDE_DOMAIN

if (!KINDE_CLIENT_ID || !KINDE_DOMAIN) {
  throw new Error("Missing Kinde configuration in .env file")
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <KindeProvider
        clientId={`${import.meta.env.VITE_KINDE_CLIENT_ID}`}
        domain={`${import.meta.env.VITE_KINDE_DOMAIN}`}
        logoutUri={`${import.meta.env.VITE_CLIENT_URL}`}
        redirectUri={`${import.meta.env.VITE_CLIENT_URL}`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {/* <AuthProvider> */}
            <App />
          {/* </AuthProvider> */}
        </ThemeProvider>
      </KindeProvider>
    </BrowserRouter>
  </StrictMode>
);
