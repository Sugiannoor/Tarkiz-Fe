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
import TagTypeManagment from "@/features/admin/pages/TagTypeManagment";
import { LoginRoutes } from "./LoginRoutes";
import { LandingRoutes } from "./LandingRoutes";
import { DetailProduct } from "@/features/product/components/DetailProduct";
import PortofoliotManagment from "@/features/admin/pages/PortofolioManagment";
import PortofolioPage from "@/features/product/pages/PortofolioPage";
import { DetailPortofolio } from "@/features/product/components/DetailPortofolio";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<LoginRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        {/* Regist */}
        <Route path="/register" element={<Register />} />
        {/* Landing Page  */}
        <Route element={<LandingRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/portofolio" element={<PortofolioPage />} />
          <Route path="/product/web" element={<WebProduct />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/portofolio/:id" element={<DetailPortofolio />} />
          <Route path="/product/android" element={<AndroidProduct />} />
          <Route path="/product/consultant" element={<ConsultantProduct />} />
          <Route path="/product/maintance" element={<MaintanceProduct />} />
        </Route>
        <Route path="/kontrak/print/:id" element={<ContractPrint />} />

        <Route element={<AdminRoutes element={<Layout />} />}>
          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="/user" element={<UserManagment />} />
          <Route path="/product" element={<ProductManagment />} />
          <Route path="/keluhan" element={<ComplaintManagment />} />
          <Route path="/kontrak" element={<ContractManagment />} />
          <Route path="/portofolios" element={<PortofoliotManagment />} />
          <Route path="/keluhan/edit/:idParams" element={<UpdateComplaint />} />
          <Route path="/tagtype" element={<TagTypeManagment />} />
        </Route>
        <Route element={<ProfilRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/keluhan/:id" element={<CreateComplaint />} />
          <Route
            path="/profile/keluhan/detail/:id"
            element={<DetailComplaint />}
          />
        </Route>
        <Route path="*" element={<UnderProgress />} />
      </Routes>
    </Router>
  );
};
