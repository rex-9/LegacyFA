import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ColumnChart = ({
  expense,
  income,
}: {
  expense: string;
  income: string;
}) => {
  const options: ApexOptions = {
    colors: ["#1A56DB", "#FDBA8C"],
    chart: {
      type: "bar",
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          colors: ["gray"],
          fontSize: "12px",
          fontFamily: "Mooli, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-yaxis-label",
        },
        offsetX: -15,
        formatter: (value: number) => {
          let val = Math.abs(value);
          if (val >= 1000) {
            val = parseInt((val / 1000).toFixed(0) + "k");
          }
          return "$" + val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    annotations: {
      points: [
        {
          x: 15,
          y: 4050,
          marker: {
            size: 3,
            fillColor: "#EC61CB",
            strokeColor: "#EC61CB",
            strokeWidth: 3,
            shape: "circle",
          },
          label: {
            borderWidth: 0,
            text: expense.toString(),
            textAnchor: "start",
            offsetX: 15,
            offsetY: 14,
            style: {
              background: "#fff",
              color: "gray",
              fontSize: "12px",
              fontWeight: 600,
              fontFamily: "Mooli, Arial, sans-serif",
              cssClass: "apexcharts-point-annotation-label",
            },
          },
        },
        {
          x: 100,
          y: 4050,
          marker: {
            size: 3,
            fillColor: "#8C76FF",
            strokeColor: "#8C76FF",
            strokeWidth: 3,
            shape: "circle",
            radius: 2,
          },
          label: {
            borderWidth: 0,
            text: income.toString(),
            textAnchor: "start",
            offsetX: 15,
            offsetY: 14,
            style: {
              background: "#fff",
              color: "gray",
              fontSize: "12px",
              fontWeight: 600,
              fontFamily: "Mooli, Arial, sans-serif",
              cssClass: "apexcharts-point-annotation-label",
            },
          },
        },
      ],
    },
  };

  const series = [
    {
      name: "Expenses",
      color: "#EC61CB",
      data: [3310, 3220, 3300, 2210, 2220, 1230, 3110],
    },
    {
      name: "Income",
      color: "#8C76FF",
      data: [2310, 1220, 630, 3210, 1220, 3230, 1110],
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "50px",
        right: "0",
        bottom: "0",
        left: "0",
        padding: "15px 25px",
      }}
    >
      <Chart options={options} series={series} type="bar" />
    </div>
  );
};

export default ColumnChart;
