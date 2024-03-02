import {
  Card,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaBars, FaCreditCard, FaHome } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
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
            <ListItem placeholder={""} className="font-poppins p-5">
              <ListItemPrefix placeholder={""}>
                <FaCreditCard className="h-5 w-5" />
              </ListItemPrefix>
              Manajemen Keluhan
            </ListItem>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem placeholder={""} className="font-poppins p-5">
              <ListItemPrefix placeholder={""}>
                <FaCreditCard className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
};
