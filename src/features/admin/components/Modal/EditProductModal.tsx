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
import { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { FilePondFile } from "filepond";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { UpdateProduct } from "../../types/crudProduct";
import toast from "react-hot-toast";
import { UpdateProducts, getProductById, getTag, getType } from "../../api/product";
import Select from 'react-select';

interface Option {
  value: number;
  label: string;
}

type props = {
  open: boolean;
  handleOpen: () => void;
  id: number;
};

type ResponseProduct =  {
  id: number;
  program: string;
  description: string;
  status :number;
  type: string
  tags: string[]
  path_files: string
  selected_tags: Option[]
  selected_type: Option

}
export const EditProductModal = ({ open, handleOpen, id }: props) => {
  const queryClient = useQueryClient();
  const [file, setFile] = useState<FilePondFile>();
  const [program, setProgram] = useState ("");
  const [description, setDescription] = useState ("");
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  const [selectedType, setSelectedType] = useState<Option>();
  const [filePath, setFilePath] =useState ("")
 
  const {data: dataProduct, isLoading: isProductLoading} = useQuery<ResponseProduct> ({
      queryKey: ["product", id],
      queryFn: ()=> getProductById(id)
    }
  )

  useEffect (()=> {
    if (dataProduct) {
      setProgram(dataProduct.program);
      setDescription(dataProduct.description);
      setSelectedTags (dataProduct.selected_tags ?? [])
      setSelectedType (dataProduct.selected_type ?? [])
      setFilePath (dataProduct.path_files)
    }
  },[dataProduct])
  
  const { data: tags, isLoading: tagLoading } = useQuery({
    queryKey: ["tag"],
    queryFn: getTag,
  });
  const { data: types, isLoading: typesLoading } = useQuery({
    queryKey: ["type"],
    queryFn: getType,
  });

  const handleCancel = () => {
    handleOpen ()
    setProgram ("")
      setDescription("")
      setSelectedTags ([])
      setSelectedTags([])
      setFilePath ("")
  }

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: UpdateProducts, 
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product-table"],
      });
      toast.success("Produk Sukses di update");
      handleCancel ();
    },
    onError: ({ response }) => {
      if (response) {
        const errors: { [key: string]: string } = response.data.massages;
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

    const idTag = selectedTags?.map(tag => tag.value) ?? [];
    const idType = selectedType?.value
    const data: UpdateProduct = {
      id: id,
      program: program,
      description: description,
      tag: idTag,
      type: idType,
      photo: file,
    };
    await mutateAsync (data);
  };

  return (
    <>
      <Dialog placeholder={""} size="lg" open={open} handler={handleOpen} dismiss={{escapeKey: false, outsidePress: false}}>
        <DialogHeader className="font-poppins text-[#005697]" placeholder={""}>
          Edit Produk
        </DialogHeader>
        <form onSubmit={handleSubmit} className="overflow-y-scroll h-[40rem]">
          <DialogBody placeholder={""} className="p-10">
            <div
              className="text-lg text-[#005697] font-normal font-poppins"
            >
              Program
            </div>
            <Input
              crossOrigin={""}
              type="text"
              variant="static"
              disabled={isProductLoading}
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
                value={selectedType}
                onChange={setSelectedType}
                options={types ?? []}
                isLoading ={typesLoading}
              />
            </div>
            <div className="mb-5">
              <div className="text-lg text-[#005697] font-normal font-poppins">
                Tag Produk
              </div>
              <MultiSelect
                className="mt-2"
                options={tags ?? []}
                value={selectedTags}
                onChange={setSelectedTags}
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
              disabled={isProductLoading}
            />
            <div className="mt-2">
              <div
                className="text-lg text-[#005697] font-normal font-poppins"
              >
                Gambar Produk
              </div>
              <div className="flex gap-1">
                <FaFileAlt size={20} className="text-[#005697]" />
                <a href={`${import.meta.env.VITE_API_BASE_URL}/${filePath}`} target="_blank" className="text-md font-poppins font-normal">File</a>
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
