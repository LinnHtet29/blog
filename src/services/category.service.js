import { interceptor } from "./api";

export const getAllCategories = async (query = "") => {
  const response = await interceptor.get(`/category${query}`);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await interceptor.delete(`/auth/category/${id}`);
  return response.data;
};

export const checkDuplicateCategory = async (value) => {
  const response = await interceptor.post(
    "/auth/category/check_duplicate",
    value
  );
  return response;
};

export const addCategory = async (categoryData) => {
  console.log("CATEDAT", categoryData);
  const data = {
    data: {
      name: categoryData.name,
    },
  };
  return await interceptor.post("/auth/category/create", data);
};
