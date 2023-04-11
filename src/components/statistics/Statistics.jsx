import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const data = [
    {
      name: "Assignment-1",
      marks: 59,
    },
    {
      name: "Assignment-2",
      marks: 57,
    },
    {
      name: "Assignment-3",
      marks: 60,
    },
    {
      name: "Assignment-4",
      marks: 56,
    },
    {
      name: "Assignment-5",
      marks: 60,
    },
    {
      name: "Assignment-6",
      marks: 59,
    },
    {
      name: "Assignment-7",
      marks: 55,
    },
    {
      name: "Assignment-8",
      marks: 60,
    },
  ];

  return (
    <div>
      <div className="section-header">
        <h2>statistics page</h2>
      </div>
      <div className="statistics-container">
        <div className="statistics-content">
          <div style={{ width: "100%" }}>
            <h4>All the assignment marks</h4>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width={500}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="marks"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Statistics;
