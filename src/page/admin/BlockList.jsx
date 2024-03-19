import React, { useState } from "react";
import { useUserQuery } from "../../hooks/useUserQuery";
import { getAllUsers } from "../../services/user.service";
import UserTable from "../../components/admin/table/UserTable";
import DataTable from "../../components/admin/table/DataTable";

export default function BlockList() {
  const [query, setQuery] = useState({
    skip: 1,
    limit: 5,
    sortBy: "createdAt",
    order: -1,
    username: "",
    email: "",
    phoneNumber: "",
    role: "USER",
    status: "SUSPENDED",
    description: "",
  });

  const buildQueryString = (query) => {
    const {
      skip,
      limit,
      sortBy,
      order,
      username,
      email,
      phoneNumber,
      role,
      status,
      description,
    } = query;

    return `?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}&username=${username}&email=${email}&phoneNumber=${phoneNumber}&role=${role}&status=${status}&description=${description}`;
  };

  return (
    <div>
      <div className="position-relative py-5">
        <DataTable
          rows={[5, 10, 25, 100]}
          query={query}
          setQuery={setQuery}
          fetchQueryFn={useUserQuery}
          getFn={getAllUsers}
          buildQueryFn={buildQueryString}
          Table={UserTable}
          termName={"username"}
        />
      </div>
    </div>
  );
}
