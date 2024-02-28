
import {
    Card,
    Input,
    Button,
    Typography,
    } from "@material-tailwind/react";
    import { RiAccountBoxFill } from "react-icons/ri";
    import { IoArrowBackCircle } from "react-icons/io5";
    import { Link } from "react-router-dom";
     
    const RegisterForm = () => { 
      return (
        <div className=" lg:flex justify-center items-center">
          <Card  placeholder="" color="transparent" shadow={false} >
          <Typography className="font-poppins text-2xl text-center" placeholder={""} variant="h4" color="blue-gray">
            REGISTER
          </Typography>
          <Typography placeholder={""} className="mt-1 lg:text-md font-poppins text-black text-center">
            Ayo Bergabung Bersama 10.000 User lainnya
          </Typography>
          <form className="mt-8 mb-2 w-80 sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography aria-label="full_name" placeholder={""} variant="h6" color="blue-gray" className="-mb-3 font-body">
                Nama Lengkap
              </Typography>
              <Input crossOrigin={""}
                size="lg"
                type="text"
                id="full_name"
                placeholder="Nama Lengkap Anda"
                className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-body"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
               <Typography aria-label="username" placeholder={""} variant="h6" color="blue-gray" className="-mb-5 font-body">
                Username
              </Typography>
              <Input crossOrigin={""}
                size="lg"
                type="text"
                id="username"
                placeholder="Nama Akun"
                className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-raleway"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
               <Typography aria-label="email" placeholder={""} variant="h6" color="blue-gray" className="-mb-5 font-body">
                Email
              </Typography>
              <Input crossOrigin={""}
                size="lg"
                type="email"
                id="email"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-body"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
               <Typography aria-label="phone" placeholder={""} variant="h6" color="blue-gray" className="-mb-5 font-body">
                Nomor Telepon
              </Typography>
              <Input crossOrigin={""}
                size="lg"
                type="number"
                id="phone"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-body"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography placeholder={""} variant="h6" color="blue-gray" className="-mb-5 font-body">
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
             Daftar
            </Button>
          </form>
          <div className="flex gap-2 justify-center mt-1">
            <RiAccountBoxFill size={20}/>
            <p className="font-raleway text-sm text-black">Sudah Punya Akun? <a href="/login" className="font-semibold hover:text-[#005697]"
            >Login
            </a>
            </p>
          </div>
        </Card>
        </div>
      );
    }
    export default RegisterForm;