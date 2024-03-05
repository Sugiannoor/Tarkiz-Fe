import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import { ColumnDef} from "@tanstack/react-table";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import Table from "@/Components/table/Table";
import { APIParams } from "@/features/user/types/apiParams";
import { TableProps } from "@/features/user/types/tableParams";
import { productTableType } from "../../types/productTable";

  
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
  
  const dummyData: TableResponse<productTableType> = {
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
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)"
      },
      {
        id: 2,
        no: 2,
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)"
      },
      {
        id: 3,
        no: 3,
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)"
      },
      {
        id: 4,
        no: 4,
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)"
      },
      {
        id: 5,
        no: 5,
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)"
      },
      {
        id: 6,
        no: 6,
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)"
      },
      {
        id: 7,
        no: 7,
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)"
      },
      {
        id: 8,
        no: 8,
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)"
      },
      {
        id: 9,
        no: 9,
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)",
      },
      {
        id: 10,
        no: 10,
        category: "Web Development",
        description: "Web Keuangan dengan Menggunakan react",
        program: "Sapu (Sampah Penghasil Uang)"
      },
    ],
  };

const TableProduct = ({ searchValue, setSearchValue }: TableProps) => {
  const [params, setParams] = useState<APIParams>({
    current_page: 1,
    row_per_page: 10,
    search: searchValue,
  });

//   const { data, isLoading } = useQuery({
//     queryKey: ["finance-contract-datatable", params],
//     queryFn: () => getContractFinanceDatatable(params),
//   });

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
      accessorKey: "category",
    },
    {
      header: "Aksi",
      cell: ({ row }) => (
        <Link to={`detail/${row.original.id}`}>
          <AiOutlineInfoCircle />
        </Link>
      ),
    },
  ];


  return (
    <>
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

export default TableProduct;