import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Card } from "./Card";
import jsonData from "../../Data.json";

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Oct 1, 2022 - Feb 21, 2024",
        data: [10000, 40000, 22000, 44000, 20000, 40000, 20050, 40000],
      },
      {
        name: "Oct 1, 2022 - Feb 21, 2024",
        data: [27000, 30007, 35000, 40009, 47000, 42006, 43005, 36007],
      },
    ],
    options: {
      chart: {
        height: 300,
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

  const [Date, setDate] = useState("");

  const filterSeriesData = (predicate: any) => {
    setChartData((prevData) => ({
      ...prevData,
      series: prevData.series.map((series) => ({
        ...series,
        data: series.data.filter(predicate),
      })),
    }));
  };

  const handleFilterData = () => {
    // For example, let's filter out data points
    filterSeriesData((dataPoint: any) => dataPoint <= 30000);
    console.log("===>");
  };

  console.log(Date);

  return (
    <div className="bg-white rounded-[10px]">
      <div className="flex mb-5 justify-between">
        {jsonData.map((items, index) => (
          <Card key={index} props={items} />
        ))}
        <div className="items-center mt-12 mr-3">
          <ChevronDownIcon className="h-4 w-4" />
        </div>
      </div>
      {/* <div className="ml-3">
        <input
          className="ml-3 bg-gray-200 rounded-[4px] px-4 py-1"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          className="ml-3 bg-gray-200 rounded-[4px]  px-4 py-1"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          className="ml-10 bg-gray-200 rounded-[4px] px-4 py-1"
          onClick={handleDateRangeSelection}
        >
          Apply
        </button>
      </div> */}
      <div>
        <button
          className="ml-3 bg-gray-200 rounded-[4px] px-4 py-1"
          onClick={(e) => setDate(e.target.value)}
          value="2"
        >
          3M
        </button>
        <button
          className="ml-3 bg-gray-200 rounded-[4px] px-4 py-1"
          onClick={(e) => setDate(e.target.value)}
          value="4"
        >
          6M
        </button>
        <button
          className="ml-3 bg-gray-200 rounded-[4px] px-4 py-1"
          onClick={(e) => setDate(e.target.value)}
          value="6"
        >
          1Y
        </button>
        <button
          className="ml-3 bg-gray-200 rounded-[4px] px-4 py-1"
          onClick={(e) => setDate(e.target.value)}
          value="8"
        >
          All
        </button>
        <button
          className="ml-3 bg-gray-200 rounded-[4px] px-4 py-1"
          onClick={handleFilterData}
        >
          Filter Data
        </button>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={300}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
