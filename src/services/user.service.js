import { interceptor } from "./api";

export const getAllUsers = async () => {
  const response = await interceptor.get("/user");
  return response;
};

export const checkDuplicateUser = async (value) => {
  const response = await interceptor.post("/user/check_duplicate", value);
  return response;
};

export const createUser = async (userData) => {
  const data = {
    data: {
      ...userData,
    },
  };
  return await interceptor.post("/signup", data);
};

export const signIn = async (userData) => {
  const data = {
    data: {
      email: userData.email,
      password: userData.password,
    },
  };
  return await interceptor.post("/signin", data);
};
