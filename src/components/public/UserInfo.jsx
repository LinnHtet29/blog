import React from "react";
import defaultProfileImage from "../../assets/images/default_image.png";
import { useSelector } from "react-redux";

export default function UserInfo() {
  const userInfo = useSelector((state) => state.auth.userInfo);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="w-100 mx-5 bg-white rounded-2 p-5 border border-secondary border-opacity-25">
        <div className="w-75 mx-auto">
          <img
            className="rounded-circle border border-2"
            width="80px"
            height="80px"
            src={defaultProfileImage}
            alt="User Info"
          />
          <div className="mt-5 d-flex justify-content-between">
            <h6 className="logo">Username: {userInfo.username}</h6>
            <h6 className="logo">Email: {userInfo.email}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
