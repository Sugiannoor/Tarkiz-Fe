import { NavbarSimple } from ".";
import { Button, Input } from "@material-tailwind/react";
import { FilePondFile } from "filepond";
import { useState } from "react";
import { FilePond } from "react-filepond";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createComplaint } from "../api/createComplaint";

export const CreateComplaint = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const contractId = Number(id);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [files, setFiles] = useState<FilePondFile[]>([]);

  const handleFileChange = (fileItems: FilePondFile[]) => {
    setFiles(fileItems);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createComplaint,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["table-complaint"] });
      toast.success("Komplain dikirim");
      navigate(-1);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description } = formData;

    const dataSubmit = {
      contractId,
      name,
      description,
      files,
    };
    await mutateAsync(dataSubmit);
  };
  return (
    <main>
      <NavbarSimple>
        <div className="text-3xl font-semibold font-poppins my-16 text-[#005697]">
          {" "}
          Layanan Pengaduan{" "}
        </div>
        <div className="p-10 border-4 rounded-lg border-[#005697]">
          <form onSubmit={handleSubmit}>
            <div className="text-lg text-[#005697] font-normal font-poppins mb-2">
              Judul Keluhan
            </div>
            <Input
              crossOrigin={""}
              id="name"
              name="name"
              placeholder="Error"
              type="text"
              value={formData.name}
              className="mb-2"
              onChange={handleChange}
            />
            <div className="text-lg text-[#005697] font-normal font-poppins mt-4 mb-2">
              Deskripsi Keluhan
            </div>
            <Input
              crossOrigin={""}
              id="complaint"
              placeholder="Error Ketika Menghitung ..."
              type="text"
              name="description"
              value={formData.description}
              className="mb-2"
              onChange={handleChange}
            />
            <div className="max-w-80 mt-5 cursor-pointer">
              <FilePond
                name="files"
                dropOnPage
                onupdatefiles={handleFileChange}
                allowMultiple
                maxFiles={3}
              />
            </div>
            <div className="flex justify-end gap-5">
              <Link to={"/profile"}>
                <Button variant="text" className="font-raleway" color="red">
                  Kembali
                </Button>
              </Link>
              <Button
                variant="filled"
                className="font-raleway"
                color="indigo"
                loading={isLoading}
                type="submit"
              >
                Buat Pengaduan
              </Button>
            </div>
          </form>
        </div>
      </NavbarSimple>
    </main>
  );
};
