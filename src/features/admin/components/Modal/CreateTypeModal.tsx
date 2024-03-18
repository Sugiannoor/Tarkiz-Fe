import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { createType } from "../../api/product";
type props = {
    open: boolean,
    handleOpen: ()=> void
}

export const CreateTypeModal = ({ open, handleOpen}: props) => {
    const queryClient = useQueryClient();
    const [type, setType] = useState ("")
    const { mutateAsync, isLoading } = useMutation({
      mutationFn: createType,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["type"] });
        toast.success("Type Produk berhasil ditambah");
        setType ("")
        handleOpen();
      },
      onError: ({ response }) => {
        if (response) {
          const errors = response.data.messages.type;
          toast.error(errors); 
        } else {
          toast.error("Terjadi kesalahan saat memproses permintaan.");
        }
      }
    });
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      await mutateAsync(type);
    };
    const handleCancel = () => {
      handleOpen ()
      setType ("")
    }
    return (
      <>
        <Dialog placeholder={""} open={open} handler={handleOpen}>
          <DialogHeader placeholder={""} className="font-poppins text-[#005697]">
            Tambah Type Produk
          </DialogHeader>
          <form onSubmit={handleSubmit}>
          <DialogBody className="font-poppins text-gray-500 p-10" placeholder={""}>
          <div className="text-lg text-[#005697] font-normal font-poppins">
                Type Produk
            </div>
            <Input
              crossOrigin={""}
              size="lg"
              type="text"
              id="type"
              name="type"
              variant="static"
              onChange={(e) => setType (e.target.value)}
              value={type}
              placeholder="Label Type"
              className=" !border-t-blue-gray-200 focus:!border-t-custom-primary-600 font-poppins"
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
              color="green"
              loading={isLoading}
              type="submit"
              >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
                </form>
        </Dialog>
      </>
    );
  };