import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { deleteType } from "../../api/product";

type props = {
  id: number;
  open: boolean;
  handleOpen: () => void;
};
export const DeleteTypeModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: deleteType,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["type"],
      });
      toast.success("Type Berhasil di Hapus");
      handleOpen();
    },
    onError: ({ response }) => {
      if (response) {
        const errors = response.data.messages.error;
        toast.error(errors);
      } else {
        toast.error("Terjadi kesalahan saat memproses permintaan.");
      }
    },
  });
  const handleDelete = async () => {
    await mutateAsync(id);
  };
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="font-poppins">Hapus Type</DialogHeader>
        <DialogBody className="font-poppins text-gray-500">
          Yakin Untuk Menghapus Type ?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 font-poppins"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="font-poppins"
            variant="gradient"
            color="green"
            onClick={handleDelete}
            loading={isLoading}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
