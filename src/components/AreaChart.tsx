import Chart from "react-apexcharts";

const AreaChart = ({ label }: { label: string }) => {
  // Define the chart options and data
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
      width: 2, // Adjust the width value to make the border thinner
      curve: "smooth" as "smooth", // Make the lines smoother
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
            color: "blue",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: "purple",
            opacity: 0.3,
          },
        ],
        gradientToColors: ["blue", "purple"],
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
