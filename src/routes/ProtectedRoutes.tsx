import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks";

export const ProtectedRoutes = ({ element }: { element: React.ReactNode }) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/" replace />;
};
