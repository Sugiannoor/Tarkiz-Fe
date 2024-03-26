import { handleError } from "@/utils/helper";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Option,
  Input,
  Textarea,
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
  const [description, setDescription] = useState("");
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
      toast.success("Kontrak berhasil ditambahkan");
      handleOpen();
      resetForm();
    },
    onError: ({ response }) => {
      if (response) {
        const errors: { [key: string]: string } = response.data.message;
        const errorMessages = Object.values(errors).map((error:string) => error);
        errorMessages.forEach((errorMessage: string, index) => {
          if (index === 0) {
            toast.error(errorMessage);
          }
        });
      } else {
        toast.error("Terjadi kesalahan saat memproses permintaan.");
      }
    }
  });
  const resetForm = () => {
    setContractDate("");
    setEndDate("");
    setSelectedProduct(undefined);
    setSelectedUser(undefined);
    setDescription ("")
    setPrice ("")
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
      name: contractName,
      product_id: idProduct,
      taken_at: contractDate,
      deadline: endDate,
      id_user: idClient,
      description: description,
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
        className="h-[95%] overflow-y-scroll"
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
              className=""
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
               onChange={(e)=> setDescription (e.target.value)}
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
      </Dialog>
    </>
  );
};
