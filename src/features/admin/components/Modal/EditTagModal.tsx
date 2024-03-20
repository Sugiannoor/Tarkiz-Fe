import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { updateTag } from "../../api/product";
type props = {
    open: boolean,
    handleOpen: ()=> void
    id: number
}

export const EditTagModal = ({ open, handleOpen, id}: props) => {
    const queryClient = useQueryClient();
    const [tag, setTag] = useState ("")
    // const {data, isLoading: TagLoading} = useQuery ({
    //     queryKey: ["Tag"],
    //     queryFn: getTagById,
    // })

    // useEffect (()=> {
    //     setTag (data)
    // }, [data])
    const { mutateAsync, isLoading } = useMutation({
      mutationFn: updateTag,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tags"] });
        toast.success("Tag Produk berhasil diupdate");
        setTag ("")
        handleOpen();
      },
      onError: ({ response }) => {
        if (response) {
          const errors = response.data.messages.Tag;
          toast.error(errors); 
        } else {
          toast.error("Terjadi kesalahan saat memproses permintaan.");
        }
      }
    });
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      id,
      tag
    }
      await mutateAsync(data);
    };
    return (
      <>
        <Dialog placeholder={""} open={open} handler={handleOpen}>
          <DialogHeader placeholder={""} className="font-poppins text-[#005697]">
            Edit Tag Produk
          </DialogHeader>
          <form onSubmit={handleSubmit}>
          <DialogBody className="font-poppins text-gray-500 p-10" placeholder={""}>
          <div className="text-lg text-[#005697] font-normal font-poppins">
                Tag Produk
            </div>
            <Input
              crossOrigin={""}
              size="lg"
              type="text"
              id="Tag"
              name="Tag"
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