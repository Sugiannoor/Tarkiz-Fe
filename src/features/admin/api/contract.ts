import { axios } from "@/lib/axios";
import { ContractForm, editContractForm } from "../types/crudContract";
import { ContractTableType } from "../types/contractTable";
import { GeneralResponse } from "@/types/general";

export const deleteContract = async (id: number) => {
  const response = await axios.delete("/api/admin/contracts", {
    params: {
      id,
    },
  });
  return response.data;
};
export const getContractById = async (id: number) => {
  const response = await axios.get("/dashboard/contracts/show", {
    params: {
      id,
    },
  });
  return response.data.data;
};
export const UpdateContract = async (data: editContractForm) => {
  const response = await axios.put("/api/admin/contracts/update", data);
  return response.data
}
export const CreateContract = async (data: ContractForm) => {
  const response = await axios.post("/api/admin/contracts", data);
  return response.data
}
export const getAllContract = async () => {
  const response = await axios.get("/api/admin/contracts");
  return response.data.data;
};

export const getContractByUser = async () => {
  const response = await axios.get<GeneralResponse<ContractTableType[]>>("/api/users/contracts/users");
  return response.data.data;
}