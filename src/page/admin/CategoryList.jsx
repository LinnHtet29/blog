import React, { useState } from "react";
import { useCategoryQuery } from "../../hooks/useCategoryQuery";
import { getAllCategories } from "../../services/category.service";
import DataTable from "../../components/admin/table/DataTable";
import CategoryTable from "../../components/admin/table/CategoryTable";
import { useDispatch } from "react-redux";
import { setFormModal } from "../../redux/features/system/modalStatusSlice";

export default function BlockList() {
  const dispatch = useDispatch();
  const openForm = () => {
    dispatch(setFormModal(true));
  };
  const [query, setQuery] = useState({
    skip: 1,
    limit: 5,
    sortBy: "createdAt",
    order: -1,
    name: "",
  });

  const buildQueryString = (query) => {
    const { skip, limit, sortBy, order, name } = query;

    return `?skip=${skip}&limit=${limit}&sortBy=${sortBy}&order=${order}&name=${name}`;
  };

  return (
    <>
      <button
        onClick={openForm}
        className="btn btn-outline-primary position-fixed fw-bold mt-2 end-0 top-0 me-4"
        style={{ zIndex: 10 }}
      >
        Add
      </button>
      <div>
        <div className="position-relative py-5">
          <DataTable
            rows={[5, 10, 25, 100]}
            query={query}
            setQuery={setQuery}
            fetchQueryFn={useCategoryQuery}
            getFn={getAllCategories}
            buildQueryFn={buildQueryString}
            Table={CategoryTable}
            termName={"name"}
          />
        </div>
      </div>
    </>
  );
}
