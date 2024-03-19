import { useSelector, useDispatch } from "react-redux";
import { setChangeStatusModal } from "../../redux/features/system/modalStatusSlice";

export default function ConfirmationModal() {
  const dispatch = useDispatch();
  const modalStatus = useSelector(
    (state) => state.modalStatus.changeStatusModal
  );

  const toggleModal = () => {
    dispatch(setChangeStatusModal({ isOpen: !modalStatus.isOpen }));
  };

  const submit = (subFn) => {
    subFn();
    dispatch(setChangeStatusModal({ isOpen: false, options: [] }));
  };

  return (
    <>
      {modalStatus.isOpen && (
        <div onClick={toggleModal} className="back-drop gray">
          <div
            className="w-25 mx-auto bg-white shadow position-fixed top-50 start-50 translate-middle p-3 rounded-1"
            style={{ zIndex: 9999 }}
          >
            <div className="d-flex flex-column justify-content-evenly align-items-center">
              {modalStatus.options &&
                modalStatus.options.map((option) => (
                  <button
                    onClick={() => submit(option.subFn)}
                    className={option.style}
                  >
                    {option.label}
                  </button>
                ))}
              <button onClick={toggleModal} className="btn btn-secondary w-100">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
