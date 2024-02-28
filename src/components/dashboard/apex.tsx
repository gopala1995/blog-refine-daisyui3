import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Card } from "./Card";
import jsonData from "../../Data.json";

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Oct 1, 2022 - Feb 21, 2024",
        data: [10000, 20000, 22000, 24000, 40000, 40000, 20050, 20000],
      },
      {
        name: "Oct 1, 2022 - Feb 21, 2024",
        data: [27000, 20007, 20000, 40009, 47000, 42006, 43005, 46007],
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

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateRangeSelection = () => {
    const Startdate = new Date(startDate);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const StartMonth = Startdate.getMonth();
    const StartYear = Startdate.getFullYear();
    const EndDate = new Date(endDate);
    const EndMonth = EndDate.getMonth();
    const EndYear = EndDate.getFullYear();

    console.log(
      "Selected date range:====>",
      monthNames[StartMonth],
      "to",
      StartYear
    );
    console.log(
        "Selected date range:====>",
        monthNames[EndMonth],
        "to",
        EndYear
      );
  };

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
      <div className="ml-3">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="End Date"
        />
        <button onClick={handleDateRangeSelection}>Apply</button>
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