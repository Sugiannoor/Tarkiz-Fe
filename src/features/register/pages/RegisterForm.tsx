
import {
    Card,
    Input,
    Button,
    Typography,
    } from "@material-tailwind/react";
import { useState } from "react";
    import { RiAccountBoxFill } from "react-icons/ri";
import { RegistrasiType } from "../types";
import { useMutation } from "react-query";
import { createUser } from "../api";
import { useNavigate } from "react-router-dom";
import { handleError } from "@/utils/helper";
     
    const RegisterForm = () => { 
      const navigate = useNavigate ();
      const [formData, setFormData] = useState<RegistrasiType>({
        full_name: "",
        email: "",
        phone_number:"",
        username: "",
        password: ""
      })
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          const { name, value } = e.target;
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
        };

        const {mutateAsync, isLoading} =useMutation ({
          mutationFn: createUser,
          onSuccess() {
            navigate ('/login')
          },
          onError: (err: Error) => {
          const errorTypes = [ "full_name", "email", "number_phone", "username", "password"];
          handleError(err, errorTypes);
          
          return;
        },
      })
      
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault ();
        const {full_name, email, phone_number, password, username} = formData
        
        const dataSubmit = {
          full_name,
          email,
          phone_number,
          username,
          password,
        }
        await mutateAsync (dataSubmit)

      }
      return (
        <div className=" lg:flex justify-center items-center">
          <Card  placeholder="" color="transparent" shadow={false} >
          <Typography className="font-poppins text-2xl" placeholder={""} variant="h4" color="blue-gray">
            Registrasi
          </Typography>
          <Typography placeholder={""} className="mt-1 lg:text-md font-poppins text-black">
            Ayo Bergabung Bersama User lainnya
          </Typography>
          <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography aria-label="full_name" placeholder={""} variant="h6" color="blue-gray" className="-mb-3 font-poppins">
                Nama Lengkap
              </Typography>
              <Input crossOrigin={""}
                size="lg"
                type="text"
                id="full_name"
                name="full_name"
                onChange={handleChange}
                value={formData.full_name}
                placeholder="Nama Lengkap Anda"
                className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
               <Typography aria-label="username" placeholder={""} variant="h6" color="blue-gray" className="-mb-5 font-poppins">
                Username
              </Typography>
              <Input crossOrigin={""}
                size="lg"
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                value={formData.username}
                placeholder="Nama Akun"
                className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-raleway"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
               <Typography aria-label="email" placeholder={""} variant="h6" color="blue-gray" className="-mb-5 font-poppins">
                Email
              </Typography>
              <Input crossOrigin={""}
                size="lg"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
               <Typography aria-label="phone" placeholder={""} variant="h6" color="blue-gray" className="-mb-5 font-poppins">
                Nomor Telepon
              </Typography>
              <Input crossOrigin={""}
                size="lg"
                type="number"
                id="phone_number"
                name="phone_number"
                onChange={handleChange}
                value={formData.phone_number}
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography placeholder={""} variant="h6" color="blue-gray" className="-mb-5 font-poppins">
                Password
              </Typography>
              <Input crossOrigin={""}
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button placeholder={""} color="indigo" className="mt-6 font-poppins" fullWidth loading={isLoading} type="submit">
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