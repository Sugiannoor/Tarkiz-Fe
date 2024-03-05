import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { ColumnDef} from "@tanstack/react-table";
import { AiOutlineInfoCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
import { userTableType } from "../../types/userTable";
import Table from "@/Components/table/Table";
import { APIParams } from "@/features/user/types/apiParams";
import { TableProps } from "@/features/user/types/tableParams";
import { RiEditBoxLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { DeleteUserModal } from "../Modal/DeleteUserModal";
import { EditUserModal } from "../Modal/EditUserModal";

  
  type TableResponse<T> = {
    pages: {
      current_page: number;
      total_pages: number;
    };
    data: {
      total_record: number;
      total_filtered: number;
      total_record_in_page: number;
      total_row_per_page: number;
    };
    records: T[];
  };
  
  const dummyData: TableResponse<userTableType> = {
    pages: {
      current_page: 1,
      total_pages: 1,
    },
    data: {
      total_record: 3,
      total_filtered: 3,
      total_record_in_page: 3,
      total_row_per_page: 10,
    },
    records: [
      {
        id: 1,
        no: 1,
        username: "John Doe",
        address: "123 Main Street",
        number_phone: "03102312123",
        email: "john.doe@example.com",
      },
      {
        id: 2,
        no: 2,
        username: "Jane Smith",
        address: "456 Elm Street",
        number_phone: "03102312123",
        email: "jane.smith@example.com",
      },
      {
        id: 3,
        no: 3,
        username: "Alice Johnson",
        address: "789 Oak Street",
        number_phone: "03102312123",
        email: "alice.johnson@example.com",
      },
      {
        id: 4,
        no: 4,
        username: "John Doe",
        address: "123 Main Street",
        number_phone: "03102312123",
        email: "john.doe@example.com",
      },
      {
        id: 5,
        no: 5,
        username: "Jane Smith",
        address: "456 Elm Street",
        number_phone: "03102312123",
        email: "jane.smith@example.com",
      },
      {
        id: 6,
        no: 6,
        username: "Alice Johnson",
        address: "789 Oak Street",
        number_phone: "03102312123",
        email: "alice.johnson@example.com",
      },
      {
        id: 7,
        no: 7,
        username: "John Doe",
        address: "123 Main Street",
        number_phone: "03102312123",
        email: "john.doe@example.com",
      },
      {
        id: 8,
        no: 8,
        username: "Jane Smith",
        address: "456 Elm Street",
        number_phone: "03102312123",
        email: "jane.smith@example.com",
      },
      {
        id: 9,
        no: 9,
        username: "Alice Johnson",
        address: "789 Oak Street",
        number_phone: "03102312123",
        email: "alice.johnson@example.com",
      },
      {
        id: 10,
        no: 10,
        username: "John Doe",
        address: "123 Main Street",
        number_phone: "03102312123",
        email: "john.doe@example.com",
      },
      {
        id: 11,
        no: 12,
        username: "Jane Smith",
        address: "456 Elm Street",
        number_phone: "03102312123",
        email: "jane.smith@example.com",
      },
      {
        id: 13,
        no: 13,
        username: "Alice Johnson",
        address: "789 Oak Street",
        number_phone: "03102312123",
        email: "alice.johnson@example.com",
      },
    ],
  };

const TableUser = ({ searchValue, setSearchValue }: TableProps) => {
  const [isEditUser, setIsEditUser] = useState (false);
  const [isDeleteUser, setIsDeleteUser] = useState (false);
  const [selectedId, setSelectedId] = useState<number> (0);

  const handleDeleteUser = () => setIsDeleteUser (!isDeleteUser)
  const handleEditUser = () => setIsEditUser (!isEditUser)


  const [params, setParams] = useState<APIParams>({
    current_page: 1,
    row_per_page: 10,
    search: searchValue,
  });

//   const { data, isLoading } = useQuery({
//     queryKey: ["finance-contract-datatable", params],
//     queryFn: () => getContractFinanceDatatable(params),
//   });

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
        data={dummyData || []}
        columns={columns}
        // isLoading={isLoading}
        search={searchValue}
        setSearch={setSearchValue}
        metadata={{
          pageIndex: params.current_page - 1,
          pageSize: params.row_per_page,
        }}
        setParams={setParams}
        // rowExpand={rowExpand}
      />
    </>
  );
};

export default TableUser;
