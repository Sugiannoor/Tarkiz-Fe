import { useEffect, useMemo, useState } from "react";

import { useDebounce } from "@/hooks";
import {
  ColumnDef,
  ExpandedState,
  PaginationState,
  Row,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { Button } from "@material-tailwind/react";

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

type APIParams = {
  current_page: number;
  row_per_page: number;
  search?: string;
  sort?: string;
  sort_type?: "asc" | "desc";
};

type TableProps<T> = {
  data?: TableResponse<T>;
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  search?: string;
  setSearch?: (value: string) => void;
  metadata: PaginationState;
  setParams: (value: APIParams) => void;
  rowExpand?: (row: Row<T>) => React.ReactNode;
};
const Table = <T,>({
  data,
  columns,
  isLoading,
  search,
  setSearch,
  metadata,
  setParams,
  rowExpand,
}: TableProps<T>) => {
  const debouncedValue = useDebounce<string | undefined>(search, 500);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [pagination, setPagination] = useState<PaginationState>(metadata);
  const { pageIndex, pageSize } = pagination;

  useEffect(() => {
    setParams({
      current_page: pageIndex + 1,
      row_per_page: pageSize,
      search: debouncedValue,
    });
  }, [setParams, pageIndex, pageSize, debouncedValue]);
  const tableData = useMemo(() => {
    if (isLoading || !data) return Array(10).fill({});

    return data.records;
  }, [isLoading, data]);

  const tableColumns = useMemo(
    () =>
      isLoading
        ? columns.map((column) => ({
            ...column,
            cell: () => (
              <span>
                <span className="placeholder w-full bg-secondary rounded"></span>
              </span>
            ),
          }))
        : columns,
    [isLoading, columns]
  );
  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
    // pageCount: data?.pages?.total_pages || -1,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      pagination,
      expanded,
      globalFilter: debouncedValue,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onExpandedChange: setExpanded,
    onGlobalFilterChange: setSearch,
    manualPagination: false,
    manualExpanding: true,
  });
  return (
    <>
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <TableHeader headerGroups={table.getHeaderGroups()} />
        </thead>
        <tbody>
          <TableBody
            tableRow={table.getRowModel()}
            tableHeader={table.getHeaderGroups()}
            rowExpand={rowExpand}
          />
        </tbody>
      </table>
      <div className="flex gap-2 justify-end m-5">
        <Button
          placeholder={""}
          variant="outlined"
          size="sm"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous
        </Button>
        <Button
          placeholder={""}
          variant="outlined"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Table;
