import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazyImport } from "@/utils/lazyimport";
const { WebProduct } = lazyImport(
  () => import("@/features/product/pages/WebProduct"),
  "WebProduct"
);
const { Layout } = lazyImport(
  () => import("@/features/admin/layout/Layout"),
  "Layout"
);
const { DashboardAdmin } = lazyImport(
  () => import("@/features/dashboard/pages/DashboardAdmin"),
  "DashboardAdmin"
);
const { UserManagment } = lazyImport(
  () => import("@/features/admin/pages/UserManagment"),
  "UserManagment"
);
const { UnderProgress } = lazyImport(
  () => import("@/features/user/pages/UnderProgress"),
  "UnderProgress"
);
const { CreateComplaint } = lazyImport(
  () => import("@/features/user/components/CreateComplaint"),
  "CreateComplaint"
);
const { ProductManagment } = lazyImport(
  () => import("@/features/admin/pages/ProductManagment"),
  "ProductManagment"
);
const { Home } = lazyImport(() => import("@/features/user/pages/Home"), "Home");
const { Profile } = lazyImport(
  () => import("@/features/user/pages/Profile"),
  "Profile"
);
const { Login } = lazyImport(
  () => import("@/features/login/pages/LoginPage"),
  "Login"
);
const { Register } = lazyImport(
  () => import("@/features/register/pages/RegisterPage"),
  "Register"
);
const { UpdateComplaint } = lazyImport(
  () => import("@/features/admin/pages/UpdateComplaint"),
  "UpdateComplaint"
);
const { DetailComplaint } = lazyImport(
  () => import("@/features/admin/components/DetailComplaint"),
  "DetailComplaint"
);
const { ComplaintManagment } = lazyImport(
  () => import("@/features/admin/pages/ComplaintManagment"),
  "ComplaintManagment"
);
const { ContractManagment } = lazyImport(
  () => import("@/features/admin/pages/ContractManagment"),
  "ContractManagment"
);
const { AdminRoutes } = lazyImport(
  () => import("./AdminRoutes"),
  "AdminRoutes"
);
const { ProfilRoutes } = lazyImport(
  () => import("./ProfileRoute"),
  "ProfilRoutes"
);
const { AndroidProduct } = lazyImport(
  () => import("@/features/product/pages/AndroidProduct"),
  "AndroidProduct"
);
const { ConsultantProduct } = lazyImport(
  () => import("@/features/product/pages/ConsultantProduct"),
  "ConsultantProduct"
);
const { MaintanceProduct } = lazyImport(
  () => import("@/features/product/pages/MaintanceProduct"),
  "MaintanceProduct"
);
const { TagTypeManagment } = lazyImport(
  () => import("@/features/admin/pages/TagTypeManagment"),
  "TagTypeManagment"
);
const { LoginRoutes } = lazyImport(
  () => import("./LoginRoutes"),
  "LoginRoutes"
);
const { LandingRoutes } = lazyImport(
  () => import("./LandingRoutes"),
  "LandingRoutes"
);
const { DetailProduct } = lazyImport(
  () => import("@/features/product/components/DetailProduct"),
  "DetailProduct"
);
const { PortofoliotManagment } = lazyImport(
  () => import("@/features/admin/pages/PortofolioManagment"),
  "PortofoliotManagment"
);
const { PortofolioPage } = lazyImport(
  () => import("@/features/product/pages/PortofolioPage"),
  "PortofolioPage"
);
const { DetailPortofolio } = lazyImport(
  () => import("@/features/product/components/DetailPortofolio"),
  "DetailPortofolio"
);

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
