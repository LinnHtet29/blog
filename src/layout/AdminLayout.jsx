import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/sidebar/Sidebar";
import Header from "../components/admin/Header";

export default function AdminLayout() {
  return (
    <div className="d-flex">
      <aside className="w-25">
        <Sidebar />
      </aside>
      <div className="w-75 h-100">
        <Header />
        <div style={outletStyles}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

const outletStyles = {
  padding: "2rem",
  background: "#f8f9fa",
  minWidth: "100%",
  minHeight: "90vh",
  overflow: "auto",
};
