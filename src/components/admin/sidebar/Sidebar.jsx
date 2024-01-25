import { InlineIcon } from "@iconify/react";
import React from "react";
import UserInfo from "./UserInfo";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAuth } from "../../../redux/features/auth/authSlice";
import router from "../../../routes";
import { setConfirmationModal } from "../../../redux/features/system/modalStatusSlice";

export default function Sidebar() {
  const dispatch = useDispatch();

  const activeNavStyles = "d-block p-2 bg-primary rounded-2 is-active";
  const normalNavStyles = "d-block p-2 fw-normal text-secondary";

  const logout = () => {
    dispatch(clearAuth());
    router.navigate("/");
  };

  const setLogoutConModal = () => {
    dispatch(
      setConfirmationModal({
        isOpen: true,
        message: "You want to logout!",
        subFn: logout,
      })
    );
  };

  return (
    <div
      style={sidebarStyles}
      className="bg-white position-relative border-1 border-secondary border-opacity-25 border-end"
    >
      <h4 className="p-3 fw-bold text-primary">NORDIC ROSE</h4>
      <ul className="list-unstyled fw-bold text-white mt-4 px-3 sidebar-link-menu">
        <li className="mb-2">
          <NavLink
            to="/auth/dashboard"
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
        <li
          onClick={setLogoutConModal}
          className="mb-2 p-2 text-secondary fw-normal"
        >
          <div>
            <InlineIcon
              className="mx-4"
              icon={"mdi:logout"}
              width={19}
              height="19"
            />
            Logout
          </div>
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
