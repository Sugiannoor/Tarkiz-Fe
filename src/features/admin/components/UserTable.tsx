import TableCustom from '@/Components/table/TableCustom'
import React from 'react'

const UserTable = () => {
  return (
    <div>
      <TableCustom 
      header={['Nama Pengguna', 'Alamat', 'No. Telephone', 'Email', '']}
      
      />
    </div>
  )
}

export default UserTable
