import { Button } from '@material-tailwind/react'
import InputComponent from '../../../../Components/InputComponent'

const TabEditProfile = () => {
  return (
    <form>
    <div className="flex justify-center my-28">
      <img
        className="h-48 w-48 rounded-full object-cover object-center"
        src="/user_default.png"
        alt="nature image"
      />
    </div>
    <InputComponent id="full_name" label="Nama Lengkap" placeholder="Nama Lengkap" classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9"/>
    <InputComponent id="username" label="Username" placeholder="Username ..." classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9"/>
    <InputComponent id="email" label="Email" placeholder="Cek@gmail.com" classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9" />
    <InputComponent id="phone" label="Nomor Telepon" placeholder="08..." classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9" />
    <InputComponent id="address" label="Alamat" placeholder="JL. Banjarbaru" classnameLabel="text-xl text-[#005697] font-semibold font-poppins" className="mb-9"/>
    <div className='flex justify-end'>
    <Button placeholder={""} variant='filled' color='indigo' className='font-raleway'>
      Simpan
    </Button>
    </div>
  </form>
  )
}

export default TabEditProfile
