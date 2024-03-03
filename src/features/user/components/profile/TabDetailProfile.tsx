import InputComponent from "@/Components/InputComponent";

const TabDetailProfile = () => {
  return (
    <div>
      <div className="flex justify-center my-28">
        <img
          className="h-48 w-48 rounded-full object-cover object-center"
          src="/user_default.png"
          alt="nature image"
        />
      </div>
      <InputComponent id="full_name" label="Nama Lengkap" placeholder="Nama Lengkap" classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9" readOnly value="Akhmad Sugiannoor"/>
      <InputComponent id="username" label="Username" placeholder="Username ..." classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9" readOnly value="Sugiannoor"/>
      <InputComponent id="email" label="Email" placeholder="Cek@gmail.com" classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9" readOnly value="akhmad@gmail.com" />
      <InputComponent id="phone" label="Nomor Telepon" placeholder="08..." classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9"  readOnly value="081231254312"/>
      <InputComponent id="address" label="Alamat" placeholder="JL. Banjarbaru" classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9" readOnly value="Jl. Trikora"/>
    </div>
  );
};

export default TabDetailProfile;
