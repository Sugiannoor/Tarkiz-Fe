import { axios } from "@/lib/axios";

export const getChart = async () => {
    const response = await axios.get("/dashboard/chart");
    return response.data.data;
  };