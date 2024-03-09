import useAuth from "@/hooks/useAuth";
import { ROLES } from "@/utils/data";
import { Navigate, Outlet } from "react-router-dom";

export const LoginRoutes = () => {
  const { user } = useAuth();

  if (user?.role === ROLES.Admin) {
    return <Navigate to={"/dashboard"} replace />;
  } else if (user?.role === ROLES.Users) {
    return <Navigate to={"/"} replace />;
  } else {
    return <Outlet />;
  }
};
