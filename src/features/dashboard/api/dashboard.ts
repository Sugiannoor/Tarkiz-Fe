import { axios } from "@/lib/axios";

export const getChart = async () => {
    const response = await axios.get("/dashboard/chart");
    return response.data.data;
  };
export const getDashboard = async () => {
    const response = await axios.get("/dashboard/total");
    return response.data.data;
  };