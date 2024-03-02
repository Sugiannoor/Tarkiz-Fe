import React, { useState } from 'react'
import UserTable from '../components/UserTable'
import { CreateUser } from '../modal/user/CreateUser';

const UserManagment = () => {
    const [isCreateUser, setIsCreateUser] = useState (false);
    const [isDeleteUser, setIsDelteUser] = useState (false);
    const [selectedId, setSelectedId] = useState<number> ()
    
    const handleCreateUser = () => setIsCreateUser (!isCreateUser);
    
  return (
    <div>
      <div>Hello World</div>
      <button onClick={handleCreateUser}>CLick me</button>
      {isCreateUser && (<CreateUser open={isCreateUser} handleOpen={handleCreateUser}/>)}
    </div>
  )
}

export default UserManagment
