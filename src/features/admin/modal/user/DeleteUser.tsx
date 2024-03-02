import React from "react";
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
export const DeleteUser = ({open, handleOpen, id}:props) => {
 
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogHeader placeholder={""}>Hapus Pengguna</DialogHeader>
        <DialogBody placeholder={""}>
        Yakin Untuk Menghapus User ?
        </DialogBody>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button placeholder={""} variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}