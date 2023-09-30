import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { IRevenue } from "../../interface";

const DoubleAreaChart = ({ revenues }: { revenues: IRevenue[] }) => {
  const [lastYear, thisYear] = revenues;

  const options: ApexOptions = {
    chart: {
      id: "area-chart",
      height: "100%",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 2,
      curve: "smooth" as const,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    xaxis: {
      categories: [
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
      labels: {
        show: true,
        style: {
          colors: [
            "gray",
            "gray",
            "gray",
            "gray",
            "gray",
            "gray",
            "gray",
            "gray",
            "gray",
            "gray",
            "gray",
            "gray",
          ],
          fontSize: "12px",
          fontFamily: "Mooli, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
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
    annotations: {
      points: [
        {
          x: 550,
          y: 10000,
          marker: {
            size: 3,
            fillColor: "red",
            strokeColor: "red",
            strokeWidth: 3,
            shape: "circle",
          },
          label: {
            borderWidth: 0,
            text: lastYear.year.toString(),
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
          x: 625,
          y: 10000,
          marker: {
            size: 3,
            fillColor: "lightblue",
            strokeColor: "lightblue",
            strokeWidth: 3,
            shape: "circle",
            radius: 2,
          },
          label: {
            borderWidth: 0,
            text: thisYear.year.toString(),
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
      name: lastYear.year.toString(),
      data: lastYear.data,
      color: "red",
    },
    {
      name: thisYear.year.toString(),
      data: thisYear.data,
      color: "lightblue",
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "30px",
        right: "0",
        bottom: "0",
        left: "0",
        padding: "15px 25px",
      }}
    >
      <Chart options={options} series={series} type="area" height="100%" />
    </div>
  );
};

export default DoubleAreaChart;
