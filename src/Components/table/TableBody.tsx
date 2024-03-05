import { Fragment } from "react";
import { HeaderGroup, Row, RowModel, flexRender } from "@tanstack/react-table";

export const TableBody = <T,>({
  tableRow,
  tableHeader,
  rowExpand,
}: {
  tableRow: RowModel<T>;
  tableHeader: HeaderGroup<T>[];
  rowExpand?: (row: Row<T>) => React.ReactNode;
}) => {
  return (
    <>
      {tableRow.rows.length > 0 ? (
        tableRow.rows.map((row) => (
          <Fragment key={row.id}>
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-5 font-poppins">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
            {rowExpand &&
              row.getIsExpanded() &&
              tableHeader.map((headerGroup) => (
                <tr key={headerGroup.id}>
                  <td colSpan={headerGroup.headers.length}>{rowExpand(row)}</td>
                </tr>
              ))}
          </Fragment>
        ))
      ) : (
        <>
          {tableHeader.map((headerGroup) => (
            <tr key={headerGroup.id}>
              <td colSpan={headerGroup.headers.length} className="text-center font-poppins p-2">
                Data Tidak Tersedia
              </td>
            </tr>
          ))}
        </>
      )}
    </>
  );
};
