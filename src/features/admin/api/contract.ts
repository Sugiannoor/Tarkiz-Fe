import { axios } from "@/lib/axios";
import { ContractForm, editContractForm } from "../types/crudContract";

export const deleteContract = async (id: number) => {
    const response = await axios.delete("/api/contracts", {
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
    const response = await axios.put("/api/contracts/update", data);
    return response.data
  }
  export const CreateContract = async (data: ContractForm ) => {
    const response = await axios.post("/api/contracts", data);
    return response.data
  }