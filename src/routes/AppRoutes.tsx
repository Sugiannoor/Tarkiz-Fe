import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../features/user/pages/Home";
import Login from "../features/login/pages/LoginPage";
import Complain from "../features/complain/pages/Complain";
import Profile from "../features/user/pages/Profile";
import Register from "../features/register/pages/RegisterPage";
import WebProduct from "@/features/product/pages/WebProduct";
import Layout from "@/features/admin/layout/Layout";
import DashboardAdmin from "@/features/dashboard/pages/DashboardAdmin";

export const AppRoutes: React.FC = () => {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/keluhan" element={<Complain/>} />
        <Route path="/profile" element= {<Profile/>} />
        <Route path="/register" element= {<Register/>} />
        <Route path="/product/web" element= {<WebProduct/>} />
        <Route element= {<Layout/>}>
          <Route path="/dashboard" element={<DashboardAdmin/>}/>
        </Route>
      </Routes>
    </Router>
  );
};
