import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/Components/table/Table";
import { TableProps } from "@/features/user/types/tableParams";
import { RiEditBoxLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import { PortofolioTableType } from "../../types/portofolioTable";
import { DeletePortofolioModal } from "../Modal/DeletePortofolio";
import { EditPortofolioModal } from "../Modal/EditPortofolio";
import { getAllPortofolio } from "../../api/portofolio";

const TablePortofolio = ({ searchValue, setSearchValue }: TableProps) => {
  const [selectedId, setSelectedId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleDelete = () => setIsDelete(!isDelete);
  const handleEdit = () => setIsEdit(!isEdit);

  const { data, isLoading } = useQuery({
    queryKey: ["table-portofolio"],
    queryFn: getAllPortofolio
  });

  const columns: ColumnDef<PortofolioTableType>[] = [
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Program",
      accessorKey: "program",
    },
    {
      header: "Tanggal Kegiatan",
      accessorKey: "start_date",
    },
    {
      header: "Tanggal Selesai",
      accessorKey: "end_date",
    },
    {
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-5">
          <RiEditBoxLine
            size={18}
            className="text-custom-blue-600 cursor-pointer"
            onClick={() => {
              setSelectedId(row.original.id);
              handleEdit();
            }}
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
      <DeletePortofolioModal
        open={isDelete}
        handleOpen={handleDelete}
        id={selectedId}
      />
      <EditPortofolioModal
        open={isEdit}
        handleOpen={handleEdit}
        id={selectedId}
      />
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

export default TablePortofolio;
