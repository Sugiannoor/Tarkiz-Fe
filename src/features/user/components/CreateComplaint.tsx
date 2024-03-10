import { NavbarSimple } from ".";
import { handleError } from "@/utils/helper";
import { Button, Input } from "@material-tailwind/react";
import { FilePondFile } from "filepond";
import { useState } from "react";
import { FilePond } from "react-filepond";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { createComplaint } from "../api/createComplaint";

const CreateComplaint = () => {
  const [formData, setFormData] = useState ({
    title: "",
    description: ""
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
  }

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: createComplaint,
    onSuccess() {
      toast.success("User ditambahkan");
    },
    onError: (err: Error) => {
      const errorTypes = [
        "description",
        "title",
        "files[0]",
        "files[1]",
        "files[2]",
      ];
      handleError(err, errorTypes);
      return;
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = formData;

    const dataSubmit = {
     title,
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
              id="title"
              name="title"
              placeholder="Error"
              type="text"
              value={formData.title}
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
              <FilePond name="files" dropOnPage onupdatefiles={handleFileChange} allowMultiple maxFiles={3}/>
            </div>
            <div className="flex justify-end gap-5">
              <Link to={"/profile"}>
                <Button
                  placeholder={""}
                  variant="text"
                  className="font-raleway"
                  color="red"
                  
                >
                  Kembali
                </Button>
              </Link>
              <Button
                placeholder={""}
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

export default CreateComplaint;
