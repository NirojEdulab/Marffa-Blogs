import { Link, useNavigate } from "react-router-dom";
import { Shield, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const NotAuthorized = () => {
  const { login } = useKindeAuth();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black p-4">
      <div className="max-w-md w-full bg-white dark:bg-secondary shadow-lg rounded-xl p-8 text-center">
        <Shield className="mx-auto mb-6 text-red-500" size={64} />
        <h1 className="text-3xl font-bold mb-4 text-primary">Access Denied</h1>
        <p className="text-muted-foreground mb-6">
          You are not authorized to access this page. Please log in to continue.
        </p>
        <div className="flex justify-center flex-col w-full gap-2">
          <Button onClick={login}>
            <LogIn /> Login
          </Button>
          <Button onClick={() => navigate('/')} variant="ghost" className="w-full">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotAuthorized;
