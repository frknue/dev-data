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

export default function FrameworksChart(props) {
  const [chartColor, setChartColor] = useState("#000");
  const theme = useTheme().theme;
  useEffect(() => {
    if(theme === "dark") {
      setChartColor("#fff");
    } else {
      setChartColor("#000");
    }
    
  }, [theme]);


  const frameworksLabel = Object.keys(props.chartData.frameworks);
  const frameworksData = Object.values(props.chartData.frameworks);

  const allData: unknown[] = [];
  for (let i = 0; i < frameworksData.length; i++) {
    allData.push({
      label: frameworksLabel[i],
      data: frameworksData[i],
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
          display: false,
        },
      },
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Frameworks",
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
