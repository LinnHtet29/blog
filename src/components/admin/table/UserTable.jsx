import React from "react";
import { formatDateString } from "../../../utils/Formatter/DateFormatter";
import { Image } from "react-bootstrap";
import DefaultProfileImage from "../../../assets/images/default_image.png";
import { useDispatch } from "react-redux";
import { setChangeStatusModal } from "../../../redux/features/system/modalStatusSlice";
import {
  startLoading,
  stopLoading,
} from "../../../redux/features/system/loadingSlice";
import { InlineIcon } from "@iconify/react";
import { changeUsertatus } from "../../../services/user.service";
import { useUserMutate } from "../../../hooks/useUserQuery";
import { useLocation } from "react-router-dom";
import {
  getActiveSortOrder,
  getSortByClassName,
} from "../../../utils/cusFunction";

export default function UserTable({
  data,
  refetch,
  sortBy,
  order,
  handleSortBy,
}) {
  const location = useLocation();
  const { mutate } = useUserMutate(changeUsertatus);
  const dispatch = useDispatch();
  const showModal = (userId) => {
    dispatch(
      setChangeStatusModal({
        isOpen: true,
        options: [
          location.pathname === "/auth/block_user"
            ? {
                label: "Active",
                style: "btn btn-success w-100 mb-2",
                subFn: () => {
                  dispatch(startLoading());
                  mutate({
                    id: userId,
                    status: "ACTIVE",
                  });
                  setTimeout(() => {
                    refetch();
                    dispatch(stopLoading());
                  }, 800);
                },
              }
            : {
                label: "Suspended",
                style: "btn btn-danger w-100 mb-2",
                subFn: () => {
                  dispatch(startLoading());
                  mutate({
                    id: userId,
                    status: "SUSPENDED",
                  });
                  setTimeout(() => {
                    refetch();
                    dispatch(stopLoading());
                  }, 800);
                },
              },
        ],
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
            <th
              onClick={() => handleSortBy("username")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-inline-flex align-items-center">
                <div className={getSortByClassName("username", sortBy)}>
                  <InlineIcon
                    icon={"mdi:menu-up"}
                    color={getActiveSortOrder("up", order)}
                    height={25}
                  />
                  <InlineIcon
                    className="position-absolute top-50 start-0"
                    icon={"mdi:menu-down"}
                    color={getActiveSortOrder("down", order)}
                    height={25}
                  />
                </div>
                <span className="text-nowrap">Username</span>
              </div>
            </th>
            <th
              onClick={() => handleSortBy("email")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-inline-flex align-items-center">
                <div className={getSortByClassName("email", sortBy)}>
                  <InlineIcon
                    icon={"mdi:menu-up"}
                    color={getActiveSortOrder("up", order)}
                    height={25}
                  />
                  <InlineIcon
                    className="position-absolute top-50 start-0"
                    icon={"mdi:menu-down"}
                    color={getActiveSortOrder("down", order)}
                    height={25}
                  />
                </div>
                <span>Email</span>
              </div>
            </th>
            <th
              onClick={() => handleSortBy("phoneNumber")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-inline-flex align-items-center">
                <div className={getSortByClassName("phoneNumber", sortBy)}>
                  <InlineIcon
                    icon={"mdi:menu-up"}
                    color={getActiveSortOrder("up", order)}
                    height={25}
                  />
                  <InlineIcon
                    className="position-absolute top-50 start-0"
                    icon={"mdi:menu-down"}
                    color={getActiveSortOrder("down", order)}
                    height={25}
                  />
                </div>
                <span>Phone No.</span>
              </div>
            </th>
            <th
              onClick={() => handleSortBy("creator")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-inline-flex align-items-center">
                <div className={getSortByClassName("creator", sortBy)}>
                  <InlineIcon
                    icon={"mdi:menu-up"}
                    color={getActiveSortOrder("up", order)}
                    height={25}
                  />
                  <InlineIcon
                    className="position-absolute top-50 start-0"
                    icon={"mdi:menu-down"}
                    color={getActiveSortOrder("down", order)}
                    height={25}
                  />
                </div>
                <span>Creator</span>
              </div>
            </th>
            <th
              onClick={() => handleSortBy("createdAt")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-inline-flex align-items-center">
                <div className={getSortByClassName("createdAt", sortBy)}>
                  <InlineIcon
                    icon={"mdi:menu-up"}
                    color={getActiveSortOrder("up", order)}
                    height={25}
                  />
                  <InlineIcon
                    className="position-absolute top-50 start-0"
                    icon={"mdi:menu-down"}
                    color={getActiveSortOrder("down", order)}
                    height={25}
                  />
                </div>
                <span>Date In</span>
              </div>
            </th>
            <th
              onClick={() => handleSortBy("updator")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-inline-flex align-items-center">
                <div className={getSortByClassName("updator", sortBy)}>
                  <InlineIcon
                    icon={"mdi:menu-up"}
                    color={getActiveSortOrder("up", order)}
                    height={25}
                  />
                  <InlineIcon
                    className="position-absolute top-50 start-0"
                    icon={"mdi:menu-down"}
                    color={getActiveSortOrder("down", order)}
                    height={25}
                  />
                </div>
                <span>Updater</span>
              </div>
            </th>
            <th
              onClick={() => handleSortBy("updatedAt")}
              style={{ cursor: "pointer" }}
            >
              <div className="d-inline-flex align-items-center">
                <div className={getSortByClassName("updatedAt", sortBy)}>
                  <InlineIcon
                    icon={"mdi:menu-up"}
                    color={getActiveSortOrder("up", order)}
                    height={25}
                  />
                  <InlineIcon
                    className="position-absolute top-50 start-0"
                    icon={"mdi:menu-down"}
                    color={getActiveSortOrder("down", order)}
                    height={25}
                  />
                </div>
                <span className="text-nowrap">Updated In</span>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.content.map((user) => (
            <tr key={user._id}>
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
                <span>{user.username}</span>
              </td>
              <td style={{ maxWidth: "200px" }}>{user.email}</td>
              <td className="text-center">{user.phoneNumber || "-"}</td>
              <td>{user.creator ? user.creator.username : "bySelf"}</td>
              <td>{formatDateString(user.createdAt)}</td>
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
                  {user.updater
                    ? user.updater.username
                    : user.creator
                    ? user.creator.username
                    : "bySelf"}
                </span>
              </td>
              <td>{formatDateString(user.updatedAt)}</td>
              <td
                onClick={() => showModal(user._id)}
                style={{ cursor: "pointer" }}
              >
                <InlineIcon
                  icon={"mdi:square-edit-outline"}
                  color="black"
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
