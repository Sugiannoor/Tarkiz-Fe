import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { deleteUser } from "../../api/user";

type props = {
  id: number;
  open: boolean;
  handleOpen: () => void;
};
export const DeleteUserModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["table-user"],
      });
      toast.success("User berhasil dihapus");
      handleOpen();
    },
    onError: ({ response }) => {
      if (response) {
        const massage = response.data.message 
        toast.error (massage);
      } else {
        toast.error("Terjadi kesalahan saat memproses permintaan.");
      }
    }
  });
  const handleDelete = async () => {
    await mutateAsync(id);

  };
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogHeader placeholder={""} className="font-poppins">
          Hapus Pengguna
        </DialogHeader>
        <DialogBody className="font-poppins text-gray-500" placeholder={""}>
          Yakin Untuk Menghapus Pengguna ?
        </DialogBody>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="text"
            onClick={handleOpen}
            className="mr-1 font-poppins"
          >
            <span>Cancel</span>
          </Button>
          <Button
            placeholder={""}
            className="font-poppins"
            variant="gradient"
            color="red"
            loading={isLoading}
            onClick={handleDelete}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
