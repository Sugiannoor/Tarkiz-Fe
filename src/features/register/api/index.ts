import { axios } from "@/lib/axios";
import { RegistrasiType } from "../types";

export const createUser  = async (data: RegistrasiType) => {
    const response = await axios.post("/dashboard/users/register", data);
    return response.data;
  };