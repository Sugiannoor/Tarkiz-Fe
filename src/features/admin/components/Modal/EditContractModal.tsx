import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { UpdateContract, getContractById } from "../../api/contract";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getLabelProduct } from "../../api/product";
import Select from "react-select";
import toast from "react-hot-toast";
import { editContractForm } from "../../types/crudContract";
import { getLabelUser } from "../../api/user";
import Loading from "@/Components/Loading";

type props = {
  open: boolean;
  id: number;
  handleOpen: () => void;
};
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
export const EditContractModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient();
  const [contractDate, setContractDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Option | null>();
  const [selectedUser, setSelectedUser] = useState<Option | null>();
  const [contractName, setContractName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleCancel = () => {
    handleOpen();
  };
  const { data: dataContract, isLoading: isContractLoading } =
    useQuery<DataContract>({
      queryKey: ["contract", id],
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
      setContractDate(dataContract.taken_at);
      setEndDate(dataContract.deadline);
      setPrice(dataContract.price);
      setContractName(dataContract.name);
      setDescription(dataContract.description);
      setSelectedProduct(dataContract.product_selected ?? []);
    }
  }, [dataContract]);
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: UpdateContract,
    onSuccess: () => {
      queryClient.invalidateQueries("table-contract");
      toast.success("Contract berhasil diperbaharui");
      handleOpen();
    },
    onError: ({ response }) => {
      if (response) {
        const errors: { [key: string]: string } = response.data.massages;
        const errorMessages = Object.values(errors).map(
          (error: string) => error
        );
        errorMessages.forEach((errorMessage: string, index) => {
          if (index === 0) {
            toast.error(errorMessage);
          }
        });
      } else {
        toast.error("Terjadi kesalahan saat memproses permintaan.");
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idProduct = selectedProduct?.value;
    const idClient = selectedUser?.value;
    const dataSubmit: editContractForm = {
      id: id,
      name: contractName,
      product_id: idProduct,
      taken_at: contractDate,
      deadline: endDate,
      id_user: idClient,
      description: description,
      price: price,
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
        className="h-[95%] overflow-y-scroll"
      >
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Edit Kontrak
        </DialogHeader>
        {isContractLoading ? (
          <Loading />
        ) : (
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
                placeholder="Nama Kontrak"
                value={contractName}
                onChange={(e) => setContractName(e.target.value)}
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
                Nama Client
              </div>
              <Select
                value={selectedUser}
                onChange={setSelectedProduct}
                options={dataUser}
                isLoading={isUserLoading}
              />
              <div className="my-5">
                <div className="text-lg text-[#005697] font-normal font-poppins">
                  Product
                </div>
                <Select
                  value={selectedProduct}
                  onChange={setSelectedProduct}
                  options={dataProduct}
                  isLoading={isProductLoading}
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
              <div className="mt-2">
                <label
                  htmlFor="description"
                  className="text-lg text-[#005697] font-normal font-poppins"
                >
                  Deskripsi
                </label>
                <Textarea
                  className="mt-2"
                  placeholder="Deskripsi"
                  variant="outlined"
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
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
        )}
      </Dialog>
    </>
  );
};
