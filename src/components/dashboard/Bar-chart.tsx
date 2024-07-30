import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [chartData, setChartData] = useState<{
        labels: string[];
        datasets: {
          data: number[];
          backgroundColor: string;
        }[];
      }>({
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: '#3b82f6', // Blue color
          },
        ],
      });

  useEffect(() => {
    // Generate sample data
    const sampleData = [
      { label: 'Jan', value: 50 },
      { label: 'Feb', value: 75 },
      { label: 'Mar', value: 100 },
      { label: 'Apr', value: 80 },
      { label: 'May', value: 90 },
      { label: 'Jun', value: 85 },
    ];

    setChartData({
      labels: sampleData.map((item) => item.label),
      datasets: [
        {
          data: sampleData.map((item) => item.value),
          backgroundColor: '#3b82f6', // Blue color
        },
      ],
    });
  }, []);

  return (
    <div className="w-full h-96 p-6  rounded-lg">
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: 'Dynamic Bar Chart',
              font: {
                size: 18,
                weight: 'bold',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
