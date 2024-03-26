import useAuth from '@/hooks/useAuth'
import { ROLES } from '@/utils/data';
import { Navigate, Outlet } from 'react-router-dom';


export const LandingRoutes = () => {
    const {user} = useAuth();

    if (user?.role === ROLES.Admin) {
        return <Navigate to={"/dashboard"} replace />
    }else {
        return <Outlet/>
    }
}
