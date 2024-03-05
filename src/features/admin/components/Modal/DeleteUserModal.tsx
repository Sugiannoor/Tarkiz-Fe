import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
type props = {
id: number;
open: boolean;
handleOpen: () => void
}
export const DeleteUserModal = ({open, handleOpen, id}:props) => {
 console.log(id)
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogHeader placeholder={""} className="font-poppins">Hapus Pengguna</DialogHeader>
        <DialogBody className="font-poppins text-gray-500" placeholder={""}>
        Yakin Untuk Menghapus Pengguna ?
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
          <Button placeholder={""} className="font-poppins" variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}