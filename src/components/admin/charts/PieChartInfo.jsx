import React from "react";

export default function PieChartInfo({ information }) {
  return (
    <div className="mt-5">
      {information.map((info) => (
        <div
          className="w-100 p-2 my-2 rounded-1"
          key={info.style}
          style={info.style}
        >
          <div className="text-center">{info.value}</div>
        </div>
      ))}
    </div>
  );
}
