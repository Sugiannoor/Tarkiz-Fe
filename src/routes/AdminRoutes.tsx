import useAuth from "@/hooks/useAuth";
import { ROLES } from "@/utils/data";
import { Navigate } from "react-router-dom";

export const AdminRoutes = ({ element }: { element: React.ReactNode }) => {
  const { user } = useAuth();
  if (user?.role === ROLES.Users) {
    return <Navigate to="/" replace />;
  }
  return user?.role === ROLES.Admin ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};
