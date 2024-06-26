import { axios } from "@/lib/axios"


export const getAllMaintance = async () => {
  const response = await axios.get("/dashboard/product/maintance")
  return response.data.data
}
export const getFinanceMaintance = async () => {
  const response = await axios.get("/dashboard/product/maintance/finance")
  return response.data.data
}
export const getOperationMaintance = async () => {
  const response = await axios.get("/dashboard/product/maintance/op")
  return response.data.data
}
export const getSdmMaintance = async () => {
  const response = await axios.get("/dashboard/product/maintance/sdm")
  return response.data.data
}
export const getMarketingMaintance = async () => {
  const response = await axios.get("/dashboard/product/maintance/market")
  return response.data.data
} 