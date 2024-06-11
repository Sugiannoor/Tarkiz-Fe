import { getContractById } from "@/features/admin/api/contract";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useQuery } from "react-query";

type Option = {
  value: number;
  label: string;
};
type DataContract = {
  taken_at: string;
  deadline: string;
  price: string;
  name: string;
  id: number;
  description: string;
  product_selected: Option;
  user_selected: Option;
};
type props = {
  open: boolean;
  handler: () => void;
  id: number;
};

export const DetailContract = ({ open, handler, id }: props) => {
  const { data: dataContract } = useQuery<DataContract>({
    queryKey: ["contract", id],
    queryFn: () => getContractById(id),
  });
  return (
    <>
      <Dialog open={open} handler={handler}>
        <DialogHeader className="font-poppins text-2xl">
          Detail Kontrak Anda
        </DialogHeader>
        <DialogBody>
          {dataContract ? (
            <table className="border-2 w-full">
              <tbody>
                <tr className="border-2 w-[50%] h-16 font-poppins font-light">
                  <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                    Judul Kontrak
                  </td>
                  <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                    {dataContract?.name}
                  </td>
                </tr>
                <tr className="border-2 w-[50%] h-16 font-poppins font-light">
                  <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                    Nama Produk / Aplikasi
                  </td>
                  <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                    {dataContract?.product_selected.label}
                  </td>
                </tr>
                <tr className="border-2 w-[50%] h-16 font-poppins font-light">
                  <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                    Tanggal Kontrak
                  </td>
                  <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                    {dataContract?.taken_at}
                  </td>
                </tr>
                <tr className="border-2 w-[50%] h-16 font-poppins font-light">
                  <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                    Deskripsi
                  </td>
                  <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                    {dataContract?.description}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div>Detail Kontrak Tidak Tersedia</div>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="black" onClick={handler}>
            <span>tutup</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
