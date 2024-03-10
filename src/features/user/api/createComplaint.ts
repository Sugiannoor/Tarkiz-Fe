import { axios } from "@/lib/axios";
import { FilePondFile } from "filepond";

 type ComplaintForm = {
    title: string;
    description: string;
    files: FilePondFile[]
}
export const createComplaint  = async (data: ComplaintForm ) => {
    const formData = new FormData ();
    formData.append ("title", data.title),
    formData.append ("description", data.description)
    if (data.files && data.files.length > 0) {
        data.files.forEach((documentation, index) => {
          formData.append(`documentations[${index}]`, documentation.file);
        });
    }
    const response = await axios.post("/api/complaint", formData);
    return response.data;
  };