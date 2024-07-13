"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

interface InvestmentChartProps {
  initialValue: number;
  months: number;
}

const InvestmentChart: React.FC<InvestmentChartProps> = ({ initialValue, months }) => {
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const labels = Array.from({ length: months }, (_, i) => `Mês ${i + 1}`);
    const data = Array.from({ length: months }, (_, i) => initialValue * Math.pow(1 + 0.0052, i));

    setChartData({
      labels,
      datasets: [
        {
          label: 'Evolução do Investimento',
          data,
          fill: false,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    });
  }, [initialValue, months]);

  return <Line data={chartData} />;
};

export default InvestmentChart;
