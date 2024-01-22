import React from "react";
import PieChart from "../../components/admin/charts/PieChart";
import PieChartInfo from "../../components/admin/charts/PieChartInfo";
import BlogTable from "../../components/admin/table/BlogTable";

export default function Dashboard() {
  const information = [
    { style: { background: "#487BE3" }, value: 400 },
    { style: { background: "#F99244" }, value: 200 },
    { style: { background: "#FF4041" }, value: 30 },
  ];

  return (
    <div className="overflow-auto">
      <div className="d-flex gap-5">
        <div className="w-100">
          <h6>Blog List</h6>
          <PieChart />
        </div>
        <div className="w-100">
          <h6>Blog Information</h6>
          <PieChartInfo information={information} />
        </div>
      </div>
      <BlogTable />
    </div>
  );
}
