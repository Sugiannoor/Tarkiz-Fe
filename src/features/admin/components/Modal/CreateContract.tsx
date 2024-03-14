import { handleError } from "@/utils/helper";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Option,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { CreateContract } from "../../api/contract";
import { getLabelProduct } from "../../api/product";
import Select from "react-select";
import { getLabelUser } from "../../api/user";

type props = {
  open: boolean;
  handleOpen: () => void;
};

type Option = {
  value: number;
  label: string;
};

export const CreateContractModal = ({ open, handleOpen }: props) => {
  const queryClient = useQueryClient();
  const [contractDate, setContractDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Option>();
  const [selectedUser, setSelectedUser] = useState<Option>();
  const [contractName, setContractName] = useState("");
  const [price, setPrice] = useState("");

  const { data: dataProduct, isLoading: isProductLoading } = useQuery({
    queryKey: ["product-label"],
    queryFn: getLabelProduct,
  });
  const { data: dataUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["user-label"],
    queryFn: getLabelUser,
  });
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: CreateContract,
    onSuccess: () => {
      queryClient.invalidateQueries("table-contract");
      toast.success("Data berhasil diperbaharui");
      handleOpen();
    },
    onError: (err: Error) => {
      const errorTypes = [
        "contract_code",
        "contract_date",
        "end_date",
        "client_id",
      ];
      handleError(err, errorTypes);
      return;
    },
  });
  const resetForm = () => {
    setContractDate("");
    setEndDate("");
    setSelectedProduct(undefined);
    setSelectedUser(undefined);
    setContractName("");
  };
  const handleCancel = () => {
    resetForm();
    handleOpen();
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idProduct = selectedProduct?.value;
    const idClient = selectedUser?.value;
    const dataSubmit = {
      contract_name: contractName,
      product_id: idProduct,
      contract_date: contractDate,
      end_date: endDate,
      client_id: idClient,
      price: price
    };

    await mutateAsync(dataSubmit);
  };
  return (
    <>
      <Dialog
        placeholder={""}
        open={open}
        handler={handleOpen}
        dismiss={{ escapeKey: false, outsidePress: false }}
      >
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Tambah Kontrak
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody placeholder={""} className="p-10">
            <div className="text-lg text-[#005697] font-normal font-poppins">
              Judul Kontrak
            </div>
            <Input
              crossOrigin={""}
              type="text"
              variant="static"
              id="contract_name"
              name="contract_name"
              placeholder="Judul Kontrak"
              value={contractName}
              onChange={(e) => setContractName(e.target.value)}
            />
            <div className="my-5">
              <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
                Nama Client
              </div>
              <Select
                defaultValue={selectedUser}
                onChange={setSelectedUser}
                options={dataUser}
                isLoading={isUserLoading}
              />
              <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
                Product
              </div>
              <Select
                defaultValue={selectedProduct}
                onChange={setSelectedProduct}
                options={dataProduct}
                isLoading={isProductLoading}
              />
            </div>
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
              Tanggal Contract
            </div>
            <Input
              crossOrigin={""}
              type="date"
              variant="static"
              id="contract_date"
              name="contract_date"
              placeholder="Nama Lengkap"
              value={contractDate}
              onChange={(e) => setContractDate(e.target.value)}
            />
             <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
              Nominal
            </div>
            <Input
              crossOrigin={""}
              type="number"
              variant="static"
              id="price"
              name="price"
              placeholder="Nominal"
              value={price}
              min={0}
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
              Contract Selesai
            </div>
            <Input
              crossOrigin={""}
              type="date"
              variant="static"
              id="end_date"
              name="end_date"
              placeholder="Nama Lengkap"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
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
