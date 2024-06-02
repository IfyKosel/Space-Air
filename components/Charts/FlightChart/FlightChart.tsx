import React from "react";
import { ChartOption } from "@/types/types";
import BarChart from "../BarChart/BarChart";

type Props = {};

const FlightChart = (props: Props) => {
  const option: ChartOption = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Local", "International"],
      icon: "circle",
      textStyle: {
        color: "#2B303466",
        fontSize: 12,
        fontWeight: "600",
      },
      bottom: "10px",
      left: "3%",
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    grid: {
      left: "4%",
      right: "1%",
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        data: [
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
        ],
        axisLabel: {
          color: "#2B303466",
          fontSize: 12,
          fontWeight: "600",
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        // min: 0,
        // max: 2000000,
        axisLabel: {
          color: "#2B303466",
          fontSize: 12,
          fontWeight: "600",

          //   formatter: (value: number) => {
          //     return `₦${value.toFixed(1)}`;
          //   },
        },
      },
    ],
    series: [
      {
        itemStyle: {
          color: "#00B69B",
          barborderRadius: [3],
        },
        name: "Local",
        type: "bar",
        data: [610, 610, 610, 610, 610, 610, 610, 610, 610, 610, 610, 610],
      },
      {
        itemStyle: {
          color: "#FF9500",
          barborderRadius: [3],
        },
        name: "International",
        type: "bar",
        data: [350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350, 350],
      },
    ],
  };

  return <BarChart {...option} />;
};

export default FlightChart;
