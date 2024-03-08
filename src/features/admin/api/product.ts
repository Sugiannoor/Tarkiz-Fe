import { axios } from "@/lib/axios";
import { CreateProduct } from "../types/crudProduct";

export const createProduct = async (data: CreateProduct) => {
    const formData = new FormData();
    if (data.photo) {
        formData.append ("photo", data.photo.file)
    }
    const combinedData = {
        ...data,
        photo: formData,
    };
    const response = await axios.post("/api/products", combinedData);
    return response.data;
  };

  export const getTag = async () => {
    const response = await axios.get ("/api/showtag")
    return response.data.data
  }
  export const getType = async () => {
    const response = await axios.get ("/api/showtype")
    return response.data.data
  }
  export const deleteProduct = async (id: number) => {
    const response = await axios.delete("/api/products", {
      params: {
        id,
      },
    });
    return response.data;
  };