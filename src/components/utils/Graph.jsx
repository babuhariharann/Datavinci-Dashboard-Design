import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const Graph = () => {
  const data = {
    labels: ["0", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Dataset 1",
        data: [6, 9, 6, 8, 6, 8.5, 9, 5],
        backgroundColor: "rgba(29, 78, 216, 0.2)",
        borderColor: "#1d4ed8",
        pointBorderColor: "#1d4ed8",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 4,
        tension: 0.5,
      },
      {
        label: "Dataset 2",
        data: [4, 7, 5, 6, 7, 6.5, 8, 6],
        backgroundColor: "rgba(248, 113, 113, 0.2)",
        borderColor: "#f87171",
        pointBorderColor: "#f87171",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.parsed.y.toFixed(1)}K`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: "#6b7280",
        },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + "K",
          font: {
            size: 12,
          },
          color: "#6b7280",
        },
      },
    },
    onClick: (event, activeElements) => {
      if (activeElements.length > 0) {
        const datasetIndex = activeElements[0].datasetIndex;
        const dataIndex = activeElements[0].index;
        const value = data.datasets[datasetIndex].data[dataIndex];

        console.log(`Clicked on Dataset ${datasetIndex + 1}, Value: ${value}K`);
        // You can perform further actions or display more information based on the clicked data point
      }
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
