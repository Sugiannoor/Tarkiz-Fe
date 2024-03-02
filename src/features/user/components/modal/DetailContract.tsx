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

export const DetailContract = ({ open, handler, id, contractData }: props) => {
  console.log(id);
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handler}>
        <DialogHeader placeholder={""} className="font-poppins text-2xl">
          Detail Kontrak Anda
        </DialogHeader>
        <DialogBody placeholder={""}>
          <div className="p-5 rounded-md flex border-2 border-[#005697]">
            <div>
            <p className="text-lg font-poppins">ID Contract : </p>
            <p className="text-lg font-poppins">Nama Aplikasi : </p>
            <p className="text-lg font-poppins">Jenis Program : </p>
            <p className="text-lg font-poppins">Deskripsi : </p>
            <p className="text-lg font-poppins">Tanggal Kontrak : </p>
            <p className="text-lg font-poppins">Tanggal Berakhir : </p>
            <p className="text-lg font-poppins">lampiran : </p>
            </div>
            <div>
              <p className="font-poppins">{id}</p>
              <p>{contractData?.appName}</p>
              <p>{contractData?.programType}</p>
              <p>{contractData?.description}</p>
              <p>{contractData?.startDate}</p>
              <p>{contractData?.endDate}</p>
            </div>
          </div>
        </DialogBody>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="gradient"
            color="black"
            onClick={handler}
          >
            <span>tutup</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
