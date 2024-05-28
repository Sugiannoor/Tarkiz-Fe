import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { RiAccountBoxFill } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataSubmit = {
      username,
      password,
    };
    await login.mutateAsync(dataSubmit, {
      onSuccess: () => {
        navigate("/dashboard", { replace: true });
      },
      onError: (err: any) => {
        toast.error(err.message);
        setError(!error);
        return;
      },
    });
  };
  return (
    <div className=" lg:flex justify-center items-center">
      <div className="absolute top-20 right-50 lg:right-50"></div>
      <Card placeholder="" color="transparent" shadow={false}>
        <Typography
          className="font-poppins text-2xl"
          variant="h4"
          color="blue-gray"
        >
          Log in
        </Typography>
        <Typography className="mt-1 lg:text-lg font-poppins text-custom-gray-600">
          Silahkan Masuk dengan Akun yang sudah ada!
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              aria-label="username"
              variant="h6"
              color="blue-gray"
              className="-mb-3 font-poppins"
            >
              Username atau Email
            </Typography>
            <Input
              crossOrigin={""}
              size="lg"
              type="text"
              id="username"
              name="username"
              placeholder="Username atau Email"
              autoComplete="username"
              variant="outlined"
              className="font-poppoins"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={error}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 font-poppins"
            >
              Password
            </Typography>
            <div className="relative flex w-full max-w-[24rem]">
              <Input
                crossOrigin={""}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                size="lg"
                placeholder="********"
                autoComplete="current-password"
                className=" font-poppins"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={error}
              />
              {showPassword ? (
                <FaEyeSlash
                  className="!absolute right-4 top-3 cursor-pointer"
                  size={18}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="!absolute right-4 top-3 cursor-pointer"
                  size={18}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <Button
            color="indigo"
            className="mt-6 font-body"
            type="submit"
            loading={login.isLoading}
            fullWidth
          >
            Login
          </Button>
          <Link
            to={"/"}
            className="flex gap-1 h-full justify-center mt-2 bg-custom-primary-900 rounded-lg p-[0.50rem] hover:bg-custom-primary-800 duration-300 focus:bg-custom-primary-700"
          >
            <IoArrowBackCircle
              size={20}
              className="mt-[0.15rem]"
              color="white"
            />
            <p className="font-body text-sm font-semibold text-custom-primary-50 mt-[0.20rem]">
              Kembali
            </p>
          </Link>
          <div className="flex gap-2 justify-center mt-3">
            <RiAccountBoxFill size={20} />
            <p className="font-raleway text-sm text-black">
              Belum Punya Akun?{" "}
              <a
                href="/register"
                className="font-semibold hover:text-[#005697]"
              >
                Daftar
              </a>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default LoginForm;
