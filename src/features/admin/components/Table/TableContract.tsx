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
import { useQuery } from "react-query";
import { getAllContract } from "../../api/contract";

  
  
const TableContract = ({ searchValue, setSearchValue }: TableProps) => {
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

  const { data, isLoading } = useQuery({
    queryKey: ["table-contract"],
    queryFn: getAllContract,
  });

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
        accessorKey: "id",
      },
    {
      header: "Judul Kontrak",
      accessorKey: "name",
    },
    {
        header: "Tanggal Kontrak",
        accessorKey: "taken_at",
      },
    {
      header: "Tanggal Selesai",
      accessorKey: "deadline",
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
          <Link to={`/kontrak/print/${row.original.id}`} target="_blank">
           <BiPrinter size={18} className="text-custom-yellow-500 cursor-pointer" />
          </Link>
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

export default TableContract;
