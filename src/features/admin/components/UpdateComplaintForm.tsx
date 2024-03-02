import InputComponent from "@/Components/InputComponent";
import { Button } from "@material-tailwind/react";

const UpdateComplaintForm = () => {
  return (
    <div className="bg-white p-5 rounded-lg">
      <div className="flex flex-col lg:flex-row lg:gap-5 justify-between">
        <div className="w-full">
          <InputComponent
          placeholder="Username"
          className="w-full mb-2"
          id="username"
          label="Nama Pengguna"
          classnameLabel="text-lg text-[#005697] font-normal font-poppins"
           />
            <InputComponent
          placeholder="08..."
          className="w-full mb-2"
          id="phone_number"
          label="Nomor Telephone"
          classnameLabel="text-lg text-[#005697] font-normal font-poppins"
           />
            <InputComponent
          placeholder="Web Development"
          className="w-full mb-2"
          id="services"
          label="Jenis Layanan"
          classnameLabel="text-lg text-[#005697] font-normal font-poppins"
           />
        </div>
        <div className="w-full">
        <InputComponent
          placeholder="Kode Produk"
          className="w-full mb-2"
          id="product_code"
          label="Kode Produk"
          classnameLabel="text-lg text-[#005697] font-normal font-poppins"
           />
            <InputComponent
          placeholder="Keuangan"
          className="w-full mb-2"
          id="category"
          label="Kategori"
          classnameLabel="text-lg text-[#005697] font-normal font-poppins"
           />
            <InputComponent
          placeholder="Selesai"
          className="w-full mb-2"
          id="status"
          label="Status"
          classnameLabel="text-lg text-[#005697] font-normal font-poppins"
           />
            <InputComponent
          placeholder="Username"
          className="w-full mb-2"
          id="title"
          label="Judul"
          classnameLabel="text-lg text-[#005697] font-normal font-poppins"
           />
            <InputComponent
          placeholder="Username"
          className="w-full mb-2"
          id="description"
          label="Deskripsi"
          classnameLabel="text-lg text-[#005697] font-normal font-poppins"
           />
           <div className="flex justify-end mt-10">
           <Button
              placeholder={""}
              variant="text"
              color="red"
              className="mr-1 font-poppins"
              >
              <span>Cancel</span>
            </Button>
            <Button placeholder={""} className="font-poppins" variant="gradient" color="black">
              <span>Confirm</span>
            </Button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateComplaintForm;
