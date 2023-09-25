import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const BarChart = ({ data ,options }) => (
  <div className="bar-chart">
    <Bar data={data} options={options} />
  </div>
);


export default BarChart;
