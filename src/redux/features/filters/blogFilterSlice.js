import { createSlice } from "@reduxjs/toolkit";

const initialStates = {
  skip: 1,
  limit: 5,
  sortBy: "createdAt",
  order: -1,
  title: "",
  categoryName: "",
  status: "",
};

const blogFilterSlice = createSlice({
  name: "blogFilter",
  initialState: initialStates,
  reducers: {
    setBlogFilters: (state, actions) => {
      state = { ...actions, ...actions.payload };
    },
  },
});

export const { setBlogFilters } = blogFilterSlice.actions;
export default blogFilterSlice.reducer;
