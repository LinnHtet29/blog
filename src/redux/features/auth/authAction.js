// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { useUserMutate } from "../../../hooks/useUserQuery";
// import { createUser } from "../../../services/userServices";

// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async (data, { rejectWithValue }) => {
//     try {
//       return useUserMutate(createUser(data));
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const userLogin = createAsyncThunk(
//   "auth/login",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       // configure header's Content-Type as JSON
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         `${backendURL}/api/user/login`,
//         { email, password },
//         config
//       );
//       // store user's token in local storage
//       localStorage.setItem("userToken", data.userToken);
//       return data;
//     } catch (error) {
//       // return custom error message from API if any
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );