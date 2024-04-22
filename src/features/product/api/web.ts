import { axios } from "@/lib/axios"

export const getAllWeb = async () => {
  const response = await axios.get("/dashboard/product/web")
  return response.data.data
}
export const getFinanceWeb = async () => {
  const response = await axios.get("/dashboard/product/web/finance")
  return response.data.data
}
export const getOperationWeb = async () => {
  const response = await axios.get("/dashboard/product/web/op")
  return response.data.data
}
export const getSdmWeb = async () => {
  const response = await axios.get("/dashboard/product/web/sdm")
  return response.data.data
}
export const getMarketingWeb = async () => {
  const response = await axios.get("/dashboard/product/web/market")
  return response.data.data
}