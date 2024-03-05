import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import InputComponent from "@/Components/InputComponent";
   
  type props = {
  open: boolean;
  id: number
  handleOpen: () => void
  }
  export const EditUserModal = ({open, handleOpen, id}:props) => {
   
    return (
      <>
        <Dialog placeholder={""} open={open} handler={handleOpen}>
          <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>Edit Pengguna</DialogHeader>
          <DialogBody placeholder={""} className="p-10">
          <InputComponent 
            type="text"
            id="full_name" 
            label="Nama Lengkap"
            placeholder="Nama Lengkap"
            classnameLabel="text-lg text-[#005697] font-normal font-poppins" className="mb-5"
             />
             <InputComponent 
          type="text"
            id="username" 
            label="Username"
            placeholder="Nama User"
            classnameLabel="text-lg text-[#005697] font-normal font-poppins" className="mb-5"
             />
             <InputComponent 
           type="email"
            id="email" 
            label="Email"
            placeholder="Nama Lengkap"
            classnameLabel="text-lg text-[#005697] font-normal font-poppins" className="mb-5"
             />
             <InputComponent 
             type="number"
            id="number_phone" 
            label="Nomor Telephone"
            placeholder="08..."
            classnameLabel="text-lg text-[#005697] font-normal font-poppins" className="mb-5"
             />
              <InputComponent 
             type="text"
            id="address" 
            label="Alamat"
            placeholder="Jl. "
            classnameLabel="text-lg text-[#005697] font-normal font-poppins" className="mb-5"
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
            <Button placeholder={""} className="font-poppins" variant="gradient" color="black" onClick={handleOpen}>
              <span>Simpan</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }