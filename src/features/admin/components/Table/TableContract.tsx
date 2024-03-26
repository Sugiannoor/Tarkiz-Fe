import { useState } from "react";
import { ColumnDef} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import Table from "@/Components/table/Table";
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


  const { data, isLoading } = useQuery({
    queryKey: ["table-contract"],
    queryFn: getAllContract,
  });

  const columns: ColumnDef<ContractTableType>[] = [
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
      />
    </>
  );
};

export default TableContract;
