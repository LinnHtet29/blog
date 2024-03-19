import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFormModal } from "../../redux/features/system/modalStatusSlice";

export default function FormModal({ Form, refetch }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modalStatus.formModal.isOpen);
  console.log("ISOpen", isOpen);

  const toggleModal = () => {
    dispatch(setFormModal(!isOpen));
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div onClick={toggleModal} className="back-drop gray">
          <div
            onClick={handleModalClick}
            className="w-50 mx-auto bg-white shadow position-fixed top-50 start-50 translate-middle p-3 rounded-1"
            style={{ zIndex: 111111 }}
          >
            <Form refetch={refetch} />
          </div>
        </div>
      )}
    </>
  );
}
