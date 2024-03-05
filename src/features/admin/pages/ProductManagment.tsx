import { useState } from 'react';
import { CreateProductModal } from '../components/Modal/CreateProductModal';
import { Breadcrumbs, Button, Card } from '@material-tailwind/react';
import Search from '@/Components/Search';
import { BiPlusCircle } from 'react-icons/bi';
import TableProduct from '../components/Table/TableProduct';

const ProductManagment = () => {
    const [isCreateProduct, setIsCreateProduct] = useState (false);
    const [search, setSearch] = useState("");
    const handleCreateProduct = () => setIsCreateProduct (!isCreateProduct);

    
  return (
    <div>
    
      <div>
      <Breadcrumbs placeholder={""} className='bg-[#005697] px-0'>
       <a href="#" className="opacity-100 text-white font-poppins">
         <span>Admin</span>
       </a>
       <a href="/product" className='font-poppins text-white hover:text-gray-300 transition-colors duration-300 ease-in-out'>Manajemen Product</a>
     </Breadcrumbs>
      </div>
      <div className="text-3xl text-white font-poppins font-semibold my-10">Daftar Product</div>
      <Card placeholder={""} className="w-full h-full p-4">
        <div className='flex justify-between'>
          <Button placeholder={""} variant='filled' color='blue' className='flex gap-2' onClick={()=> handleCreateProduct()}>
            <BiPlusCircle size={15}/>
            Tambah Produk
          </Button>
      <Search searchValue={search} setSearchValue={setSearch}/>
        </div>
      <TableProduct searchValue={search} setSearchValue={setSearch} />
      </Card>
      <CreateProductModal open={isCreateProduct} handleOpen={handleCreateProduct} />
    </div>
  )
}

export default ProductManagment;
