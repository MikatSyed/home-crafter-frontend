import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [chartData, setChartData] = useState<{
        labels: string[];
        datasets: {
          data: number[];
          backgroundColor: string[];
          borderColor: string;
          borderWidth: number;
        }[];
      }>({
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              '#3b82f6', // Blue
              '#10b981', // Green
              '#f59e0b', // Orange
              '#ef4444', // Red
              '#9333ea', // Purple
            ],
            borderColor: '#fff',
            borderWidth: 2,
          },
        ],
      });
  useEffect(() => {
    // Generate sample data
    const sampleData = [
      { label: 'Category 1', value: 25 },
      { label: 'Category 2', value: 20 },
      { label: 'Category 3', value: 15 },
      { label: 'Category 4', value: 10 },
      { label: 'Category 5', value: 30 },
    ];

    setChartData({
      labels: sampleData.map((item) => item.label),
      datasets: [
        {
          data: sampleData.map((item) => item.value),
          backgroundColor: [
            '#3b82f6', // Blue
            '#10b981', // Green
            '#f59e0b', // Orange
            '#ef4444', // Red
            '#9333ea', // Purple
          ],
          borderColor: '#fff',
          borderWidth: 2,
        },
      ],
    });
  }, []);

  return (
    <div className="w-full h-96 p-6  rounded-lg">
      <Pie
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Dynamic Pie Chart',
              font: {
                size: 18,
                weight: 'bold',
              },
            },
            legend: {
              position: 'right',
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
