import { axios } from "@/lib/axios";

export const deleteUser = async (id: number) => {
    const response = await axios.delete("/api/users", {
      params: {
        id,
      },
    });
    return response.data;
  };