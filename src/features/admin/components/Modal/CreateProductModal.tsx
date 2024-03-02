import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import InputComponent from "@/Components/InputComponent";
import { FilePond } from "react-filepond";

type props = {
  open: boolean;
  handleOpen: () => void;
};
export const CreateProductModal = ({ open, handleOpen }: props) => {
  return (
    <>
      <Dialog placeholder={""} size="lg" open={open} handler={handleOpen}>
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Tambah Produk
        </DialogHeader>
        <DialogBody placeholder={""} className="p-10">
          <InputComponent
            type="text"
            id="product"
            label="Nama Produk"
            placeholder="Nama Produk / Aplikasi"
            classnameLabel="text-lg text-[#005697] font-normal font-poppins"
            className="mb-5"
          />
          <div className="mb-5">
          <label htmlFor="category" className="text-lg text-[#005697] font-normal font-poppins">
            Kategori Produk
          </label>
          <Select placeholder={""} variant="static" id="category" name="category">
            <Option>Web Development</Option>
            <Option>Android Development</Option>
            <Option>IT Consultant</Option>
            <Option>Maintance</Option>
          </Select>
          </div>
          <label htmlFor="description" className="text-lg text-[#005697] font-normal font-poppins">Deskripsi</label>
           <Textarea 
           className="mt-2"
           placeholder="Deskripsi"
           variant="outlined"
            id="description" 
           name="description" 
           />
           <div className="mt-2">
              <label
                htmlFor="file"
                className="text-lg text-[#005697] font-normal font-poppins"
              >
                Gambar Produk
              </label>
              <FilePond id="file" name="file" />
            </div>
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
            color="black"
            onClick={handleOpen}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
