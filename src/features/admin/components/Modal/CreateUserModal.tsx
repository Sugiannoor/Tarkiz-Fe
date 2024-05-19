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
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import {createUserByAdmin } from "@/features/register/api";

type props = {
  open: boolean;
  handleOpen: () => void;
};
export const CreateUserModal = ({ open, handleOpen }: props) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<RegistrasiType>({
    full_name: "",
    email: "",
    number_phone: "",
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

  // const { data: roles, isLoading: roleLoading } = useQuery({
  //   queryKey: ["role"],
  //   queryFn: getLabelRole,
  // });


  const handleCancel = () => {
    setFormData ({
      email: "",
      full_name: "",
      number_phone: "",
      password: "",
      username: "",
    address: "",
    })
    handleOpen()
  }
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createUserByAdmin,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["table-user"],
      });
      handleOpen();
      setFormData ({
        email: "",
        full_name: "",
        number_phone: "",
        password: "",
        username: "",
        address: "",
      })
      toast.success("User ditambahkan");
    },
    onError: ({ response }) => {
      if (response) {
        const errors: { [key: string]: string } = response.data.message;
        const errorMessages = Object.values(errors).map((error:string) => error);
        errorMessages.forEach((errorMessage: string, index) => {
          if (index === 0) {
            toast.error(errorMessage);
          }
        });
      } else {
        toast.error("Terjadi kesalahan saat memproses permintaan.");
      }
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { full_name, email, number_phone, password, username } = formData;
    const dataSubmit = {
      full_name,
      email,
      number_phone,
      username,
      password,
    };
    await mutateAsync(dataSubmit);
  };
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen} className="overflow-y-scroll h-[90vh]">
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
              Username
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
              type="text"
              id="number_phone"
              name="number_phone"
              variant="static"
              onChange={handleChange}
              value={formData.number_phone}
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
              onClick={handleCancel}
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
