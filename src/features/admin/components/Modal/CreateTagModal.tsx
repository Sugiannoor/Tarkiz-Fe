import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { createTag } from "../../api/product";
type props = {
    open: boolean,
    handleOpen: ()=> void
}

export const CreateTagModal = ({ open, handleOpen}: props) => {
    const queryClient = useQueryClient();
    const [tag, setTag] = useState ("")
    const { mutateAsync, isLoading } = useMutation({
      mutationFn: createTag,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tag"] });
        toast.success("Tag Produk berhasil ditambah");
        setTag ("");
        handleOpen();
      },
      onError: ({ response }) => {
        if (response) {
          const errors: { [key: string]: string } = response.data.errors;
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

      await mutateAsync(tag);
    };

    const handleCancel = () => {
      handleOpen ()
      setTag ("")
    }
    return (
      <>
        <Dialog placeholder={""} open={open} handler={handleOpen}>
          <DialogHeader placeholder={""} className="font-poppins text-[#005697]">
            Tambah Tag Produk
          </DialogHeader>
          <form onSubmit={handleSubmit}>
          <DialogBody className="font-poppins text-gray-500 p-10" placeholder={""}>
          <div className="text-lg text-[#005697] font-normal font-poppins">
                Tag
            </div>
            <Input
              crossOrigin={""}
              size="lg"
              type="text"
              id="tag"
              name="tag"
              variant="static"
              onChange={(e) => setTag (e.target.value)}
              value={tag}
              placeholder="Label Tag"
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