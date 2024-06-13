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
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getLabelProduct } from "../../api/product";
import Select from "react-select";
import toast from "react-hot-toast";
import { getLabelUser } from "../../api/user";
import Loading from "@/Components/Loading";
import { PortofolioDto, PortofolioUpdate } from "../../types/portofolioTable";
import { FilePondFile } from "filepond";
import { UpdatePortofolio, getPortofolioById } from "../../api/portofolio";
import { FilePond } from "react-filepond";
import { FaFileAlt } from "react-icons/fa";

type props = {
  open: boolean;
  id: number;
  handleOpen: () => void;
};
type Option = {
  value: number;
  label: string;
};

export const EditPortofolioModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient();
  const [portofolioDate, setPortofolioDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [files, setFiles] = useState<FilePondFile[]>();
  const [file, setFile] = useState<FilePondFile>();
  const [selectedProduct, setSelectedProduct] = useState<Option | null>();
  const [selectedUser, setSelectedUser] = useState<Option | null>();
  const [portofolioName, setPortofolioName] = useState("");
  const [description, setDescription] = useState("");

  // const resetForm = () => {
  //   setPortofolioDate("");
  //   setEndDate("");
  //   setSelectedProduct(undefined);
  //   setSelectedUser(undefined);
  //   setPortofolioName("");
  // };
  const handleCancel = () => {
    handleOpen();
  };
  const { data: dataPortofolio, isLoading: isPortofolioLoading } =
    useQuery<PortofolioUpdate>({
      queryKey: ["portofolio", id],
      queryFn: () => getPortofolioById(id),
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
    if (dataPortofolio) {
      setSelectedUser(dataPortofolio.selected_user ?? []);
      setPortofolioDate(dataPortofolio.start_date);
      setEndDate(dataPortofolio.end_date);
      setPortofolioName(dataPortofolio.program);
      setDescription(dataPortofolio.description);
      setSelectedProduct(dataPortofolio.selected_product ?? []);
    }
  }, [dataPortofolio]);
  const { mutateAsync, isLoading } = useMutation({
    mutationFn: UpdatePortofolio,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["table-portofolio"],
      });
      toast.success("Portofolio berhasil diperbaharui");
      handleOpen();
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
  const handleFileChange = (fileItems: FilePondFile[]) => {
    setFiles(fileItems);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idProduct = selectedProduct?.value;
    const idClient = selectedUser?.value;
    const dataSubmit: PortofolioDto = {
      id: id,
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

  if (isPortofolioLoading) {
    return <Loading />;
  }

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        dismiss={{ escapeKey: false, outsidePress: false }}
        className="h-[95%] overflow-y-scroll"
      >
        <DialogHeader className="font-poppins text-[#005697]">
          Edit Portofolio
        </DialogHeader>
        {isProductLoading ? (
          <Loading />
        ) : (
          <form onSubmit={handleSubmit}>
            <DialogBody className="p-10">
              <div className="text-lg text-[#005697] font-normal font-poppins">
                Judul Portofolio
              </div>
              <Input
                crossOrigin={""}
                type="text"
                variant="static"
                id="portofolio_name"
                name="portofolio_name"
                placeholder="Nama Portofolio"
                value={portofolioName}
                onChange={(e) => setPortofolioName(e.target.value)}
              />
              <div className="text-lg text-[#005697] font-normal font-poppins mt-4">
                Nama Client
              </div>
              <Select
                value={selectedUser}
                onChange={setSelectedUser}
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
                Tanggal Portofolio
              </div>
              <Input
                crossOrigin={""}
                type="date"
                variant="static"
                id="portofolio_date"
                name="Portofolio_date"
                placeholder="Nama Lengkap"
                disabled={isProductLoading}
                value={portofolioDate}
                onChange={(e) => setPortofolioDate(e.target.value)}
              />
              <div className="text-lg text-[#005697] font-normal font-poppins">
                Portofolio Selesai
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
              <div className="mt-2">
                <div className="text-lg text-[#005697] font-normal font-poppins">
                  Gambar Portofolio
                </div>
                {dataPortofolio?.path_files && (
                  <div className="flex gap-1">
                    <FaFileAlt size={20} className="text-[#005697]" />
                    <a
                      href={`${import.meta.env.VITE_API_BASE_URL}/${
                        dataPortofolio.path_files
                      }`}
                      target="_blank"
                      className="text-md font-poppins font-normal"
                    >
                      File
                    </a>
                  </div>
                )}
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
                <div className="text-lg text-[#005697] font-normal font-poppins">
                  Gallery Portofolio
                </div>
                {dataPortofolio?.gallery && (
                  <div className="flex flex-col gap-1">
                    {dataPortofolio.gallery.map((filePath, index) => (
                      <div className="flex gap-1" key={index}>
                        <FaFileAlt size={20} className="text-[#005697]" />
                        <a
                          href={`${
                            import.meta.env.VITE_API_BASE_URL
                          }/${filePath}`}
                          target="_blank"
                          className="text-md font-poppins font-normal"
                          rel="noopener noreferrer"
                        >
                          Photo {index + 1}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
                <FilePond
                  name="files"
                  dropOnPage
                  onupdatefiles={handleFileChange}
                  allowMultiple
                  maxFiles={3}
                />
              </div>
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleCancel}
                className="mr-1 font-poppins"
              >
                <span>Cancel</span>
              </Button>
              <Button
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
