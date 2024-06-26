import { useMemo, useState } from "react";

import { useDebounce } from "@/hooks";
import {
  ColumnDef,
  ExpandedState,
  Row,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { Button, Typography } from "@material-tailwind/react";

type TableProps<T> = {
  data?: [];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  search?: string;
  setSearch?: (value: string) => void;
  // metadata: PaginationState;
  rowExpand?: (row: Row<T>) => React.ReactNode;
};
const Table = <T,>({
  data,
  columns,
  isLoading,
  search,
  setSearch,
  // metadata,
  rowExpand,
}: TableProps<T>) => {
  const debouncedValue = useDebounce<string | undefined>(search, 500);
  // const [sorting, setSorting] = useState<SortingState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  // const [pagination, setPagination] = useState<PaginationState>(metadata);
  // const { pageIndex, pageSize } = pagination;
  const tableData = useMemo(() => {
    if (isLoading || !data) return Array(10).fill({});
    return data;
  }, [isLoading, data]);

  const tableColumns = useMemo(
    () =>
      isLoading
        ? columns.map((column) => ({
            ...column,
            cell: () => (
              <Typography
                as="div"
                variant="paragraph"
                className="mb-2 h-3 w-30 rounded-full bg-gray-300"
              >
                &nbsp;
              </Typography>
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
      expanded,
      globalFilter: debouncedValue,
    },
    // onSortingChange: setSorting,
    // onPaginationChange: setPagination,
    onExpandedChange: setExpanded,
    onGlobalFilterChange: setSearch,
    manualPagination: false,
    manualExpanding: true,
  });
  return (
    <>
      <table className="mt-4 w-full overflow-x-scroll table-auto text-left">
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
          variant="outlined"
          size="sm"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous
        </Button>
        <Button
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
