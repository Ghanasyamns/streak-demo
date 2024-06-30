import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { generateRandomData, labels } from "../utils/graph-utils";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function BarChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
    aspectRatio: 2,
    maintainAspectRatio: true,
    height: "500px",
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Users",
        data: generateRandomData(labels.length),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className="mt-20">
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
