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
export default function ProgrammingChart(props) {
  const [chartColor, setChartColor] = useState("#000");
  const theme = useTheme().theme;
  useEffect(() => {
    if(theme === "dark") {
      setChartColor("#fff");
    } else {
      setChartColor("#000");
    }
    
  }, [theme]);

  const programmingLangsLabels = Object.keys(props.chartData.programmingLangs);
  const programmingLangsData = Object.values(props.chartData.programmingLangs);

  const allDataProgramming: unknown[] = [];
  for (let i = 0; i < programmingLangsData.length; i++) {
    allDataProgramming.push({
      label: programmingLangsLabels[i],
      data: programmingLangsData[i],
    });
  }
  allDataProgramming.sort((a, b) => b.data - a.data);
  const sortedProgrammingLabels = allDataProgramming.map((e) => e.label);
  const sortedProgrammingData = allDataProgramming.map((e) => e.data);
  
  const labels = sortedProgrammingLabels;
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
        label: "Programming Languages",
        data: sortedProgrammingData,
        backgroundColor: [chartColor],
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
