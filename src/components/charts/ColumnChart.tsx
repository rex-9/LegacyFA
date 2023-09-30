import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { IFinance } from "../../interface";

const ColumnChart = ({ finance }: { finance: IFinance }) => {
  const options: ApexOptions = {
    colors: ["#1A56DB", "#FDBA8C"],
    chart: {
      type: "bar",
      height: "100%",
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
          colors: ["gray", "gray", "gray", "gray", "gray", "gray", "gray"],
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
          colors: ["gray", "gray", "gray", "gray", "gray", "gray", "gray"],
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
            text: "Expenses",
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
              padding: {
                left: 5,
                right: 5,
                top: 0,
                bottom: 2,
              },
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
            text: "Income",
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
              padding: {
                left: 5,
                right: 5,
                top: 0,
                bottom: 2,
              },
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
      data: finance.expense,
    },
    {
      name: "Income",
      color: "#8C76FF",
      data: finance.income,
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
      <Chart options={options} series={series} type="bar" height={"100%"} />
    </div>
  );
};

export default ColumnChart;
