import { axios } from "@/lib/axios"

export const getAllAndroid = async () => {
    const response = await axios.get ("/dashboard/product/android")
    return response.data.data
  }
  export const getFinanceAndroid = async () => {
    const response = await axios.get ("/dashboard/product/android/finance")
    return response.data.data
  }
  export const getOperationAndroid = async () => {
    const response = await axios.get ("/dashboard/product/android/op")
    return response.data.data
  }
  export const getSdmAndroid = async () => {
    const response = await axios.get ("/dashboard/product/android/sdm")
    return response.data.data
  }
  export const getMarketingAndroid = async () => {
    const response = await axios.get ("/dashboard/product/android/market")
    return response.data.data
  }