import React from "react";
import { useSelector } from "react-redux";

export default function ProcessLoading() {
  const isLoading = useSelector((state) => state.loading.isLoading);

  return (
    isLoading && (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    )
  );
}
