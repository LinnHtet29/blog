import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/sidebar/Sidebar";
import Header from "../components/admin/Header";
import ConfirmationModal from "../components/common/ConfirmationModal";

export default function AdminLayout() {
  return (
    <div className="d-flex overflow-hidden">
      <aside className="w-25">
        <div className="w-25 position-fixed start-0 top-0">
          <Sidebar />
        </div>
      </aside>
      <div className="w-75 h-100 overflow-auto">
        <Header />
        <div style={outletStyles}>
          <Outlet />
        </div>
      </div>
      <ConfirmationModal />
    </div>
  );
}

const outletStyles = {
  padding: "3.7rem 2rem 1rem 2rem",
  background: "#f8f9fa",
  minWidth: "100%",
  minHeight: "100vh",
  overflow: "auto",
};
