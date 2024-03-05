import useAuth from "@/hooks/useAuth";
import { ROLES } from "@/utils/data";
import { Navigate, Outlet } from "react-router-dom";


export const ProfilRoutes = () => {
  const { user } = useAuth();

  return user?.role === ROLES.Users ? <Outlet/> : <Navigate to="/login" replace />;
};
