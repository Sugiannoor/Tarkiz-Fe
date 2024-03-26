import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/Components/table/Table";
import { TableProps } from "@/features/user/types/tableParams";
import { productTableType } from "../../types/productTable";
import { RiEditBoxLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { EditProductModal } from "../Modal/EditProductModal";
import { DeleteProductModal } from "../Modal/DeleteProduct";
import { useQuery } from "react-query";
import { getAllProduct } from "../../api/product";
import { Chip } from "@material-tailwind/react";

const TableProduct = ({ searchValue, setSearchValue }: TableProps) => {
  const [selectedId, setSelectedId] = useState<number>(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const handleEdit = () => setIsEdit(!isEdit);
  const handleDelete = () => setIsDelete(!isDelete);

    const { data, isLoading } = useQuery({
      queryKey: ["table-product"],
      queryFn: getAllProduct,
    });

  const columns: ColumnDef<productTableType>[] = [
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "Nama Program",
      accessorKey: "program",
    },  
    {
      header: "Deskripsi",
      accessorKey: "description",
    },
    {
      header: "Kategori",
      accessorKey: "type",
    },
    {
      header: "Tag Product",
      accessorKey: "tags",
      cell: ({ row }) => (
        <div className="flex flex-wrap overflow-y-hidden mt-2 gap-1 max-w-[200px]" style={{scrollbarWidth: "none"}}>
          {row.original.tags.map((tag: string, index: number) => (
            <Chip
              key={index}
              variant="outlined"
              color="green"
              value={tag}
              className="font-raleway whitespace-nowrap p-1 text-xs"
            />
          ))}
        </div>
      ),
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
      <Table
        data={data || []}
        columns={columns}
        isLoading={isLoading}
        search={searchValue}
        setSearch={setSearchValue}
      />
<EditProductModal open= {isEdit} handleOpen={handleEdit} id={selectedId} />
<DeleteProductModal open= {isDelete} handleOpen={handleDelete} id={selectedId} />
    </>
  );
};

export default TableProduct;
