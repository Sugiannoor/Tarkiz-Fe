import { axios } from "@/lib/axios"

export const getAllPorto = async () => {
    const response = await axios.get("/dashboard/portofolio/all")
    return response.data.data
  }
  export const getPortoWeb = async () => {
    const response = await axios.get("/dashboard/portofolio/web")
    return response.data.data
  }
  export const getPortoAndroid = async () => {
    const response = await axios.get("/dashboard/portofolio/android")
    return response.data.data
  }
  export const getPortoIt = async () => {
    const response = await axios.get("/dashboard/portofolio/it")
    return response.data.data
  }
  export const getPortoMaintance = async () => {
    const response = await axios.get("/dashboard/portofolio/maintance")
    return response.data.data
  }