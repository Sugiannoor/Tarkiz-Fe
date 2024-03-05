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
import { ComplaintTableType } from "../../types/complaintTable";
import { Chip } from "@material-tailwind/react";

  
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
  
  const dummyData: TableResponse<ComplaintTableType> = {
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
          "id": 1,
          "no": 1,
          "contract_code": "CONTRACT001",
          "title": "Keluhan Pertama",
          "product_name": "Produk A",
          "complaint": "Terdapat masalah saat login",
          "urgent_status": "Tidak urgent",
          "status": "Baru",
          "date": "2024-02-21"
        },
        {
          "id": 2,
          "no": 2,
          "contract_code": "CONTRACT002",
          "title": "Keluhan Kedua",
          "product_name": "Produk B",
          "complaint": "Tidak dapat melakukan pembayaran",
          "urgent_status": "Urgent",
          "status": "Proses",
          "date": "2024-02-20"
        },
        {
          "id": 3,
          "no": 3,
          "contract_code": "CONTRACT003",
          "title": "Keluhan Ketiga",
          "product_name": "Produk C",
          "complaint": "Lambatnya respon dari sistem",
          "urgent_status": "Urgent",
          "status": "Selesai",
          "date": "2024-02-19"
        }
      ],
  };

const TableComplaint = ({ searchValue, setSearchValue }: TableProps) => {
  const [params, setParams] = useState<APIParams>({
    current_page: 1,
    row_per_page: 10,
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
                return <Chip color="yellow" value="Proses" className="font-poppins" />;
            } else if (row.original.status === "Selesai") {
                return <Chip color="green" value="Selesai" className="font-poppins" />;
            }
            return null;
        }
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

export default TableComplaint;
