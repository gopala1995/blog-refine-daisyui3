import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Card } from "./Card";
import jsonData from "../../Data.json";

const ApexChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Oct 1, 2022 - Feb 21, 2024",
        data: [4500, 35200, 38000, 24000, 40000, 40000, 1050, 10000],
      },
      {
        name: "Oct 1, 2022 - Feb 21, 2024",
        data: [27000, 39007, 30000, 40009, 47000, 5006, 38005, 27007],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [3, 5, 3],
        curve: "smooth",
        dashArray: [0, 5, 3],
      },
      title: {
        text: "Page Statistics",
        align: "left",
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          "Oct 2022",
          "Dec 2022",
          "Feb 2023",
          "Apr 2023",
          "Jun 2023",
          "Aug 2023",
          "Oct 2023",
          "Dec 2023",
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return " May 2022";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return " May 2023";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: "#f5f5f5",
      },
    },
  });

  return (
    <div className="bg-white rounded-[10px]">
      <div className="flex mb-5 justify-between">
        {jsonData.map((items, index) => (
          <Card key={index} props={items} />
        ))}
        <div className="items-center mt-12 mr-1">
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
