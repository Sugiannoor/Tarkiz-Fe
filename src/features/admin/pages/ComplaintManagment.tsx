import { useState } from 'react';
import { Breadcrumbs, Button, Card } from '@material-tailwind/react';
import Search from '@/Components/Search';
import { BiPlusCircle } from 'react-icons/bi';
import TableComplaint from '../components/Table/TableComplaint';
import { CreateContractModal } from '../components/Modal/CreateContract';

const ComplaintManagment = () => {
    const [isCreateContracrt, setIsCreateContract] = useState (false);
    const [search, setSearch] = useState("");
    const handleCreateContract = () => setIsCreateContract (!isCreateContracrt);

    
  return (
    <div>
    
      <div>
      <Breadcrumbs placeholder={""} className='bg-[#005697] px-0'>
       <a href="#" className="opacity-100 text-white font-poppins">
         <span>Admin</span>
       </a>
       <a href="/keluhan" className='font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out'>Keluhan</a>
     </Breadcrumbs>
      </div>
      <div className="text-3xl text-white font-poppins font-semibold my-10">Daftar Keluhan</div>
      <Card placeholder={""} className="w-full h-full p-4">
        <div className='flex justify-end'>
      <Search searchValue={search} setSearchValue={setSearch}/>
        </div>
      <TableComplaint searchValue={search} setSearchValue={setSearch} />
      </Card>
    </div>
  )
}

export default ComplaintManagment;
