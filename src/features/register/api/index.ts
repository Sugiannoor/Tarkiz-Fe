import { axios } from "@/lib/axios";
import { RegistrasiType } from "../types";

export const createUser = async (data: RegistrasiType) => {
  const response = await axios.post("/dashboard/users/register", data);
  return response.data;
};
export const createUserByAdmin = async (data: RegistrasiType) => {
  const response = await axios.post("/api/admin/users/create", data);
  return response.data;
};