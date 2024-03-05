import {
  Card,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaBars, FaCreditCard, FaHome, FaUserTimes } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineScreenShare } from "react-icons/md";
import { Link } from "react-router-dom";

export const SidebarMobile = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  return (
    <>
      {isDrawer ? "" : <FaBars className="text-2xl text-white cursor-pointer" onClick={() => setIsDrawer(!isDrawer)} />}
      <Drawer
        placeholder={""}
        open={isDrawer}
        onClose={() => setIsDrawer(!isDrawer)}
      >
        <Card placeholder={""} className="h-[100vh] p-4 rounded shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 flex items-center gap-4 p-4">
            <img src="/tarkiz-logo.webp" alt="brand" className="h-14 w-28" />
          </div>
          <List placeholder={""}>
            <hr className="my-2 border-blue-gray-50" />
            <Link to={"/dashboard"}>
            <ListItem placeholder={""} className="font-poppins p-5">
              <ListItemPrefix placeholder={""}>
                <FaHome className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            </Link>
            <Link to={"/user"}>
            <ListItem placeholder={""} className="font-poppins p-5">
              <ListItemPrefix placeholder={""}>
                <IoStatsChart className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen User
            </ListItem>
            </Link>
            <Link to={"/product"}>
            <ListItem placeholder={""} className="font-poppins p-5">
              <ListItemPrefix placeholder={""}>
                <MdOutlineScreenShare className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen Product
            </ListItem>
            </Link>
            <Link to={"/keluhan"}>
            <ListItem placeholder={""} className="font-poppins p-5">
              <ListItemPrefix placeholder={""}>
                <FaUserTimes className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen Keluhan
            </ListItem>
            </Link>
            <Link to={"/kontrak"}>
            <ListItem placeholder={""} className="font-poppins p-5">
              <ListItemPrefix placeholder={""}>
                <FaCreditCard className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen Kontrak
            </ListItem>
            </Link>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem placeholder={""} className="font-poppins p-5">
              <ListItemPrefix placeholder={""}>
                <BiLogOut className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
};
