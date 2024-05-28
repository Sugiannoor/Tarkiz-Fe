import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useMutation, useQueryClient } from "react-query";
import { deleteComplaint } from "../../api/complaint";
import toast from "react-hot-toast";

type props = {
  id: number;
  open: boolean;
  handleOpen: () => void;
};
export const DeleteComplaintModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: deleteComplaint,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["table-complaint"] });
      toast.success("Data berhasil dihapus");
      handleOpen();
    },
    onError: ({ response }) => {
      if (response) {
        const errors = response.data.message;
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
        <DialogHeader className="font-poppins">Hapus Keluhan</DialogHeader>
        <DialogBody className="font-poppins text-gray-500">
          Yakin Untuk Menghapus Keluhan ?
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
