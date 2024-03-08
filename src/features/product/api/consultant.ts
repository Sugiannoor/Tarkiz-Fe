import { axios } from "@/lib/axios"

export const getAllConsultant = async () => {
    const response = await axios.get ("/api/product/consultant")
    return response.data
  }
  export const getFinanceConsultant = async () => {
    const response = await axios.get ("/api/product/consultant/finance")
    return response.data
  }
  export const getOperationConsultant = async () => {
    const response = await axios.get ("/api/product/consultant/op")
    return response.data
  }
  export const getSdmConsultant = async () => {
    const response = await axios.get ("/api/product/consultant/sdm")
    return response.data
  }
  export const getMarketingConsultant = async () => {
    const response = await axios.get ("/api/product/consultant/market")
    return response.data
  }