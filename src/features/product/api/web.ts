import { axios } from "@/lib/axios"

export const getAllWeb = async () => {
    const response = await axios.get ("/api/product/web")
    return response.data
  }
  export const getFinanceWeb = async () => {
    const response = await axios.get ("/api/product/web/finance")
    return response.data
  }
  export const getOperationWeb = async () => {
    const response = await axios.get ("/api/product/web/op")
    return response.data
  }
  export const getSdmWeb = async () => {
    const response = await axios.get ("/api/product/web/sdm")
    return response.data
  }
  export const getMarketingWeb = async () => {
    const response = await axios.get ("/api/product/web/market")
    return response.data
  }