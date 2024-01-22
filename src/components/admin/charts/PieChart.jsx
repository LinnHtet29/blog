import { InlineIcon } from "@iconify/react";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  { name: "Approved", value: 400 },
  { name: "Pending", value: 200 },
  { name: "Reject", value: 30 },
];
const COLORS = ["#487BE3", "#F99244", "#FF4041"];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

  render() {
    return (
      <div className="d-flex gap-3">
        <PieChart width={200} height={200} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={90}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label position={"center"} value={"Total"} dy={-10} />
            <Label position={"center"} value={"10"} dy={10} />
          </Pie>
        </PieChart>
        <div className="d-flex flex-column justify-content-between pt-5 pb-3">
          <div className="d-inline-flex align-items-center gap-2">
            <InlineIcon
              icon={"mdi:square-rounded"}
              color="#487BE3"
              width={16}
              height="16"
            />
            <span>Approved</span>
          </div>
          <div className="d-inline-flex align-items-center gap-2">
            <InlineIcon
              icon={"mdi:square-rounded"}
              color="#F99244"
              width={16}
              height="16"
            />
            <span>Pending</span>
          </div>
          <div className="d-inline-flex align-items-center gap-2">
            <InlineIcon
              icon={"mdi:square-rounded"}
              color="#FF4041"
              width={16}
              height="16"
            />
            <span>Reject</span>
          </div>
        </div>
      </div>
    );
  }
}
