import { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { Authorization } from "@/Components/Authorization/Authorization";

type Props = {
  children?: React.ReactNode;
  fixed?: boolean;
};

export const NavbarSimple: React.FC<Props> = ({ children, fixed }: Props) => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium font-raleway text-sm text-black"
        href="/"
      >
        Home
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-sm font-raleway text-black"
        href="/#service"
      >
        Services
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-sm font-raleway text-black"
        href="/portofolio"
      >
        Portofolio
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-sm font-raleway text-black"
        href="/#about"
      >
        About
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-full w-[90%] lg:w-[80%] mx-auto my-4">
      <Navbar
        className={`${
          fixed ? "sticky" : "relative"
        } top-0 z-10 h-max max-w-full rounded-[30px] px-4 py-4 lg:px-8 lg:py-4`}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <img
            loading="lazy"
            src="/tarkiz-logo.webp"
            alt="tarkiz-logo"
            className="w-20 h-auto lg:w-35 lg:h-auto"
          />
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-2">
              <Authorization roles={["-Users", "-Admin"]}>
                <Button
                  variant="filled"
                  color="indigo"
                  size="sm"
                  className="hidden font-raleway lg:inline-block"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </Authorization>
            </div>
            <Authorization roles={["Users", "Admin"]}>
              <ProfileMenu />
            </Authorization>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
              aria-label="Humburger Button"
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Authorization roles={["-Users", "-Admin"]}>
          <div className="flex items-center gap-x-1">
            <Link to="/login" className="w-full">
              <Button
                fullWidth
                variant="gradient"
                size="sm"
                className="font-body block"
                placeholder=""
                color="indigo"
                >
                <span>LogIn</span>
              </Button>
            </Link>
          </div>
                </Authorization>
        </Collapse>
      </Navbar>
      {children}
    </div>
  );
};
