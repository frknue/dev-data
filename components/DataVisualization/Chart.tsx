import React, { useState } from "react";
import CategoriesChart from "./CategoriesChart";
import FrameworksChart from "./FrameworksChart";
import ProgrammingChart from "./ProgrammingChart";

function capitalize(str: string) {
  if(str === undefined) return '';
  let splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

function Chart({ data }) {
  const [chartType, setChartType] = useState("Programming Languages");
  const handleSelect = (e) => {
    e.preventDefault();
    setChartType(e.target.value);
  }
  return (
    <div className="my-20 py-8">
      <h2 className="text-3xl font-light">
        <b className="font-base text-brand-green-100"> Top&nbsp;
         {chartType === 'Programming Languages' ? 16 
        : chartType === 'Frameworks' ? 10 
        : 9}</b> {chartType} 
        &nbsp;in {capitalize(data.city)}.
      </h2>
      <div>
        <select
          name="select-chart-type"
          id="chart-type"
          className="text-gray-400 px-4 p-2 my-4 outline-none rounded"
          onChange={handleSelect}
        >
          <option value="Programming Languages">Programming Languages</option>
          <option value="Frameworks">Frameworks</option>
          <option value="Categories">Categories</option>
        </select>
      </div>
      {chartType === "Programming Languages" ? <ProgrammingChart chartData={data} /> : null}
      {chartType === "Frameworks" ? <FrameworksChart chartData={data} /> : null}
      {chartType === "Categories" ? <CategoriesChart chartData={data} /> : null}
    </div>
  );
}

export default Chart;
