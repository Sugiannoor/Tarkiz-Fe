import { useState } from 'react';
import { CreateProductModal } from '../components/Modal/CreateProductModal';

const ProductManagment = () => {
    const [isCreateProduct, setIsCreateProduct] = useState (false);
    const [isDeleteProduct, setIsDeleteProduct] = useState (false);
    
    const handleCreateProduct = () => setIsCreateProduct (!isCreateProduct);

    
  return (
    <div>
      <div>Hello World</div>
      <button onClick={() => {
        handleCreateProduct();
      }}>CLick me</button>
      <CreateProductModal open ={isCreateProduct} handleOpen={handleCreateProduct} />
      
    </div>
  )
}

export default ProductManagment;
