import { NavbarSimple } from ".";
import InputComponent from "@/Components/InputComponent";
import { Button } from "@material-tailwind/react";
import { FilePond } from "react-filepond";
import { Link } from "react-router-dom";

const CreateComplaint = () => {
  return (
    <main>
      <NavbarSimple>
        <div className="text-3xl font-semibold font-poppins my-16 text-[#005697]">
          {" "}
          Layanan Pengaduan{" "}
        </div>
        <div className="p-10 border-4 rounded-lg border-[#005697]">
          <form>
            <InputComponent
              id="title"
              label="Judul *"
              placeholder="Error"
              type="text"
              className="mb-2"
              classnameLabel="text-md font-poppins"
            />
            <InputComponent
              id="complaint"
              label="Keluhan"
              placeholder="Error Ketika Menghitung ..."
              type="text"
              className="mb-2"
              classnameLabel="text-md font-poppins font"
            />
          <div className="max-w-80 mt-5 cursor-pointer">
            <FilePond
            labelIdle="Drop Atau Pilih Foto Keluhan Anda"
            name="files"
            allowMultiple />
          </div>
          <div className="flex justify-end gap-5">
            <Link to={"/profile"}>
            <Button placeholder={""} className="font-poppins">
                Kembali
            </Button>
            </Link>
          <Button placeholder={""} className="font-poppins">
                Buat Pengaduan
            </Button>
          </div>
            </form>
        </div>
      </NavbarSimple>
    </main>
  );
};

export default CreateComplaint;
