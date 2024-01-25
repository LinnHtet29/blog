import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  confirmationModal: {
    isOpen: false,
    message: "",
    subFn: null,
  },
};

const modalStatusSlice = createSlice({
  name: "modalStatus",
  initialState,
  reducers: {
    setConfirmationModal: (state, actions) => {
      state.confirmationModal = {
        ...state.confirmationModal,
        ...actions.payload,
      };
    },
  },
});

export const { setConfirmationModal } = modalStatusSlice.actions;
export default modalStatusSlice.reducer;
