import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { IoIosPower } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const ProfileMenu = () => {
  const { logout, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={
              `${import.meta.env.VITE_API_BASE_URL}/${user?.path_files}` ??
              "/user_default.png"
            }
          />
          <FaAngleDown
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <Link to={"/profile"}>
          <MenuItem
            key="profile"
            className={`flex items-center gap-2 rounded `}
          >
            <FaUserCheck />
            <Typography
              as="span"
              variant="small"
              className="font-normal font-poppins"
              color="inherit"
            >
              My Profile
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem
          key="Log Out"
          className={`flex items-center gap-2 rounded hhover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
          onClick={logout}
        >
          <IoIosPower color="red" />
          <Typography
            as="span"
            variant="small"
            className="font-normal font-poppins text-red-500"
            color="red"
          >
            Log Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
