import useAuth from "@/hooks/useAuth";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { BiLogOut } from "react-icons/bi";
import { FaCreditCard, FaHistory, FaHome, FaUserTimes } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineScreenShare } from "react-icons/md";
import { Link } from "react-router-dom";

export const SidebarDesktop = () => {
  const { logout } = useAuth();
  return (
    <>
      <Card className="h-[95vh] mx-4 p-4 rounded shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 flex items-center gap-4 p-4">
          <img
            loading="lazy"
            src="/tarkiz-logo.webp"
            alt="brand"
            className="h-14 w-28"
          />
        </div>
        <List>
          <hr className="my-2 border-blue-gray-50" />
          <Link to={"/dashboard"}>
            <ListItem className="font-poppins p-5">
              <ListItemPrefix>
                <FaHome className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <Link to={"/user"}>
            <ListItem className="font-poppins p-5">
              <ListItemPrefix>
                <IoStatsChart className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen User
            </ListItem>
          </Link>
          <Link to={"/product"}>
            <ListItem className="font-poppins p-5">
              <ListItemPrefix>
                <MdOutlineScreenShare className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen Product
            </ListItem>
          </Link>
          <Link to={"/keluhan"}>
            <ListItem className="font-poppins p-5">
              <ListItemPrefix>
                <FaUserTimes className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen Keluhan
            </ListItem>
          </Link>
          <Link to={"/kontrak"}>
            <ListItem className="font-poppins p-5">
              <ListItemPrefix>
                <FaCreditCard className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen Kontrak
            </ListItem>
          </Link>
          <Link to={"/portofolios"}>
            <ListItem className="font-poppins p-5">
              <ListItemPrefix>
                <FaHistory className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen Portofolio
            </ListItem>
          </Link>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem className="font-poppins p-5" onClick={logout}>
            <ListItemPrefix>
              <BiLogOut className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
};
