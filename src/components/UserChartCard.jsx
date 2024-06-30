import React from "react";
import { Line } from "react-chartjs-2";
import { generateRandomData } from "../utils/graph-utils";

function UserChartCard({ itemData }) {
  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    aspectRatio: 6, // Adjust the aspect ratio as needed
    maintainAspectRatio: true,
  };
  const graphData = generateRandomData(30);
  const labels = graphData.map((item) => item.x);
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Users",
        data: graphData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const formattedValue = (number) => {
    if (isNaN(number)) {
      return number;
    } else {
      return number.toLocaleString();
    }
  };
  return (
    <div className="graph-card">
      <p className="font-medium text-truncate">{itemData.label}</p>
      <p
        className="font-medium"
        style={{
          fontSize: "24px",
        }}
      >
        {formattedValue(itemData.value)}
      </p>
      <div className="flex justify-center" style={{ width: "100%" }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default UserChartCard;
