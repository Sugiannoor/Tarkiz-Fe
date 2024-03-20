import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { ColumnDef} from "@tanstack/react-table";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import Table from "@/Components/table/Table";
import { APIParams } from "@/features/user/types/apiParams";
import { TableProps } from "@/features/user/types/tableParams";
import { ComplaintTableType } from "../../types/complaintTable";
import { Chip } from "@material-tailwind/react";
import { FaTrashAlt } from "react-icons/fa";
import { RiEditBoxLine } from "react-icons/ri";
import { DeleteComplaintModal } from "../Modal/DeleteComplaintModal";

const TableComplaint = ({ searchValue, setSearchValue }: TableProps) => {
  const [selectedId, setSelectedId] = useState (0);
  const [isDelete, setIsDelete] = useState (false);
  const handleDelete = () => setIsDelete (!isDelete)
  const [params, setParams] = useState<APIParams>({
    search: searchValue,
  });

//   const { data, isLoading } = useQuery({
//     queryKey: ["finance-contract-datatable", params],
//     queryFn: () => getContractFinanceDatatable(params),
//   });

  const columns: ColumnDef<ComplaintTableType>[] = [
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
        header: "Judul Keluhan",
        accessorKey: "title",
      },
    {
      header: "Keluhan",
      accessorKey: "complaint",
    },
    {
        header: "Produk",
        accessorKey: "product_name",
      },
      {
        header: "Urgensi",
        accessorKey: "urgent_status",
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({row}) => {
            if (row.original.status === "Baru") {
                return <Chip color="red" value="Baru" className="text-center font-poppins"/>;
            } else if (row.original.status === "Proses") {
                return <Chip color="yellow" value="Proses" className="text-center font-poppins" />;
            } else if (row.original.status === "Selesai") {
                return <Chip color="green" value="Selesai" className="text-center font-poppins" />;
            }
            return null;
        }
      },
    {
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-5">
          <Link to={`/keluhan/edit/${row.original.id}`}>
          <RiEditBoxLine size={18} className="text-custom-blue-600 cursor-pointer"/>
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
    <DeleteComplaintModal open={isDelete} handleOpen={handleDelete} id={selectedId}/>
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

export default TableComplaint;
