import React from "react";
import { generateRandomCount } from "../utils/graph-utils";
import UserChartCard from "./UserChartCard";

function UserGroupChart() {
  const cardData = [
    { label: "Users", value: generateRandomCount() },
    { label: "New Users", value: generateRandomCount() },
    { label: "Sessions", value: generateRandomCount() },
    { label: "Number of Sessions Per User", value: generateRandomCount() },
    { label: "Page Views", value: 1.22 },
    { label: "Page Views", value: generateRandomCount() },
    { label: "Pages/Session", value: 1.23 },
    { label: "Avg. Session Duration", value: "00:01" },
    { label: "Bounce Rate", value: "87.16%" },
  ];
  return (
    <div className="user-group">
      {cardData.map((item, i) => (
        <UserChartCard itemData={item} key={i} />
      ))}
    </div>
  );
}

export default UserGroupChart;
