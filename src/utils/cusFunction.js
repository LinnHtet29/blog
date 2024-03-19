export const getStatusClassName = (status) => {
  switch (status) {
    case "APPROVED":
      return "approved-status";
    case "PENDING":
      return "pending-status";
    case "REJECTED":
      return "rejected-status";
    default:
      return "";
  }
};
export const getActiveSortOrder = (upOrDown, order) => {
  if (upOrDown === "up") {
    return order === 1 ? "black" : "#707070";
  }
  if (upOrDown === "down") {
    return order === -1 ? "black" : "#707070";
  }
};
export const getSortByClassName = (colName, sortBy) => {
  return `${sortBy === colName ? "d-inline" : "d-none"} position-relative`;
};
