import { Metadata } from '@/features/user/types/api';
import {  Card, CardBody, Typography } from '@material-tailwind/react';
import { useId } from 'react';
import { TableSkeleton } from './TableSkeleton';


interface Props<T> {
    title?: string;
    header: (string | boolean)[];
    items: T[] | undefined;
    renderItem: (item: T, index: number) => React.ReactNode;
    metadata?: Metadata;
    onPageChange?: (page: number) => void;
    loading?: boolean;
  }
const TableCustom =  <T,>(props: Props<T>) => {
  const { items, renderItem, header, loading, metadata, onPageChange } = props;
  const id = useId();

  return (
    <div>
      <Card placeholder={""} className="h-full w-full">
        <CardBody placeholder={""} className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {header.map((item, i) => (
                  <th
                    key={`${id}_head_${i}`}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      placeholder={""}
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {item}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            {loading || !items ? (
                <TableSkeleton col={header.length} row={5} />
              ) : items.length > 0 ? (
                items.map((item, index) => renderItem(item, index))
              ) : (
                <tr>
                  <td colSpan={header.length} className="text-center !py-12">
                    Data tidak ditemukan
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default TableCustom;
