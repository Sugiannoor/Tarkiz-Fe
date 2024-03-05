import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";
import InputComponent from "@/Components/InputComponent";
import { FilePond } from "react-filepond";
import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

type props = {
  open: boolean;
  handleOpen: () => void;
  id: number;
};
export const EditProductModal = ({ open, handleOpen, id }: props) => {
  const [selected, setSelected] = useState([]);
  const options = [
    { value: 1, label: "Chocolate" },
    { value: 2, label: "Strawberry" },
    { value: 3, label: "Vanilla" },
  ];
  return (
    <>
      <Dialog placeholder={""} size="lg" open={open} handler={handleOpen}>
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Tambah Produk
        </DialogHeader>
        <DialogBody placeholder={""} className="p-10">
          <form>
            <InputComponent
              type="text"
              id="product"
              label="Nama Produk"
              placeholder="Nama Produk / Aplikasi"
              classnameLabel="text-lg text-[#005697] font-normal font-poppins"
              className="mb-5"
            />
            <div className="mb-5">
              <label
                htmlFor="category"
                className="text-lg text-[#005697] font-normal font-poppins"
              >
                Kategori Produk
              </label>
             <MultiSelect 
             className="mt-2"
             options={options}
             value={selected}
             onChange={setSelected}
             labelledBy="Select"
             />
            </div>
            <label
              htmlFor="description"
              className="text-lg text-[#005697] font-normal font-poppins"
            >
              Deskripsi
            </label>
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
              <div className="flex gap-1">
                <FaFileAlt size={20} className="text-[#005697]" />
                <a href="#" className="text-md font-poppins font-normal">File</a>
              </div>
              <FilePond id="file" name="file" />
            </div>
          </form>
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
