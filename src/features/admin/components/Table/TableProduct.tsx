import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/Components/table/Table";
import { APIParams } from "@/features/user/types/apiParams";
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
  const [params, setParams] = useState<APIParams>({
    // current_page: 1,
    // row_per_page: 10,
    search: searchValue,
  });

    const { data, isLoading } = useQuery({
      queryKey: ["table-product"],
      queryFn: getAllProduct,
    });

  const columns: ColumnDef<productTableType>[] = [
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
        <div className="flex overflow-x-auto overflow-y-hidden mt-2 gap-5 max-w-[200px]" style={{scrollbarWidth: "none"}}>
          {row.original.tags.map((tag: string, index: number) => (
            <Chip
              key={index}
              variant="outlined"
              color="green"
              value={tag}
              className="font-raleway whitespace-nowrap"
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
        // metadata={{
        //   pageIndex: params.current_page - 1,
        //   pageSize: params.row_per_page,
        // }}
        setParams={setParams}
        // rowExpand={rowExpand}
      />
<EditProductModal open= {isEdit} handleOpen={handleEdit} id={selectedId} />
<DeleteProductModal open= {isDelete} handleOpen={handleDelete} id={selectedId} />
    </>
  );
};

export default TableProduct;
