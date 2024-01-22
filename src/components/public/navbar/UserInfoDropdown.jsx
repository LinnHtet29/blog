import React, { useState } from "react";
import { Image } from "react-bootstrap";
import defaultProfileImage from "../../../assets/images/default_image.png";
import { Link } from "react-router-dom";
import { InlineIcon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { clearAuth } from "../../../redux/features/auth/authSlice";

export default function UserInfoDropdown() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    dispatch(clearAuth());
    setIsOpen(false);
  };

  return (
    <div className="position-relative">
      <Image
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer" }}
        className="rounded-circle ms-5 mt-2"
        src={defaultProfileImage}
        width={"30px"}
        alt="Profile image"
      />
      {isOpen && (
        <div className="index-dropdown bg-white py-2 position-absolute shadow rounded-2">
          <Link
            onClick={() => setIsOpen(false)}
            className="w-100 profile-dropdown-link ps-3 pe-5 d-block text-dark my-1 d-inline-flex justify-content-center align-items-center gap-2"
          >
            <InlineIcon icon="mdi-light:account" width="16" height={"16"} />
            Profile
          </Link>
          <Link
            onClick={logout}
            className="w-100 profile-dropdown-link ps-3 pe-5 d-block text-dark my-1 d-inline-flex justify-content-center align-items-center gap-2"
          >
            <InlineIcon icon="mdi-light:logout" width="16" height={"16"} />
            Logout
          </Link>
        </div>
      )}
      {isOpen && (
        <div onClick={() => setIsOpen(!isOpen)} className="back-drop" />
      )}
    </div>
  );
}
