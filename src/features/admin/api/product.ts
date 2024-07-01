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
  if (data.gallery && data.gallery.length > 0) {
    data.gallery.forEach((documentation) => {
      formData.append(`gallery[]`, documentation.file);
    });
  }
  // Melakukan permintaan POST dengan FormData
  const response = await axios.post("/api/admin/products", formData);
  return response.data;
};

export const getTag = async () => {
  const response = await axios.get("/api/admin/showtag");
  return response.data.data;
};
export const getType = async () => {
  const response = await axios.get("/api/admin/showtype");
  return response.data.data;
};
export const deleteProduct = async (id: number) => {
  const response = await axios.delete("/api/admin/products", {
    params: {
      id,
    },
  });
  return response.data;
};
export const getLabelProduct = async () => {
  const response = await axios.get("/api/admin/showproduct");
  return response.data.data;
};
export const UpdateProducts = async (data: UpdateProduct) => {
  const formData = new FormData();
  formData.append("id", data.id.toString());
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
  if (data.gallery && data.gallery.length > 0) {
    data.gallery.forEach((documentation) => {
      formData.append(`gallery[]`, documentation.file);
    });
  }
  const response = await axios.post("/api/admin/products/update", formData);
  return response.data;
};

export const getProductById = async (id: number) => {
  const response = await axios.get("/dashboard/products", {
    params: {
      id,
    },
  });
  return response.data.data;
};

export const getAllProduct = async () => {
  const response = await axios.get("/dashboard/products/all");
  return response.data.data;
};

export const createTag = async (tag: string) => {
  const response = await axios.post("/api/admin/tag", JSON.stringify({ tag }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export const createType = async (type: string) => {
  const response = await axios.post(
    "/api/admin/type",
    JSON.stringify({ type }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
type TypeUpdate = {
  id: number;
  type: string;
};

export const updateType = async (data: TypeUpdate) => {
  const response = await axios.put(`/api/admin/type`, data);
  return response.data;
};

type TypeTags = {
  id: number;
  tag: string;
};
export const updateTag = async (data: TypeTags) => {
  const response = await axios.put(`/api/admin/tag`, data);
  return response.data;
};

export const deleteType = async (id: number) => {
  const response = await axios.delete("/api/admin/type", {
    params: {
      id,
    },
  });
  return response.data.data;
};
export const deleteTag = async (id: number) => {
  const response = await axios.delete("/api/admin/tag", {
    params: {
      id,
    },
  });
  return response.data.data;
};
