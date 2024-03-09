import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { UpdateContract, getContractById } from "../../api/contract";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getLabelProduct } from "../../api/product";
import Select from "react-select";
import toast from "react-hot-toast";
import { handleError } from "@/utils/helper";
import { editContractForm } from "../../types/crudContract";

type props = {
  open: boolean;
  id: number;
  handleOpen: () => void;
};
type Option = {
  value: number;
  label: string;
}
export const EditContractModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient();
  const [contractDate, setContractDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Option>();
  const [mitraName, setMitraName] = useState("");
  const [contractCode, setContractCode] = useState("");

  const { data: dataProduct, isLoading: isProductLoading } = useQuery({
    queryKey: ["contract-edit", id],
    queryFn: () => getContractById(id),
  });

  const { data: dataContract, isLoading: isContractLoading } = useQuery({
    queryKey: ["contract-edit"],
    queryFn: getLabelProduct,
  });

  useEffect(() => {
    if (dataContract) {
      setMitraName(dataContract.client_name);
      setContractDate(dataContract.contract_date);
      setEndDate(dataContract.end_date);
      setContractCode(dataContract.contract_code);
      setSelectedProduct(dataContract.product);
    }
  }, []);
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: UpdateContract,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Data berhasil diperbaharui");
      handleOpen();
    },
    onError: (err: Error) => {
      const errorTypes = [
        "id",
        "contract_code",
        "contract_date",
        "end_date",
        "client_name",
      ];
      handleError(err, errorTypes);
      return;
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idProduct = selectedProduct?.value;
    const dataSubmit: editContractForm = {
      id: id,
      contract_code: contractCode,
      product_id: idProduct,
      contract_date: contractDate,
      end_date: endDate,
      client_name: mitraName,
    };

    await mutateAsync(dataSubmit);
  };
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen}>
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Edit Kontrak
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody placeholder={""} className="p-10">
            <div className="text-lg text-[#005697] font-normal font-poppins">
              Kode Kontrak
            </div>
            <Input
              crossOrigin={""}
              type="text"
              variant="static"
              id="contract_code"
              name="contract_code"
              placeholder="Nama Lengkap"
              disabled={isContractLoading}
              value={contractCode}
              onChange={(e) => setContractCode(e.target.value)}
            />
            <div className="my-5">
              <div className="text-lg text-[#005697] font-normal font-poppins">
                Product
              </div>
              <Select
                defaultValue={selectedProduct}
                onChange={()=> setSelectedProduct}
                options={dataProduct}
                isDisabled={isProductLoading}
              />
            </div>
            <div className="text-lg text-[#005697] font-normal font-poppins">
              Tanggal Contract
            </div>
            <Input
              crossOrigin={""}
              type="date"
              variant="static"
              id="contract_date"
              name="contract_date"
              placeholder="Nama Lengkap"
              disabled={isProductLoading}
              value={contractDate}
              onChange={(e) => setContractDate(e.target.value)}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins">
              Contract Selesai
            </div>
            <Input
              crossOrigin={""}
              type="date"
              variant="static"
              id="end_date"
              name="end_date"
              placeholder="Nama Lengkap"
              disabled={isProductLoading}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins">
              Nama Client
            </div>
            <Input
              crossOrigin={""}
              type="text"
              variant="static"
              id="full_name"
              name="full_name"
              placeholder="Nama Lengkap"
              disabled={isProductLoading}
              value={mitraName}
              onChange={(e) => setMitraName(e.target.value)}
            />
          </DialogBody>
          <DialogFooter placeholder={""}>
            <Button
              placeholder={""}
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1 font-poppins"
            >
              <span>Cancel</span>
            </Button>
            <Button
              placeholder={""}
              className="font-poppins"
              variant="filled"
              color="black"
              type="submit"
              loading={isLoading}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};
