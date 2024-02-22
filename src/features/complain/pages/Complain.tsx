import { NavbarSimple } from '../../user/components/NavbarSimple'
import CardComplain from '../components/CardComplain'
import {  IoAddSharp } from "react-icons/io5";
const Complain = () => {
  return (
    <div>
      <NavbarSimple>
        <CardComplain/>
        {/* <IoAddSharp size={40} color='white' className='fixed bg-[#3E4DAE] md:bottom-20 xl:bottom-40 lg:right-40 bottom-10 right-20 rounded-full '/> */}
      </NavbarSimple>
    </div>
  )
}

export default Complain
