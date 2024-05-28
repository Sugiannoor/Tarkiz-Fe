import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
type ContractData = {
  id: number;
  appName: string;
  programType: string;
  description: string;
  startDate: string;
  endDate: string;
};
type props = {
  open: boolean;
  handler: () => void;
  id: number;
  contractData?: ContractData;
};

export const DetailContract = ({ open, handler, id }: props) => {
  console.log(id);
  return (
    <>
      <Dialog open={open} handler={handler}>
        <DialogHeader className="font-poppins text-2xl">
          Detail Kontrak Anda
        </DialogHeader>
        <DialogBody>
          <table className="border-2 w-full">
            <tbody>
              <tr className="border-2 w-[50%] h-16 font-poppins font-light">
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Nama
                </td>
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Flora
                </td>
              </tr>
              <tr className="border-2 w-[50%] h-16 font-poppins font-light">
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Baris 1, Kolom 1
                </td>
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Baris 1, Kolom 2
                </td>
              </tr>
              <tr className="border-2 w-[50%] h-16 font-poppins font-light">
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Baris 1, Kolom 1
                </td>
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Baris 1, Kolom 2
                </td>
              </tr>
              <tr className="border-2 w-[50%] h-16 font-poppins font-light">
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Baris 1, Kolom 1
                </td>
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Baris 1, Kolom 2
                </td>
              </tr>
              <tr className="border-2 w-[50%] h-16 font-poppins font-light">
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Baris 1, Kolom 1
                </td>
                <td className="border-2 w-[50%] h-16 font-poppins font-light px-4">
                  Baris 1, Kolom 2
                </td>
              </tr>
            </tbody>
          </table>
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
