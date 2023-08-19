import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div>
      <Pie
        
        data={chartData}
        options={{
          plugins: {
            legend: {
                display: false,
              }
          },
        }}
      />
    </div>
  );
}
export default PieChart;