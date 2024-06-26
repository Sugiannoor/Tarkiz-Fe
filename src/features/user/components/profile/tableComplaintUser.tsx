import { ColumnDef } from "@tanstack/react-table";
import Table from "@/Components/table/Table";
import { TableProps } from "@/features/user/types/tableParams";
import { Chip } from "@material-tailwind/react";
import { FaTrashAlt } from "react-icons/fa";
import { useQuery } from "react-query";
import { ComplaintTableType } from "@/features/admin/types/complaintTable";
import { getComplaintByUser } from "@/features/admin/api/complaint";
import { useState } from "react";
import { DeleteComplaintModal } from "@/features/admin/components/Modal/DeleteComplaintModal";

const TableComplaint = ({ searchValue, setSearchValue }: TableProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["table-complaint"],
    queryFn: getComplaintByUser,
  });
  const [selectedId, setSelectedId] = useState<number>(0);
  const [isDelete, setIsDelete] = useState(false);
  const handleDelete = () => setIsDelete(!isDelete);

  const columns: ColumnDef<ComplaintTableType>[] = [
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "Kode Kontrak",
      accessorKey: "contracts_id",
    },
    {
      header: "Judul Keluhan",
      accessorKey: "name",
    },
    {
      header: "Keluhan",
      accessorKey: "description",
    },
    {
      header: "Urgensi",
      accessorKey: "urgensi",
      cell: ({ row }) => {
        if (row.original.urgensi === "baru") {
          return (
            <Chip
              variant="outlined"
              value="Baru"
              className="text-center font-poppins"
            />
          );
        } else if (row.original.urgensi === "rendah") {
          return (
            <Chip
              variant="outlined"
              value="rendah"
              className="text-center font-poppins"
            />
          );
        } else if (row.original.urgensi === "sedang") {
          return (
            <Chip
              variant="outlined"
              value="sedang"
              className="text-center font-poppins"
            />
          );
        } else if (row.original.urgensi === "tinggi") {
          return (
            <Chip
              variant="outlined"
              value="tinggi"
              className="text-center font-poppins"
            />
          );
        }
        return null;
      },
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }) => {
        if (row.original.status === "baru") {
          return (
            <Chip
              color="red"
              value="Baru"
              className="text-center font-poppins"
            />
          );
        } else if (row.original.status === "proses") {
          return (
            <Chip
              color="yellow"
              value="Proses"
              className="text-center font-poppins"
            />
          );
        } else if (row.original.status === "selesai") {
          return (
            <Chip
              color="green"
              value="Selesai"
              className="text-center font-poppins"
            />
          );
        }
        return null;
      },
    },
    {
      header: "Aksi",
      cell: ({ row }) => (
        <div className="flex gap-5">
          {/* <Link to={`/keluhan/edit/${row.original.id}`}>
            <RiEditBoxLine
              size={18}
              className="text-custom-blue-600 cursor-pointer"
            />
          </Link> */}
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
      <DeleteComplaintModal
        open={isDelete}
        handleOpen={handleDelete}
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

export default TableComplaint;
