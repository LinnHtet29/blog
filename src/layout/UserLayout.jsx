import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../components/public/footer/Footer";
import router from "../routes/index";
import ConfirmationModal from "../components/common/ConfirmationModal";
import { useParams } from "react-router-dom";

export default function UserLayout() {
  const location = useLocation();

  const currentRoute = location.pathname;
  const { id } = useParams();

  const getDynamicTitle = () => {
    switch (currentRoute) {
      case "/user/profile":
        return "Profile";
      case "/user/create_blog":
        return "Create Content";
      case `/user/update_blog/${id}`:
        return "Update Content";
      case `/user/blog/${id}`:
        return "Content Detail";
      default:
        return "";
    }
  };
  return (
    <>
      <nav className="logo d-flex justify-content-between w-100 bg-white position-fixed top-0 start-0 z-3 py-2 px-5 border border-1 border-bottom border-secondary border-opacity-25">
        <h3>{getDynamicTitle()}</h3>
        <div>
          <button
            onClick={() => router.navigate(-1)}
            className="btn btn-light rounded-1 fw-bold me-3"
          >
            Back
          </button>
          <NavLink to="/" className="btn btn-outline-dark rounded-1 fw-bold">
            Home
          </NavLink>
        </div>
      </nav>
      <div className="bg-light">
        <Outlet />
      </div>
      <Footer />
      <ConfirmationModal />
    </>
  );
}
