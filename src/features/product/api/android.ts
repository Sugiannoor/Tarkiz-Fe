import { axios } from "@/lib/axios"

export const getAllAndroid = async () => {
    const response = await axios.get ("/api/product/android")
    return response.data.data
  }
  export const getFinanceAndroid = async () => {
    const response = await axios.get ("/api/product/android/finance")
    return response.data.data
  }
  export const getOperationAndroid = async () => {
    const response = await axios.get ("/api/product/android/op")
    return response.data.data
  }
  export const getSdmAndroid = async () => {
    const response = await axios.get ("/api/product/android/sdm")
    return response.data.data
  }
  export const getMarketingAndroid = async () => {
    const response = await axios.get ("/api/product/android/market")
    return response.data.data
  }