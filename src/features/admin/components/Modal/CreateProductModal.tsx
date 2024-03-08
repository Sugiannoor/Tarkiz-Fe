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
  const [selectedType, setSelectedType] = useState(null);
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
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const idTag = subTypes.map(subType => subType.value);
    const idTag = selectedTag.map (tag => tag.value)
    const idType = selectedType.value
    const data: CreateProduct = {
      program: program,
      description: description,
      tag: idTag,
      type: idType,
      photo: file,
    };
    await mutateAsync (data, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["product-table"],
        });
        toast.success("Produk Sukses di Tambahkan");
        handleOpen();
      },
      onError: () => {
        toast.error("Gagal Menambahkan Product");
        handleOpen();
      },
    });
  };

  return (
    <>
      <Dialog placeholder={""} size="lg" open={open} handler={handleOpen}>
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Tambah Produk
        </DialogHeader>
        <form onSubmit={handleSubmit} className="overflow-y-scroll h-[40rem]">
          <DialogBody placeholder={""} className="p-10">
            <label
              htmlFor="product"
              className="text-lg text-[#005697] font-normal font-poppins"
            >
              Program
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
                isDisabled={typesLoading}
              />
            </div>
            <div className="mb-5">
              <div className="text-lg text-[#005697] font-normal font-poppins">
                Tag Produk
              </div>
              <MultiSelect
                className="mt-2"
                options={tags}
                value={selectedTag}
                onChange={setSelectedTag}
                labelledBy="Select"
                disabled={tagLoading}
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
              onClick={handleOpen}
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
              disabled={isLoading}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};
