import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { deleteProduct } from "../../api/product";

type props = {
  id: number;
  open: boolean;
  handleOpen: () => void;
};
export const DeleteProductModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: deleteProduct,
  });
  const handleDelete = async () => {
    await mutateAsync(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["table-product"] });
        toast.success("Data berhasil dihapus");
        handleOpen();
      },
      onError: () => {
        toast.error("Gagal menghapus data");
        handleOpen();
      },
    });
  };
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogHeader placeholder={""} className="font-poppins">
          Hapus Product
        </DialogHeader>
        <DialogBody className="font-poppins text-gray-500" placeholder={""}>
          Yakin Untuk Menghapus Product ?
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
