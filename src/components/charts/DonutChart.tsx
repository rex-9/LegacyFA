import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const DonutChart = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: [
      "Supermarkets",
      "Transfers",
      "Restaurants",
      "Cash",
      "Study",
      "Others",
    ],
    colors: ["#5168FE", "#5ECAFF", "#9D5DFF", "#EA60FE", "#EB54B1", "#392C6B"],
    plotOptions: {
      pie: {
        customScale: 0.7,
        donut: {
          size: "85%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                const total = w.globals.seriesTotals
                  .reduce((a: number, b: number) => {
                    return a + b;
                  }, 0)
                  .toFixed(2);
                return `$${total}`;
              },
            },
            value: {
              formatter: function (val) {
                return `$${val}`;
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [186.65, 207.82, 197.25, 340, 500.85, 93.04];

  return (
    <div className="w-[85%]">
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default DonutChart;
