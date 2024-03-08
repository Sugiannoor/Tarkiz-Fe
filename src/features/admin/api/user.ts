import { axios } from "@/lib/axios";
import { userForm } from "../types/crudUser";

export const deleteUser = async (id: number) => {
    const response = await axios.delete("/api/users", {
      params: {
        id,
      },
    });
    return response.data;
  };

  export const getUserById = async (id: number) => {
    const response = await axios.get ("/api/users", {
      params: {
        id,
      },
    });
    return response.data
  }

  export const UpdateUser = async (data: userForm) => {
    const response = await axios.put("/api/users", data);
    return response.data
  }