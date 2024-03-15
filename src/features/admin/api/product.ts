import { axios } from "@/lib/axios";
import { CreateProduct, UpdateProduct } from "../types/crudProduct";

export const createProduct = async (data: CreateProduct) => {
  const formData = new FormData();
  formData.append("program", data.program);
  formData.append("description", data.description);
  if (data.type) {
    formData.append("type", data.type.toString());
  }
  data.tag.forEach((tagId) => {
    formData.append("tag[]", tagId.toString());
  });

  if (data.photo) {
    formData.append("photo", data.photo.file);
  }

  // Melakukan permintaan POST dengan FormData
  const response = await axios.post("/api/products", formData);
  return response.data;
};

export const getTag = async () => {
  const response = await axios.get("/api/showtag");
  return response.data.data;
};
export const getType = async () => {
  const response = await axios.get("/api/showtype");
  return response.data.data;
};
export const deleteProduct = async (id: number) => {
  const response = await axios.delete("/api/products", {
    params: {
      id,
    },
  });
  return response.data;
};
export const getLabelProduct = async () => {
  const response = await axios.get("/api/showproduct");
  return response.data.data ;
};
export const UpdateProducts = async (data: UpdateProduct) => {
  const formData = new FormData();
  formData.append("id", data.id.toString())
  formData.append("program", data.program);
  formData.append("description", data.description);
  if (data.type) {
    formData.append("type", data.type.toString());
  }
  data.tag.forEach((tagId) => {
    formData.append("tag[]", tagId.toString());
  });

  if (data.photo) {
    formData.append("photo", data.photo.file);
  }
  const response  = await axios.post ("/api/products/update",formData);
  return response.data
};

export const getProductById = async (id: number) => {
  const response = await axios.get("/api/products", {
    params: {
      id,
    },
  });
  return response.data.data;
};


export const createTag = async (tag: string) => {
  const response = await axios.post ("/api/tag", tag)
  return response.data
}
export const createType = async (type: string) => {
  const response = await axios.post("/api/type",
  JSON.stringify({ type }),
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
  )
  return response.data
}
export const updateType = async (type: string) => {
  const response = await axios.post("/api/type", type)
  return response.data
}

export const deleteType = async (id: number) => {
  const response = await axios.delete("/api/type", {
    params: {
      id,
    },
  });
  return response.data.data;
}