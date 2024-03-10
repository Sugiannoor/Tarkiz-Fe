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
import { getLabelUser } from "../../api/user";

type props = {
  open: boolean;
  id: number;
  handleOpen: () => void;
};
type Option = {
  value: number;
  label: string;
}

type DataContract = {
  contract_date: string,
  end_date: string,
  contract_code: string,
  contract_id: number,
  product_selected: Option,
  user_selected: Option,
}
export const EditContractModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient();
  const [contractDate, setContractDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Option>();
  const [selectedUser, setSelectedUser] = useState<Option>();
  const [contractCode, setContractCode] = useState("");

  const resetForm = () => {
    setContractDate("");
    setEndDate("");
    setSelectedProduct(undefined);
    setSelectedUser(undefined);
    setContractCode("");
  };
  const handleCancel = () => {
    resetForm(); 
    handleOpen(); 
  }
  const { data: dataContract, isLoading: isContractLoading } = useQuery<DataContract>({
    queryKey: ["contract-edit", id],
    queryFn: () => getContractById(id),
  });

  const { data: dataUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["user-label"],
    queryFn: getLabelUser,
  });

  const { data: dataProduct, isLoading: isProductLoading } = useQuery({
    queryKey: ["product-label"],
    queryFn: getLabelProduct,
  });

  useEffect(() => {
    if (dataContract) {
      setSelectedUser(dataContract.user_selected);
      setContractDate(dataContract.contract_date);
      setEndDate(dataContract.end_date);
      setContractCode(dataContract.contract_code);
      setSelectedProduct(dataContract.product_selected);
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
    const idClient = selectedUser?.value;
    const dataSubmit: editContractForm = {
      id: id,
      contract_code: contractCode,
      product_id: idProduct,
      contract_date: contractDate,
      end_date: endDate,
      client_id: idClient,
    };

    await mutateAsync(dataSubmit);
  };
  return (
    <>
      <Dialog placeholder={""} open={open} handler={handleOpen} dismiss={{escapeKey: false, outsidePress: false}}>
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
                onChange={setSelectedProduct}
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
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
               Nama Client  
              </div>
              <Select
                defaultValue={selectedProduct}
                onChange={setSelectedProduct}
                options={dataUser}
                isLoading={isUserLoading}
              />
          </DialogBody>
          <DialogFooter placeholder={""}>
            <Button
              placeholder={""}
              variant="text"
              color="red"
              onClick={handleCancel}
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