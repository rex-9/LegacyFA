import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { IExpense } from "../../interface";

const DonutChart = ({ expenses }: { expenses: IExpense[] }) => {
  const theme = useContext(ThemeContext);
  const fields = expenses.map((expense) => expense.field);
  const amounts = expenses.map((expense) => expense.amount);

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: fields,
    colors: ["#5168FE", "#5ECAFF", "#9D5DFF", "#EA60FE", "#EB54B1", "#392C6B"],
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: "85%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              color: theme === "light" ? "#000" : "#fff",
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
              color: theme === "light" ? "#000" : "#fff",
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

  const series = amounts;

  return (
    <div className="w-[83%]">
      <Chart options={options} series={series} type="donut" height={"150%"} />
    </div>
  );
};

export default DonutChart;
