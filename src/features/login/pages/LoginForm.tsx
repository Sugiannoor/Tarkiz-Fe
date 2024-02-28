
import {
Card,
Input,
Button,
Typography,
} from "@material-tailwind/react";
import { RiAccountBoxFill } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
 
const LoginForm = () => { 
  return (
    
    <div className=" lg:flex justify-center items-center">
      <div className="absolute top-20 right-50 lg:right-50">
    <img src="public\tarkiz-logo.webp" alt="tarkiz-logo" />
      </div>
      <Card  placeholder="" color="transparent" shadow={false}>
      <Typography className="font-body text-2xl" placeholder={""} variant="h4" color="blue-gray">
        Log in
      </Typography>
      <Typography placeholder={""} className="mt-1 lg:text-lg font-body text-custom-gray-600">
        Nice to meet you! Enter your account to login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography aria-label="username" placeholder={""} variant="h6" color="blue-gray" className="-mb-3 font-body">
            Username
          </Typography>
          <Input crossOrigin={""}
            size="lg"
            type="email"
            id="username"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-body"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography placeholder={""} variant="h6" color="blue-gray" className="-mb-3 font-body">
            Password
          </Typography>
          <Input crossOrigin={""}
            type="password"
            id="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-body"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button placeholder={""} color="indigo" className="mt-6 font-body" fullWidth>
         Login
        </Button>
      </form>
      <Link to={'/'} className="flex gap-1 h-full justify-center mt-1 bg-custom-primary-900 rounded-lg p-[0.50rem] hover:bg-custom-primary-800 duration-300 focus:bg-custom-primary-700">
        <IoArrowBackCircle size={20} className="mt-[0.15rem]" color="white"/>
        <p className="font-body text-sm font-semibold text-custom-primary-50 mt-[0.20rem]">Kembali</p>
      </Link>
      <div className="flex gap-2 justify-center mt-3">
        <RiAccountBoxFill size={20}/>
        <p className="font-raleway text-sm text-black">Belum Punya Akun? <a href="/register" className="font-semibold hover:text-[#005697]"
        >Daftar
        </a>
        </p>
      </div>
    </Card>
    </div>
  );
}
export default LoginForm;