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
import { getLabelProduct } from "../../api/product";
import Select from "react-select";
import { getLabelUser } from "../../api/user";
import { CreatePortofolio } from "../../api/portofolio";
import { FilePondFile } from "filepond";
import { FilePond } from "react-filepond";
import { PortofolioDto } from "../../types/portofolioTable";

type props = {
  open: boolean;
  handleOpen: () => void;
};

type Option = {
  value: number;
  label: string;
};

export const CreatePortofolioModal = ({ open, handleOpen }: props) => {
  const queryClient = useQueryClient();
  const [portofolioDate, setportofolioDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [files, setFiles] = useState<FilePondFile[]>();
  const [file, setFile] = useState<FilePondFile>();
  const [selectedProduct, setSelectedProduct] = useState<Option>();
  const [selectedUser, setSelectedUser] = useState<Option>();
  const [portofolioName, setportofolioName] = useState("");
  const [description, setDescription] = useState("");

  const { data: dataProduct, isLoading: isProductLoading } = useQuery({
    queryKey: ["product-label"],
    queryFn: getLabelProduct,
  });
  const { data: dataUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["user-label"],
    queryFn: getLabelUser,
  });
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: CreatePortofolio,
    onSuccess: () => {
      queryClient.invalidateQueries("table-portofolio");
      toast.success("Portofolio berhasil ditambahkan");
      handleOpen();
      resetForm();
    },
    onError: ({ response }) => {
      if (response) {
        const errors: { [key: string]: string } = response.data.message;
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
  const resetForm = () => {
    setportofolioDate("");
    setEndDate("");
    setSelectedProduct(undefined);
    setSelectedUser(undefined);
    setDescription("");
    setportofolioName("");
  };
  const handleCancel = () => {
    resetForm();
    handleOpen();
  };
  const handleFileChange = (fileItems: FilePondFile[]) => {
    setFiles(fileItems);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idProduct = selectedProduct?.value;
    const idClient = selectedUser?.value;
    const dataSubmit: PortofolioDto = {
      program: portofolioName,
      product_id: idProduct,
      start_date: portofolioDate,
      end_date: endDate,
      user_id: idClient,
      description: description,
      gallery: files,
      photo: file,
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
          Tambah Portofolio
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
              id="portofolio_name"
              name="portofolio_name"
              placeholder="Judul Kontrak"
              value={portofolioName}
              onChange={(e) => setportofolioName(e.target.value)}
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
              Tanggal Kegiatan
            </div>
            <Input
              crossOrigin={""}
              type="date"
              variant="static"
              id="portofolio_date"
              name="portofolio_date"
              placeholder="Nama Lengkap"
              value={portofolioDate}
              onChange={(e) => setportofolioDate(e.target.value)}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
              Tanggal Selesai
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
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-2">
                <div className="text-lg text-[#005697] font-normal font-poppins">
                  Gambar Produk
                </div>
                <FilePond
                  id="file"
                  name="file"
                  onupdatefiles={(fileItems) => {
                    if (fileItems.length > 0) {
                      setFile(fileItems[0]);
                    } else {
                      setFile(undefined);
                    }
                  }}
                  acceptedFileTypes={["image/jpeg", "image/png"]}
                  dropOnPage
                  maxFiles={1}
                  allowMultiple={false}
                  dropValidation
                />
              </div>
            <div className="mt-2">
              <label
                htmlFor="files"
                className="text-lg text-[#005697] font-normal font-poppins"
              >
                Gallery Product
              </label>
              <FilePond
                name="files"
                dropOnPage
                onupdatefiles={handleFileChange}
                allowMultiple
                maxFiles={3}
                acceptedFileTypes={["image/jpeg", "image/png"]}
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
