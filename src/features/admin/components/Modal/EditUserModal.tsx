import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { UpdateUser, getUserById } from "../../api/user";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { handleError } from "@/utils/helper";

type props = {
  open: boolean;
  id: number;
  handleOpen: () => void;
};
export const EditUserModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient();
  const [dataUser, setDataUser] = useState({
    full_name: "",
    username: "",
    email: "",
    number_phone: "",
    address: "",
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
  useEffect(() => {
    if (data) {
      setDataUser({
        full_name: data.full_name,
        username: data.username,
        email: data.email,
        number_phone: data.number_phone,
        address: data.address,
      });
    }
  }, []);
  const { data, isLoading: isUserLoading } = useQuery({
    queryKey: ["user-edit", id],
    queryFn: () => getUserById(id),
  });
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: UpdateUser,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Data berhasil diperbaharui");
      handleOpen();
    },
    onError: (err: Error) => {
      const errorTypes = ["id", "full_name", "email", "number_phone"];

      handleError(err, errorTypes);
      return;
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mutateAsync(dataUser);
  };
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Edit Pengguna
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody placeholder={""} className="p-10">
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
              disabled={isUserLoading}
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
              disabled={isUserLoading}
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
              disabled={isUserLoading}
              value={dataUser.email}
              onChange={handleChange}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
              Nomor Telephone
            </div>
            <Input
              crossOrigin={""}
              type="number"
              variant="static"
              id="number_phone"
              name="number_phone"
              placeholder="Nomor Telephone Anda"
              disabled={isUserLoading}
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
              disabled={isUserLoading}
              value={dataUser.address}
              onChange={handleChange}
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
              loading={isLoading}
              type="submit"
            >
              <span>Simpan</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};
