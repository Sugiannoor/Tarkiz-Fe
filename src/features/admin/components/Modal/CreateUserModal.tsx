import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import { RegistrasiType } from "@/features/register/types";
import { useMutation } from "react-query";
import { handleError } from "@/utils/helper";
import toast from "react-hot-toast";
import { createUser } from "@/features/register/api";

type props = {
  open: boolean;
  handleOpen: () => void;
};
export const CreateUserModal = ({ open, handleOpen }: props) => {
  const [formData, setFormData] = useState<RegistrasiType>({
    full_name: "",
    email: "",
    phone_number: "",
    username: "",
    password: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createUser,
    onSuccess() {
      handleOpen();
      toast.success("User ditambahkan");
    },
    onError: (err: Error) => {
      const errorTypes = [
        "full_name",
        "email",
        "number_phone",
        "username",
        "password",
      ];
      handleError(err, errorTypes);

      return;
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { full_name, email, phone_number, password, username } = formData;

    const dataSubmit = {
      full_name,
      email,
      phone_number,
      username,
      password,
    };
    await mutateAsync(dataSubmit);
  };
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen} dismiss={{escapeKey: false, outsidePress: false}}>
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Tambah Pengguna
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody placeholder={""} className="p-10">
            <div className="text-lg text-[#005697] font-normal font-poppins">
              Nama Lengkap
            </div>
            <Input
              crossOrigin={""}
              size="lg"
              type="text"
              id="full_name"
              name="full_name"
              variant="static"
              onChange={handleChange}
              value={formData.full_name}
              placeholder="Nama Lengkap Anda"
              className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
              Nama Pengguna
            </div>
            <Input
              crossOrigin={""}
              size="lg"
              type="text"
              id="username"
              name="username"
              variant="static"
              onChange={handleChange}
              value={formData.username}
              placeholder="Nama Akun"
              className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-raleway"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
              Email
            </div>
            <Input
              crossOrigin={""}
              size="lg"
              type="email"
              id="email"
              name="email"
              variant="static"
              onChange={handleChange}
              value={formData.email}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
              Nomor Telephone
            </div>
            <Input
              crossOrigin={""}
              size="lg"
              type="number"
              id="phone_number"
              name="phone_number"
              variant="static"
              onChange={handleChange}
              value={formData.phone_number}
              placeholder="Nomor HP"
              className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
              Password
            </div>
            <Input
              crossOrigin={""}
              type="password"
              id="password"
              name="password"
              variant="static"
              onChange={handleChange}
              value={formData.password}
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </DialogBody>
          <DialogFooter placeholder={""}>
            <Button
              placeholder={""}
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1 font-poppins"
            >
              <span>Cancel</span>
            </Button>
            <Button
              placeholder={""}
              className="font-poppins"
              variant="gradient"
              color="black"
              type="submit"
              loading={isLoading}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};
