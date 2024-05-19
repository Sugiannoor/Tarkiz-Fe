import { Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import ImageUpload from "./ImageInput";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { UpdateUser } from "@/features/admin/api/user";

const TabEditProfile = () => {
  const { user } = useAuth();
  const [image, setImage] = useState<File>();
  const [dataUser, setDataUser] = useState({
    full_name: user?.full_name,
    username: user?.username,
    email: user?.email,
    number_phone: user?.number_phone,
    address: user?.address,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDataUser((prevDataUser) => ({
      ...prevDataUser,
      [name]: value,
    }));
  };
  const {mutateAsync, isLoading} =useMutation ({
    mutationFn: UpdateUser,
    onSuccess() {
      toast.success ("Profile Berhasil Diperbaharui")
    },
    onError: ({ response }) => {
      if (response) {
        const errors: { [key: string]: string } = response.data.massages;
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
})
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault ();
    const {full_name, email, number_phone, address, username} = dataUser
    const image_path = image
    const idUser = user?.id
    const dataSubmit = {
      idUser,
      full_name,
      email,
      number_phone,
      address,
      username,
      image_path,
    }
    await mutateAsync (dataSubmit)

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center my-28">
        <ImageUpload setImage={setImage} image={image} />
      </div>
      <div className="text-lg text-[#005697] font-normal font-poppins">
        Nama Lengkap
      </div>
      <Input
        crossOrigin={""}
        type="text"
        variant="static"
        id="full_name"
        name="full_name"
        placeholder="Nama Lengkap"
        value={dataUser.full_name}
        onChange={handleChange}
      />
      <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
        Nama Pengguna
      </div>
      <Input
        crossOrigin={""}
        type="text"
        variant="static"
        id="username"
        name="username"
        placeholder="Nama Pengguna"
        value={dataUser.username}
        onChange={handleChange}
      />
      <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
        Email
      </div>
      <Input
        crossOrigin={""}
        type="email"
        variant="static"
        id="email"
        name="email"
        placeholder="budi@gmail.com"
        value={dataUser.email}
        onChange={handleChange}
      />
      <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
        Nomor Telephone
      </div>
      <Input
        crossOrigin={""}
        type="string"
        variant="static"
        id="number_phone"
        name="number_phone"
        placeholder="Nomor Telephone Anda"
        value={dataUser.number_phone}
        onChange={handleChange}
      />
      <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
        Alamat
      </div>
      <Textarea
        className="mt-2"
        placeholder="Deskripsi"
        variant="outlined"
        id="address"
        name="address"
        value={dataUser.address}
        onChange={handleChange}
      />
      <div className="flex justify-end">
        <Button
          placeholder={""}
          variant="filled"
          color="indigo"
          className="font-raleway"
          type="submit"
          loading={isLoading}
        >
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default TabEditProfile;
