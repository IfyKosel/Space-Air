import React from "react";
import { ChartOption } from "@/types/types";
import BarChart from "../BarChart/BarChart";

type Props = {};

const CabinChart = (props: Props) => {
  const option: ChartOption = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Economy", "Premium Economy", "Business Class", "First Class"],
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
          //   "Aug",
          //   "Sep",
          //   "Oct",
          //   "Nov",
          //   "Dec",
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
          textStyle: {
            color: "#2B303466",
            fontSize: 12,
            fontWeight: "600",
          },
          //   formatter: (value: number) => {
          //     return `₦${value.toFixed(1)}`;
          //   },
        },
      },
    ],
    series: [
      {
        itemStyle: {
          color: "#3D42DF",
          barBorderRadius: [3],
        },
        name: "Economy",
        type: "bar",
        data: [350, 350, 350, 350, 350, 350, 350],
      },
      {
        itemStyle: {
          color: "#4379EE",
          barBorderRadius: [3],
        },
        name: "Premium Economy",
        type: "bar",
        data: [610, 610, 610, 610, 610, 610, 610],
      },
      {
        itemStyle: {
          color: "#00B69B",
          barBorderRadius: [3],
        },
        name: "Business Class",
        type: "bar",
        data: [610, 610, 610, 610, 610, 610, 610],
      },
      {
        itemStyle: {
          color: "#FF9500",
          barBorderRadius: [3],
        },
        name: "First Class",
        type: "bar",
        data: [350, 350, 350, 350, 350, 350, 350],
      },
    ],
  };

  return <BarChart {...option} />;
};

export default CabinChart;
