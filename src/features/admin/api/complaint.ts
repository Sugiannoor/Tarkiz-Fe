import { axios } from "@/lib/axios";

export const deleteComplaint = async (id: number) => {
    const response = await axios.delete("/api/complaint", {
      params: {
        id,
      },
    });
    return response.data;
  };