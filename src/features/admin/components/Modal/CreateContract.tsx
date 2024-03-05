import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Select,
    Option,
  } from "@material-tailwind/react";
  import InputComponent from "@/Components/InputComponent";
   
  type props = {
  open: boolean;
  handleOpen: () => void
  }
  export const CreateContractModal = ({open, handleOpen}:props) => {
    return (
      <>
        <Dialog placeholder={""} open={open} handler={handleOpen}>
          <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>Tambah Kontrak</DialogHeader>
          <DialogBody placeholder={""} className="p-10">
          <InputComponent 
            type="text"
            id="contract_code" 
            label="Kode Kontrak"
            placeholder="#WEB121"
            classnameLabel="text-lg text-[#005697] font-normal font-poppins" className="mb-5"
             />
            <div className="mb-5">
          <label htmlFor="category" className="text-lg text-[#005697] font-normal font-poppins">
          Produk
          </label>
          <Select placeholder={""} variant="static" id="category" name="category">
            <Option>Web Development</Option>
            <Option>Android Development</Option>
            <Option>IT Consultant</Option>
            <Option>Maintance</Option>
          </Select>
          </div>
             <InputComponent 
           type="date"
            id="contract_date" 
            label="Tanggal Kontrak"
            placeholder="Nama Lengkap"
            classnameLabel="text-lg text-[#005697] font-normal font-poppins" className="mb-5"
             />
             <InputComponent 
             type="date"
            id="contract_end" 
            label="Tanggal Selesai"
            placeholder="08..."
            classnameLabel="text-lg text-[#005697] font-normal font-poppins" className="mb-5"
             />
              <InputComponent 
             type="text"
            id="client_name" 
            label="Nama Mitra"
            placeholder="Nama Mitra Kontrak"
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
            <Button placeholder={""} className="font-poppins" variant="filled" color="black" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </>
    );
  }