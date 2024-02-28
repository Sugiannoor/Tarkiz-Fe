import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react';
import { useState } from 'react'
import { FaUserCheck } from "react-icons/fa";
import { IoIosPower } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProfileMenu = () => {
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
            placeholder={""}
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <FaAngleDown
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList placeholder={""} className="p-1">
        <Link to={"/profile"}>
            <MenuItem
              placeholder={""}
              key="profile"
              className={`flex items-center gap-2 rounded `}
              >
              <FaUserCheck/>
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
              placeholder={""}
              key="Log Out"
              className={`flex items-center gap-2 rounded hhover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
            >
              <IoIosPower color='red'/>
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
}


export default ProfileMenu
