import React from "react";
import { Image } from "react-bootstrap";
import DefaultProfileImage from "../../../assets/images/default_image.png";
import { InlineIcon } from "@iconify/react";

export default function UserInfo() {
  return (
    <div className="d-flex gap-2 p-3 w-100 position-relative">
      <InlineIcon
        className="position-absolute top-0 end-0 mt-4 me-3"
        style={{ cursor: "pointer" }}
        icon={"mdi:triangle"}
        color="blue"
        width={15}
        height="15"
      />
      <div className="w-25">
        <Image src={DefaultProfileImage} alt="Profile Image" width={45} />
      </div>
      <div className="w-100">
        <h5>Aung Aung</h5>
        <h6 className="text-muted">Admin</h6>
    </div>
    </div>
  );
}
