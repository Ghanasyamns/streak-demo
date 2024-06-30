import React, { useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { generateRandomData, labels } from "../utils/graph-utils";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
function LineChart({ updateFrame, currentFrame }) {
  const graphData = useMemo(() => {
    return generateRandomData(labels.length);
  }, [currentFrame]);
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: "Overview",
      },
    },
    aspectRatio: 3, // Adjust the aspect ratio as needed
    maintainAspectRatio: true,
  };

  const timeFrames = ["Hourly", "Daily", "Weekly"];
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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div style={{ display: "flex" }}>
          {timeFrames.map((item, i) => (
            <button
              key={i}
              onClick={() => updateFrame(item)}
              className="time-item"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default LineChart;
