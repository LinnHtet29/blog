import React, { useEffect, useState } from "react";
import FormModal from "../../common/FormModal";
import CategoryForm from "../form/CategoryForm";

export default function DataTable({
  rows,
  query,
  setQuery,
  fetchQueryFn,
  getFn,
  buildQueryFn,
  Table,
  termName,
}) {
  const [currentPage, setCurrentPage] = useState(query.skip);
  const [selectedRow, setSelectedRow] = useState(query.limit);
  const [term, setTerm] = useState(query.title);

  useEffect(() => {
    setQuery({ ...query, skip: currentPage, limit: selectedRow, title: term });
  }, [currentPage, selectedRow, term]);

  const { data, isLoading, isError, refetch } = fetchQueryFn([query], () =>
    getFn(buildQueryFn(query))
  );

  const totalPages = data
    ? Math.ceil(data.data.items.totalCount / query.limit)
    : 0;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleInputChange = (e) => {
    setTerm(e.target.value);
    setCurrentPage(1);
    setQuery({
      ...query,
      skip: 1,
      limit: selectedRow,
      [termName]: e.target.value,
    });
  };

  const handleSortBy = (sortBy) => {
    setQuery({
      ...query,
      skip: 1,
      limit: selectedRow,
      sortBy,
      order:
        query.sortBy !== sortBy
          ? -1
          : query.order === -1
          ? 1
          : query.order === 1
          ? 0
          : -1,
    });
  };

  return (
    <>
      <FormModal Form={CategoryForm} refetch={refetch} />
      <div className="w-25 position-absolute top-0 start-0 mt-3">
        <select
          value={selectedRow}
          onChange={(e) => {
            setSelectedRow(e.target.value);
            setCurrentPage(1);
            setQuery({
              ...query,
              skip: 1,
              limit: e.target.value,
              title: term,
            });
          }}
        >
          {rows.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="w-25 position-absolute top-0 end-0 mt-3">
        <input
          value={term}
          onChange={handleInputChange}
          className="w-100 px-1"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="w-25 position-absolute bottom-0 start-0 mb-3">
        <span>
          Page {currentPage} out of {totalPages}{" "}
          {totalPages > 1 ? "pages" : "page"}
        </span>
      </div>
      <div className="w-auto position-absolute bottom-0 end-0 mb-2">
        <div className="input-group justify-content-end">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="btn btn-sm btn-outline-primary"
          >
            First
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage <= 1}
            className="btn btn-sm btn-outline-primary"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              onClick={() => handlePageChange(index + 1)}
              key={index}
              className={
                currentPage !== index + 1
                  ? "btn btn-sm btn-outline-primary"
                  : "btn btn-sm btn-primary"
              }
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="btn btn-sm btn-outline-primary"
          >
            Next
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="btn btn-sm btn-outline-primary"
          >
            Last
          </button>
        </div>
      </div>
      {data && (
        <Table
          data={data.data.items}
          refetch={refetch}
          sortBy={query.sortBy}
          order={query.order}
          handleSortBy={handleSortBy}
        />
      )}
    </>
  );
}
