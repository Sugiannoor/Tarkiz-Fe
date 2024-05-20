import { axios } from "@/lib/axios";
import { PortofolioDto } from "../types/portofolioTable";

export const deletePortofolio = async (id: number) => {
  const response = await axios.delete("/api/admin/portofolio", {
    params: {
      id,
    },
  });
  return response.data;
};

export const CreatePortofolio = async (data: PortofolioDto) => {
  const formData = new FormData();
  formData.append("program", data.program);
  formData.append("description", data.description);
  if (data.product_id)
    formData.append("product_id", data.product_id.toString());
  if (data.user_id) formData.append("user_id", data.user_id.toString());

  formData.append("start_date", data.start_date);
  formData.append("end_date", data.end_date);
  if (data.photo) {
    formData.append("photo", data.photo.file);
  }
  if (data.gallery && data.gallery.length > 0) {
    data.gallery.forEach((documentation) => {
      formData.append(`gallery[]`, documentation.file);
    });
  }
  const response = await axios.post("/api/admin/portofolio", formData);
  return response.data;
};
export const UpdatePortofolio = async (data: PortofolioDto) => {
  const formData = new FormData();
  if (data.id) formData.append("id", data.id.toString());
  formData.append("program", data.program);
  formData.append("description", data.description);
  if (data.product_id)
    formData.append("product_id", data.product_id.toString());
  if (data.user_id) formData.append("user_id", data.user_id.toString());

  formData.append("start_date", data.start_date);
  formData.append("end_date", data.end_date);
  if (data.photo) {
    formData.append("photo", data.photo.file);
  }
  if (data.gallery && data.gallery.length > 0) {
    data.gallery.forEach((documentation) => {
      formData.append(`gallery[]`, documentation.file);
    });
  }
  const response = await axios.post("/api/admin/portofolio/update", formData);
  return response.data;
};

export const getPortofolioById = async (id: number) => {
  const response = await axios.get("/dashboard/portofolio/show", {
    params: {
      id,
    },
  });
  return response.data.data;
};
export const getPortofolioByIdProduct = async (id: number) => {
  const response = await axios.get("/dashboard/portofolio/showproduct", {
    params: {
      id,
    },
  });
  return response.data.data;
};

export const getAllPortofolio = async () => {
  const response = await axios.get("/dashboard/portofolio/all");
  return response.data.data;
};