import { interceptor } from "./api";

export const getAllBlogs = async () => {
  const response = await interceptor.get("/blog");
  return response.data;
};
