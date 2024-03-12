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
import ComplaintManagment from "@/features/admin/pages/ComplaintManagment";
import ContractManagment from "@/features/admin/pages/ContractManagment";
import { AdminRoutes } from "./AdminRoutes";
import { ProfilRoutes } from "./ProfileRoute";
import AndroidProduct from "@/features/product/pages/AndroidProduct";
import ConsultantProduct from "@/features/product/pages/ConsultantProduct";
import MaintanceProduct from "@/features/product/pages/MaintanceProduct";
import { ContractPrint } from "@/features/admin/components/ContractPrint";

export const AppRoutes: React.FC = () => {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element= {<Register/>} />
        <Route path="/product/web" element= {<WebProduct/>} />
        <Route path="/product/android" element= {<AndroidProduct/>} />
        <Route path="/product/consultant" element= {<ConsultantProduct/>} />
        <Route path="/product/maintance" element= {<MaintanceProduct/>} />
        <Route path="/kontrak/print/:id" element= {<ContractPrint/>} />
        <Route element={<Layout/>}>
          <Route path="/dashboard" element={<DashboardAdmin/>}/>
          <Route path="/user" element={<UserManagment/>}/>
          <Route path="/product" element={<ProductManagment/>}/>
          <Route path="/keluhan" element={<ComplaintManagment/>}/>
          <Route path="/kontrak" element={<ContractManagment/>}/>
          <Route path="/keluhan/edit/:idParamsc" element={<UpdateComplaint/>}/>
        </Route>
        <Route >
        <Route path="/profile" element= {<Profile/>} />
        <Route path="/profile/keluhan/:id" element= {<CreateComplaint/>} />
        <Route path="/profile/keluhan/detail/:id" element= {<DetailComplaint/>} />
        <Route path="*" element={<UnderProgress />} />
        </Route>
      </Routes>
      
    </Router>
  );
};
