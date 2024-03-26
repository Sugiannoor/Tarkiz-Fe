import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Input,
} from "@material-tailwind/react";
import { FilePond } from "react-filepond";
import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createProduct, getTag, getType } from "../../api/product";
import toast from "react-hot-toast";
import { FilePondFile } from "filepond";
import { CreateProduct} from "../../types/crudProduct";
import Select from "react-select";

interface Option {
  value: number;
  label: string;
}

type props = {
  open: boolean;
  handleOpen: () => void;
};
export const CreateProductModal = ({ open, handleOpen }: props) => {
  const queryClient = useQueryClient();
  const [file, setFile] = useState<FilePondFile>();
  const [program, setProgram] = useState ("");;
  const [description, setDescription] = useState ("");
  const [selectedTag, setSelectedTag] = useState<Option[]>([]);
  const [selectedType, setSelectedType] = useState<Option>();
  const { data: tags, isLoading: tagLoading } = useQuery({
    queryKey: ["tag"],
    queryFn: getTag,
  });
  const { data: types, isLoading: typesLoading } = useQuery({
    queryKey: ["type"],
    queryFn: getType,
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createProduct, 
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["table-product"],
      });
      toast.success("Produk Sukses di Tambahkan");
      setFile(undefined);
      setProgram("");
      setDescription("");
      setSelectedTag([]);
      setSelectedType(undefined);
      handleOpen();
    },
    onError: ({ response }) => {
      if (response) {
        const errors: { [key: string]: string } = response.data.errors;
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const idTag = selectedTag?.map(tag => tag.value) ?? [];
    const idType = selectedType?.value
    const data: CreateProduct = {
      program: program,
      description: description,
      tag: idTag,
      type: idType,
      photo: file,
    };
    await mutateAsync (data);
  };
  const handleCancel = () => {
    setFile(undefined);
    setProgram("");
    setDescription("");
    setSelectedTag([]);
    setSelectedType(undefined);

    handleOpen();
  };

  return (
    <>
      <Dialog placeholder={""} size="lg" open={open} handler={handleOpen} dismiss={{escapeKey: false, outsidePress: false}}>
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Tambah Produk
        </DialogHeader>
        <form onSubmit={handleSubmit} className="overflow-y-scroll h-[40rem]">
          <DialogBody placeholder={""} className="p-10">
            <label
              htmlFor="product"
              className="text-lg text-[#005697] font-normal font-poppins"
            >
              Nama Produk
            </label>
            <Input
              crossOrigin={""}
              type="text"
              variant="static"
              id="product"
              name="product"
              placeholder="Nama Produk / Aplikasi"
              value={program}
              onChange={(e)=> setProgram(e.target.value)}
            />
            <div className="my-5">
              <div className="text-lg text-[#005697] font-normal font-poppins">
                Kategori{" "}
              </div>
              <Select
                defaultValue={selectedType}
                onChange={setSelectedType}
                options={types}
                isLoading={typesLoading}
              />
            </div>
            <div className="mb-5">
              <div className="text-lg text-[#005697] font-normal font-poppins">
                Tag Produk
              </div>
              <MultiSelect
                className="mt-2"
                options={tags ?? []}
                value={selectedTag}
                onChange={setSelectedTag}
                labelledBy="Select"
                isLoading={tagLoading}
              />
            </div>
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
            <div className="mt-2">
              <label
                htmlFor="file"
                className="text-lg text-[#005697] font-normal font-poppins"
              >
                Gambar Produk
              </label>
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
                acceptedFileTypes={[
                  "image/jpeg",
                  "image/png",
                ]}
                dropOnPage
                maxFiles={1}
                allowMultiple={false}
                dropValidation
              />
            </div>
          </DialogBody>
          <DialogFooter placeholder={""}>
            <Button
              placeholder={""}
              variant="text"
              color="red"
              onClick={handleCancel}
              className="mr-1  font-poppins"
            >
              <span>Cancel</span>
            </Button>
            <Button
              placeholder={""}
              className="font-poppins"
              variant="gradient"
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
