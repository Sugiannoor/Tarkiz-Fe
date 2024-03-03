import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebProduct from "@/features/product/pages/WebProduct";
import Layout from "@/features/admin/layout/Layout";
import DashboardAdmin from "@/features/dashboard/pages/DashboardAdmin";
import UserManagment from "@/features/admin/pages/UserManagment";
import { UnderProgress } from "@/features/user/pages/UnderProgress";
import CreateComplaint from "@/features/user/components/CreateComplaint";
import ProductManagment from "@/features/admin/pages/ProductManagment";
import { Home } from "@/features/user/pages/Home";
import Profile from "@/features/user/pages/Profile";
import Login from "@/features/login/pages/LoginPage";
import Register from "@/features/register/pages/RegisterPage";
import UpdateComplaint from "@/features/admin/pages/UpdateComplaint";
import DetailComplaint from "@/features/admin/components/DetailComplaint";

export const AppRoutes: React.FC = () => {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element= {<Register/>} />
        <Route path="/product/web" element= {<WebProduct/>} />
        <Route element= {<Layout/>}>
          <Route path="/dashboard" element={<DashboardAdmin/>}/>
          <Route path="/user" element={<UserManagment/>}/>
          <Route path="/product" element={<ProductManagment/>}/>
          <Route path="/keluhan/update" element={<UpdateComplaint/>}/>
        </Route>
        <Route path="/profile" element= {<Profile/>} />
        <Route path="/profile/keluhan/:id" element= {<CreateComplaint/>} />
        <Route path="/profile/keluhan/detail/:id" element= {<DetailComplaint/>} />
        <Route path="*" element={<UnderProgress />} />
      </Routes>
      
    </Router>
  );
};
