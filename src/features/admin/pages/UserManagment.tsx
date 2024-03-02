import { useState } from 'react'
import { CreateUserModal } from '../components/Modal/CreateUserModal';
import { DeleteUserModal } from '../components/Modal/DeleteUserModal';

const UserManagment = () => {
    const [isCreateUser, setIsCreateUser] = useState (false);
    const [isDeleteUser, setIsDeleteUser] = useState (false);
    const [selectedId, setSelectedId] = useState<number> (0)
    
    const handleCreateUser = () => setIsCreateUser (!isCreateUser);
    const handleDeleteUser = () => setIsDeleteUser (!isDeleteUser);

    
  return (
    <div>
      <div>Hello World</div>
      <button onClick={() => {
        setSelectedId(3);
        handleDeleteUser();
      }}>CLick me</button>
      <DeleteUserModal open ={isDeleteUser} handleOpen={handleDeleteUser} id={selectedId} />
      <CreateUserModal open ={isCreateUser} handleOpen={handleCreateUser} />
      
    </div>
  )
}

export default UserManagment
