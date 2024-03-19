import React from "react";
import { formatDateString } from "../../../utils/Formatter/DateFormatter";
import { Image } from "react-bootstrap";
import DefaultProfileImage from "../../../assets/images/default_image.png";
import { InlineIcon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { setConfirmationModal } from "../../../redux/features/system/modalStatusSlice";
import { deleteCategory } from "../../../services/category.service";
import { useCategoryMutation } from "../../../hooks/useCategoryQuery";
import {
  startLoading,
  stopLoading,
} from "../../../redux/features/system/loadingSlice";

export default function CategoryTable({ data, refetch }) {
  const dispatch = useDispatch();
  const { mutate } = useCategoryMutation(deleteCategory);
  const showModal = (categoryId) => {
    dispatch(
      setConfirmationModal({
        isOpen: true,
        message: "You want to delete",
        subFn: async () => {
          dispatch(startLoading());
          mutate(categoryId);
          setTimeout(() => {
            refetch();
            dispatch(stopLoading());
          }, 800);
        },
      })
    );
  };

  return (
    <div
      className="w-100 bg-white border border-1 border-end border-secondary border-opacity-25 rounded-2 overflow-y-auto overflow-x-hidden"
      style={{ maxHeight: "68vh" }}
    >
      <table className="data-table table table-borderless">
        <thead className="data-table-header ">
          <tr>
            <th>Category Name</th>
            <th>Creator</th>
            <th>Date In</th>
            <th>Updater</th>
            <th className="text-nowrap">Updated In</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.content.map((cate) => (
            <tr key={cate._id}>
              <td>{cate.name}</td>
              <td className="d-flex justify-content-start align-items-center gap-2">
                <div>
                  <Image
                    className="rounded-2"
                    src={DefaultProfileImage}
                    width={30}
                    height={30}
                    alt="User Profile"
                  />
                </div>
                <span>{cate.creator.username}</span>
              </td>
              <td>{formatDateString(cate.createdAt)}</td>
              <td className="d-flex justify-content-start align-items-center gap-2">
                <div>
                  <Image
                    className="rounded-2"
                    src={DefaultProfileImage}
                    width={30}
                    height={30}
                    alt="User Profile"
                  />
                </div>
                <span>
                  {cate.updater ? cate.updater.username : cate.creator.username}
                </span>
              </td>
              <td>{formatDateString(cate.updatedAt)}</td>
              <td
                onClick={() => showModal(cate._id)}
                style={{ cursor: "pointer" }}
              >
                <InlineIcon
                  icon={"mdi:trash-can"}
                  color="#B9030A"
                  width={25}
                  height={25}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
