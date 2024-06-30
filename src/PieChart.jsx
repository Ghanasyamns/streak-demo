import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const pieChartData = [
    { label: "Category A", value: Math.floor(Math.random() * 100) },
    { label: "Category B", value: Math.floor(Math.random() * 100) },
    { label: "Category C", value: Math.floor(Math.random() * 100) },
  ];
  const data = {
    labels: pieChartData.map((item) => item.label),
    datasets: [
      {
        label: "# of Votes",
        data: pieChartData.map((item) => item.value),
        backgroundColor: ["green", "blue", "red"],
        borderColor: ["green", "blue", "red"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="pie-container">
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
