import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

const COLORS = ["#487BE3", "#F99244", "#FF4041"];

const PieChartComponent = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const dataArray = [
    {
      name: "Approved",
      value: data.approved,
    },
    {
      name: "Pending",
      value: data.pending,
    },
    {
      name: "Reject",
      value: data.rejected,
    },
  ];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="d-flex gap-3">
      <PieChart width={200} height={200} onMouseEnter={onPieEnter}>
        <Pie
          data={dataArray}
          cx={90}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {dataArray.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke={index === activeIndex ? "#333" : ""}
            />
          ))}
          <Label position={"center"} value={"Total"} dy={-10} />
          <Label position={"center"} value={data.total} dy={10} />
        </Pie>
      </PieChart>
      <div className="d-flex flex-column justify-content-between pt-5 pb-3">
        {dataArray.map((item, index) => (
          <div key={index} className="d-inline-flex align-items-center gap-2">
            <InlineIcon
              icon={"mdi:square-rounded"}
              color={COLORS[index % COLORS.length]}
              width={16}
              height="16"
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
