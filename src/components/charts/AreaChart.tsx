import { useContext } from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../../App";

const AreaChart = ({ label }: { label: string }) => {
  const theme = useContext(ThemeContext);

  const options = {
    chart: {
      id: "area-chart",
      height: "100%",
      maxWidth: "100%",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
      curve: "smooth" as const,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "horizontal",
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
        gradientTo: "right",
        colorStops: [
          {
            offset: 0,
            color: theme === "light" ? "blue" : "lightblue",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: theme === "light" ? "purple" : "pink",
            opacity: 0.3,
          },
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  const series = [
    {
      name: label,
      data: [0, 2418, 6456, 5555, 6526, 4356, 6558.67],
      color: "#1A56DB",
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        bottom: "-15%",
        right: "0",
      }}
    >
      <Chart options={options} series={series} type="area" />
    </div>
  );
};

export default AreaChart;
