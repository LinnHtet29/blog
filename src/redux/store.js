import { configureStore } from "@reduxjs/toolkit";
import formsMode from "./features/system/formsModeSlice";
import modalStatus from "./features/system/modalStatusSlice";
import blogFilter from "./features/filters/blogFilterSlice";
import auth from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth,
    formsMode,
    modalStatus,
    blogFilter,
  },
});
