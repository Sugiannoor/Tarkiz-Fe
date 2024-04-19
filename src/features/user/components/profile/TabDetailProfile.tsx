import useAuth from "@/hooks/useAuth";
import { Input, Textarea } from "@material-tailwind/react";

const TabDetailProfile = () => {
  const {user} = useAuth ()
  return (
    <div>
      <div className="flex justify-center my-28">
        <img
          className="h-48 w-48 rounded-full object-cover object-center"
          src="/user_default.png"
          alt="nature image"
        />
      </div>
      <div className="text-lg text-[#005697] font-normal font-poppins">
        Nama Lengkap
      </div>
      <Input
        crossOrigin={""}
        type="text"
        variant="static"
        id="full_name"
        name="full_name"
        placeholder="Nama Lengkap"
        value={user?.full_name}
        readOnly
      />
      <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
        Nama Pengguna
      </div>
      <Input
        crossOrigin={""}
        type="text"
        variant="static"
        id="username"
        name="username"
        placeholder="Nama Pengguna"
        value={user?.username}
        readOnly
      />
      <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
        Email
      </div>
      <Input
        crossOrigin={""}
        type="email"
        variant="static"
        id="email"
        name="email"
        placeholder="budi@gmail.com"
        value={user?.email}
        readOnly
      />
      <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
        Nomor Telephone
      </div>
      <Input
        crossOrigin={""}
        type="string"
        variant="static"
        id="number_phone"
        name="number_phone"
        placeholder="Nomor Telephone Anda"
        value={user?.number_phone}
        readOnly
      />
      <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
        Alamat
      </div>
      <Textarea
        className="mt-2"
        placeholder="Deskripsi"
        variant="outlined"
        id="address"
        name="address"
        value={user?.address}
      />
    </div>
  );
};

export default TabDetailProfile;
