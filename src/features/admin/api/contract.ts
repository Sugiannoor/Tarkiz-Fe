import { axios } from "@/lib/axios";

export const deleteContract = async (id: number) => {
    const response = await axios.delete("/api/contract", {
      params: {
        id,
      },
    });
    return response.data;
  };