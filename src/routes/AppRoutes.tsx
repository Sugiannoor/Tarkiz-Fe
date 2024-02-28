import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../features/user/pages/Home";
import Login from "../features/login/pages/LoginPage";
import Complain from "../features/complain/pages/Complain";
import Profile from "../features/user/pages/Profile";
import Register from "../features/register/pages/RegisterPage";
import WebProduct from "@/features/product/pages/WebProduct";

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
      </Routes>
    </Router>
  );
};
