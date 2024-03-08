import { axios } from "@/lib/axios";
import { editContractForm } from "../types/crudContract";

export const deleteContract = async (id: number) => {
    const response = await axios.delete("/api/contract", {
      params: {
        id,
      },
    });
    return response.data;
  };
  export const getContractById = async (id: number) => {
    const response = await axios.get("/api/contract", {
      params: {
        id,
      },
    });
    return response.data;
  };
  export const UpdateContract = async (data: editContractForm ) => {
    const response = await axios.put("/api/contract", data);
    return response.data
  }