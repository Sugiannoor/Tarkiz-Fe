import { axios } from "@/lib/axios";
import { FilePondFile } from "filepond";

 type ComplaintForm = {
    id: number
    name: string;
    description: string;
    files: FilePondFile[]
}
export const createComplaint  = async (data: ComplaintForm ) => {
    const formData = new FormData ();
    formData.append ("name", data.name),
    formData.append  ("id_contract", data.id.toString())
    formData.append ("description", data.description)
    if (data.files && data.files.length > 0) {
        data.files.forEach((documentation) => {
          formData.append(`photo`, documentation.file);
        });
    }
    const response = await axios.post("/api/complaints", formData);
    return response.data;
  };