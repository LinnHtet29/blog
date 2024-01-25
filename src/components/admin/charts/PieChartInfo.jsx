import React from "react";

export default function PieChartInfo({ countData }) {
  const information = [
    {
      style: { background: "#487BE3" },
      value: countData.approved,
    },
    {
      style: { background: "#F99244" },
      value: countData.pending,
    },
    {
      style: { background: "#FF4041" },
      value: countData.rejected,
    },
  ];
  return (
    <div className="mt-5">
      {information.map((info, index) => (
        <div
          className="w-100 p-2 my-2 rounded-1"
          key={index}
          style={info.style}
        >
          <div className="text-center text-white">{info.value}</div>
        </div>
      ))}
    </div>
  );
}
