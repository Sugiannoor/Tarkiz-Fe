import { axios } from "@/lib/axios";

export const deleteComplaint = async (id: number) => {
    const response = await axios.delete("/api/complaint", {
      params: {
        id,
      },
    });
    return response.data;
  };

  export const getComplaintById = async (id: number) => {
    const response = await axios.get("/api/complaint", {
      params: {
        id,
      },
    });
    return response.data;
  };
  type StatusComplaint = {
    status: string | null;
    urgensi: string | null
  }
  export const UpdateStatusComplaint = async (data: StatusComplaint  ) => {
    const response = await axios.put("/api/complaint", data);
    return response.data
  }