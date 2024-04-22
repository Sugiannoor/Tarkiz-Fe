import { axios } from "@/lib/axios"

export const getAllConsultant = async () => {
  const response = await axios.get("/dashboard/product/consultant")
  return response.data.data
}
export const getFinanceConsultant = async () => {
  const response = await axios.get("/dashboard/product/consultant/finance")
  return response.data.data
}
export const getOperationConsultant = async () => {
  const response = await axios.get("/dashboard/product/consultant/op")
  return response.data.data
}
export const getSdmConsultant = async () => {
  const response = await axios.get("/dashboard/product/consultant/sdm")
  return response.data.data
}
export const getMarketingConsultant = async () => {
  const response = await axios.get("/dashboard/product/consultant/market")
  return response.data.data
}