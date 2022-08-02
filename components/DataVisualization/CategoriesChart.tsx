import React, { useState, useEffect} from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "next-themes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CategoriesChart(props) {
  const [chartColor, setChartColor] = useState("#000");
  const theme = useTheme().theme;
  useEffect(() => {
    if(theme === "dark") {
      setChartColor("#fff");
    } else {
      setChartColor("#000");
    }
    
  }, [theme]);

  const categoriesLabel = Object.keys(props.chartData.categories);
  const categoriesData = Object.values(props.chartData.categories);

  const allData = [];
  for (let i = 0; i < categoriesData.length; i++) {
    allData.push({
      label: categoriesLabel[i],
      data: categoriesData[i],
    });
  }
  allData.sort((a, b) => b.data - a.data);
  const sortedLabels = allData.map((e) => e.label);
  const sortedData = allData.map((e) => e.data);

  const labels = sortedLabels;
  const options = {
    indexAxis: "x",
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Categories",
        data: sortedData,
        backgroundColor: [chartColor],
      },
    ],
  };
  return (
    <div className="chartContainer">
      <Bar options={options} data={data} />
    </div>
  );
}
