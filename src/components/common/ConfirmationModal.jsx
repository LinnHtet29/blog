import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setConfirmationModal } from "../../redux/features/system/modalStatusSlice";

export default function ConfirmationModal() {
  const dispatch = useDispatch();
  const modalStatus = useSelector(
    (state) => state.modalStatus.confirmationModal
  );

  const toggleModal = () => {
    dispatch(setConfirmationModal({ isOpen: !modalStatus.isOpen }));
  };

  const submit = () => {
    modalStatus.subFn();
    dispatch(setConfirmationModal({ isOpen: false }));
  };

  return (
    <>
      {modalStatus.isOpen && (
        <div onClick={toggleModal} className="back-drop">
          <div
            className="w-25 mx-auto bg-white shadow position-fixed top-50 start-50 translate-middle p-3 rounded-1"
            style={{ zIndex: 9999 }}
          >
            <h5 className="text-center mb-3">Are you sure?</h5>
            <h6 className="text-center mb-3">{modalStatus.message}</h6>
            <div className="d-flex justify-content-evenly align-items-center">
              <button onClick={submit} className="btn btn-primary">
                Confirm
              </button>
              <button onClick={toggleModal} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
