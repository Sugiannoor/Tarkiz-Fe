import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { ColumnDef} from "@tanstack/react-table";
import { userTableType } from "../../types/userTable";
import Table from "@/Components/table/Table";
import { APIParams } from "@/features/user/types/apiParams";
import { TableProps } from "@/features/user/types/tableParams";
import { RiEditBoxLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { DeleteUserModal } from "../Modal/DeleteUserModal";
import { EditUserModal } from "../Modal/EditUserModal";
import { useQuery } from "react-query";
import { getAllUser } from "../../api/user";
const TableUser = ({ searchValue, setSearchValue }: TableProps) => {
  const [isEditUser, setIsEditUser] = useState (false);
  const [isDeleteUser, setIsDeleteUser] = useState (false);
  const [selectedId, setSelectedId] = useState<number> (0);

  const handleDeleteUser = () => setIsDeleteUser (!isDeleteUser)
  const handleEditUser = () => setIsEditUser (!isEditUser)


  const [params, setParams] = useState<APIParams>({
    search: searchValue,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["table-user"],
    queryFn: getAllUser,
  });

  const columns: ColumnDef<userTableType>[] = [
    // {
    //   accessorKey: "expand",
    //   enableSorting: false,
    //   header: ({ table }) => (
    //     <>
    //       {table.getIsAllRowsExpanded() ? (
    //         <span
    //           onClick={() => table.toggleAllRowsExpanded()}
    //           className="cursor-pointer p-2"
    //         >
    //           <IoIosArrowDown />
    //         </span>
    //       ) : (
    //         <span
    //           onClick={() => table.toggleAllRowsExpanded()}
    //           className="cursor-pointer p-2"
    //         >
    //           <IoIosArrowForward />
    //         </span>
    //       )}
    //     </>
    //   ),
    //   cell: ({ row }) => (
    //     <>
    //       {row.getIsExpanded() ? (
    //         <span
    //           onClick={() => row.toggleExpanded()}
    //           className="cursor-pointer p-2"
    //         >
    //           <IoIosArrowDown />
    //         </span>
    //       ) : (
    //         <span
    //           onClick={() => row.toggleExpanded()}
    //           className="cursor-pointer p-2"
    //         >
    //           <IoIosArrowForward />
    //         </span>
    //       )}
    //     </>
    //   ),
    // },
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "Nama Lengkap",
      accessorKey: "full_name",
    },
    {
      header: "Nama Pengguna",
      accessorKey: "username",
    },
    {
      header: "Alamat",
      accessorKey: "address",
    },
    {
        header: "No Telephone",
        accessorKey: "number_phone",
      },
    {
      header: "email",
      accessorKey: "email",
    },
    {
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-5">
          <RiEditBoxLine size={18} className="text-custom-blue-600 cursor-pointer"
           onClick={() => {
            setSelectedId(row.original.id);
            handleEditUser();
          }} 
          />
          <FaTrashAlt
            size={18}
            className="text-red-900 cursor-pointer"
            onClick={() => {
              setSelectedId(row.original.id);
              handleDeleteUser();
            }} 
          />
        </div>
      ),
    },
  ];


  return (
    <>
          <DeleteUserModal open ={isDeleteUser} handleOpen={handleDeleteUser} id={selectedId} />
          <EditUserModal open ={isEditUser} handleOpen={handleEditUser} id={selectedId} />
      <Table
        data={data || []}
        columns={columns}
        isLoading={isLoading}
        search={searchValue}
        setSearch={setSearchValue}
        // metadata={{
        //   pageIndex: params.current_page - 1,
        //   pageSize: params.row_per_page,
        // }}
        setParams={setParams}
        // rowExpand={rowExpand}
      />
    </>
  );
};

export default TableUser;
