import { HeaderGroup, flexRender } from "@tanstack/react-table";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import { PiArrowsDownUp } from "react-icons/pi";

export const TableHeader = <T,>({
  headerGroups,
}: {
  headerGroups: HeaderGroup<T>[];
}) => {
  return (
    <>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className={`${header.column.getCanSort() ? "cursor-pointer" : ""} font-poppins  border-y border-blue-gray-100 bg-blue-gray-50/50 p-4`}
              onClick={header.column.getToggleSortingHandler()}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
              {(header.column.getIsSorted() as string) ? (
                {
                  asc: <BsSortUp size={18} className="ms-2 text-center" />,
                  desc: <BsSortDown size={18} className="ms-2 text-center" />,
                }[(header.column.getIsSorted() as string) ?? null]
              ) : (
                <>
                  {header.column.getCanSort() ? (
                    <PiArrowsDownUp size={18}  />
                  ) : null}
                </>
              )}
            </th>
          ))}
        </tr>
      ))}
    </>
  );
};
