import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { ColumnDef} from "@tanstack/react-table";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import Table from "@/Components/table/Table";
import { APIParams } from "@/features/user/types/apiParams";
import { TableProps } from "@/features/user/types/tableParams";
import { ContractTableType } from "../../types/contractTable";
import { RiEditBoxLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { EditContractModal } from "../Modal/EditContractModal";
import { DeleteContractModal } from "../Modal/DeleteContractModal";
import { BiPrinter } from "react-icons/bi";

  
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
  
  const dummyData: TableResponse<ContractTableType> = {
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
          contract_code: "CON1",
          name: "Contract A",
          program: ["Web Development", "Android"],
          contract_date: "2024-02-21",
          client_name: "Client A"
        },
        {
          id: 2,
          no: 2,
          contract_code: "CON2",
          name: "Contract B",
          program: ["iOS"],
          contract_date: "2024-02-22",
          client_name: "Client B"
        },
        {
          id: 3,
          no: 3,
          contract_code: "CON3",
          name: "Contract C",
          program: ["Web Development", "Backend Development"],
          contract_date: "2024-02-23",
          client_name: "Client C"
        }
      ]
  };

const TableContract = ({ searchValue, setSearchValue }: TableProps) => {
  const navigate = useNavigate ();
  const [selectedId, setSelectedId] = useState (0);
  const [isEdit, setIsEdit] = useState (false);
  const [isDelete, setIsDelete] = useState (false);
  
  const handleDelete = () => setIsDelete (!isDelete)
  const handleEdit = () => setIsEdit (!isEdit)

  const [params, setParams] = useState<APIParams>({
    // current_page: 1,
    // row_per_page: 10,
    search: searchValue,
  });

//   const { data, isLoading } = useQuery({
//     queryKey: ["finance-contract-datatable", params],
//     queryFn: () => getContractFinanceDatatable(params),
//   });

  const columns: ColumnDef<ContractTableType>[] = [
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
        header: "Kode Kontrak",
        accessorKey: "contract_code",
      },
    {
      header: "Nama Program",
      accessorKey: "program",
    },
    {
        header: "Tanggal Kontrak",
        accessorKey: "contract_date",
      },
    {
      header: "Nama Mitra",
      accessorKey: "client_name",
    },
    {
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-5">
          <RiEditBoxLine size={18} className="text-custom-blue-600 cursor-pointer"
           onClick={() => {
            setSelectedId(row.original.id);
            handleEdit();
          }} 
          />
           <BiPrinter size={18} className="text-custom-yellow-500 cursor-pointer"
           onClick={()=> navigate(`print/${row.original.id}` ,{})} 
          />
          <FaTrashAlt
            size={18}
            className="text-red-900 cursor-pointer"
            onClick={() => {
              setSelectedId(row.original.id);
              handleDelete();
            }} 
          />
        </div>
      ),
    },
  ];


  return (
    <>
    <DeleteContractModal open={isDelete} handleOpen={handleDelete} id={selectedId} />
    <EditContractModal open={isEdit} handleOpen={handleEdit} id={selectedId} />
      <Table
        data={dummyData || []}
        columns={columns}
        // isLoading={isLoading}
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

export default TableContract;
