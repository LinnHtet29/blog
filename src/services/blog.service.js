import { interceptor } from "./api";

export const getAllBlogs = async (query = "") => {
  const response = await interceptor.get(`/blog${query}`);
  return response.data;
};

export const getAllBlogsDataCount = async () => {
  const response = await interceptor.get("/auth/blog/count");
  return response.data;
};
