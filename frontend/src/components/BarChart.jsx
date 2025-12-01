import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { StoreContext } from "../context/storeContext.jsx";
import "chart.js/auto";

export function BarChart() {
  const { data, loading } = useContext(StoreContext);

  if (loading) return <p>Loading chart...</p>;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const Bdata = {
    labels: data.map((d) => d["Product Name"]),
    datasets: [
      {
        label: "Quantity Sold",
        data: data.map((d) => d.Quantity),
        backgroundColor: [
          'rgba(255,99,132,0.5)',
          'rgba(54,162,235,0.5)',
          'rgba(255,206,86,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(153,102,255,0.5)',
        ],
      },
    ],
  };

  return (
    <div className="min-w-80 min-h-64">
      <Bar data={Bdata} options={options} />
    </div>
  );
}
