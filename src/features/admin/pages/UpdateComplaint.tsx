import { Breadcrumbs } from "@material-tailwind/react"
import UpdateComplaintForm from "../components/UpdateComplaintForm";

const UpdateComplaint = () => {
  return (
    <div className="lg:mx-4">
      <Breadcrumbs placeholder={""} className='bg-[#005697] px-0'>
       <a href="#" className="opacity-100 text-white font-poppins">
         <span>Admin</span>
       </a>
       <a href="#" className='font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out'>Manajemen Keluhan</a>
       <a href="#" className='font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out'>Update Keluhan</a>
     </Breadcrumbs>
     <div className="text-3xl text-white font-poppins font-semibold my-10">Edit Status Keluhan</div>
     <UpdateComplaintForm/>
    </div>
  )
}

export default UpdateComplaint;
