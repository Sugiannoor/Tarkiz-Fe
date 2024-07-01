import { axios } from "@/lib/axios";
import { userForm } from "../types/crudUser";

export const deleteUser = async (id: number) => {
  const response = await axios.delete("/api/admin/users/delete", {
    params: {
      id,
    },
  });
  return response.data;
};

export const getUserById = async (id: number) => {
  const response = await axios.get("/api/admin/users", {
    params: {
      id,
    },
  });
  return response.data.data;
};
export const getAllUser = async () => {
  const response = await axios.get("/api/admin/users/all");
  return response.data.data;
};

export const UpdateUser = async (data: userForm) => {
  const formData = new FormData();
  if (data.id) formData.append("id", data.id.toString());
  formData.append("full_name", data.full_name as string);
  formData.append("email", data.email as string);
  formData.append("number_phone", data.number_phone as string);
  formData.append("username", data.username as string);
  formData.append("address", data.address as string);
  if (data.image_path) {
    formData.append("image_path", data.image_path as File);
  }

  const response = await axios.post("/api/users/profile/update", formData);
  return response.data;
};
export const UpdateUserByAdmin = async (data: userForm) => {
  const formData = new FormData();
  if (data.id) formData.append("id", data.id.toString());
  formData.append("full_name", data.full_name as string);
  formData.append("email", data.email as string);
  formData.append("number_phone", data.number_phone as string);
  formData.append("username", data.username as string);
  formData.append("address", data.address as string);
  if (data.image_path) {
    formData.append("image_path", data.image_path as File);
  }

  const response = await axios.post("/api/admin/profile/update", formData);
  return response.data;
};

export const getLabelUser = async () => {
  const response = await axios.get("/api/admin/showuser");
  return response.data.data;
};

export const getLabelRole = async () => {
  const response = await axios.get("/api/admin/showrole");
  return response.data.data;
};
