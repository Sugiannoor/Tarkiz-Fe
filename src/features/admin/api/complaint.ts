import { axios } from "@/lib/axios";

export const deleteComplaint = async (id: number) => {
  const response = await axios.delete("/api/admin/complaints", {
    params: {
      id,
    },
  });
  return response.data;
};

export const getComplaintById = async (id: number) => {
  const response = await axios.get("/dashboard/complaints", {
    params: {
      id,
    },
  });
  return response.data.data;
};
export const getAllComplaint = async () => {
  const response = await axios.get("/api/admin/complaints/all");
  return response.data.data;
};
type StatusComplaint = {
  id: number;
  name: string;
  description: string;
  status: string | undefined
  urgensi: string | undefined
}
export const UpdateStatusComplaint = async (data: StatusComplaint) => {
  const formData = new FormData();
  formData.append("id", data.id.toString());
  formData.append("name", data.name);
  formData.append("description", data.description);
  if (data.urgensi) formData.append("urgensi", data.urgensi);
  if (data.status) formData.append("status", data.status)
  const response = await axios.post("/dashboard/complaints/update", formData);
  return response.data
}

export const getComplaintByUser = async () => {
  const response = await axios.get("/dashboard/complaints/user");
  return response.data.data;
};