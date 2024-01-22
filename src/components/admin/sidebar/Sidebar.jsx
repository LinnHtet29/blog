import { InlineIcon } from "@iconify/react";
import React from "react";
import UserInfo from "./UserInfo";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const activeNavStyles = "d-block p-2 bg-primary rounded-2";

  const normalNavStyles = "d-block p-2 fw-normal text-secondary";

  return (
    <div
      style={sidebarStyles}
      className="bg-white position-relative border-1 border-secondary border-opacity-25 border-end"
    >
      <h4 className="p-3 fw-bold text-primary">NORDIC ROSE</h4>
      <ul className="list-unstyled fw-bold text-white mt-4 px-3">
        <li className="mb-2">
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              isActive ? activeNavStyles : normalNavStyles
            }
          >
            <InlineIcon
              className="mx-4"
              icon={"mdi:view-dashboard"}
              width={19}
              height="19"
            />
            Dashboard
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeNavStyles : normalNavStyles
            }
            to="/auth/blog"
          >
            <InlineIcon
              className="mx-4"
              icon={"mdi:card-text"}
              width={19}
              height="19"
            />
            Blogs List
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeNavStyles : normalNavStyles
            }
            to="/auth/user"
          >
            <InlineIcon
              className="mx-4"
              icon={"mdi:account-group"}
              width={19}
              height="19"
            />
            Users List
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeNavStyles : normalNavStyles
            }
            to="/auth/management"
          >
            <InlineIcon
              className="mx-4"
              icon={"mdi:account-settings-variant"}
              width={19}
              height="19"
            />
            Admin Management
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeNavStyles : normalNavStyles
            }
            to="/auth/category"
          >
            <InlineIcon
              className="mx-4"
              icon={"mdi:shape"}
              width={19}
              height="19"
            />
            Category
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeNavStyles : normalNavStyles
            }
            to="/auth/block_user"
          >
            <InlineIcon
              className="mx-4"
              icon={"mdi:account-cancel-outline"}
              width={19}
              height="19"
            />
            Block List
          </NavLink>
        </li>
        <li className="mb-2 p-2 text-secondary fw-normal">
          <InlineIcon
            className="mx-4"
            icon={"mdi:logout"}
            width={19}
            height="19"
          />
          Logout
        </li>
      </ul>
      <div className="w-25 position-fixed  bottom-0 start-0">
        <UserInfo />
      </div>
    </div>
  );
}

const sidebarStyles = {
  height: "100vh",
};
