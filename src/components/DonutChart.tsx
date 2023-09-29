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

// const DonutChart = () => {
//   const options: ApexOptions = {
//     series: [35.1, 23.5, 2.4, 5.4],
//     colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
//     chart: {
//       height: 320,
//       width: "100%",
//       type: "donut",
//     },
//     stroke: {
//       colors: ["black"],
//       // colors: ["transparent"],
//       lineCap: undefined,
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           labels: {
//             show: true,
//             name: {
//               show: true,
//               fontFamily: "Inter, sans-serif",
//               offsetY: 20,
//             },
//             total: {
//               showAlways: true,
//               show: true,
//               label: "Unique visitors",
//               fontFamily: "Inter, sans-serif",
//               formatter: function (w) {
//                 const sum = w.globals.seriesTotals.reduce(
//                   (a: number, b: number) => {
//                     return a + b;
//                   },
//                   0
//                 );
//                 return `${sum}k`;
//               },
//             },
//             value: {
//               show: true,
//               fontFamily: "Inter, sans-serif",
//               offsetY: -20,
//               // formatter: function (value) {
//               //   return value + "k";
//               // },
//             },
//           },
//           size: "80%",
//         },
//       },
//     },
//     grid: {
//       padding: {
//         top: -2,
//       },
//     },
//     labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
//     dataLabels: {
//       enabled: false,
//     },
//     legend: {
//       position: "bottom",
//       fontFamily: "Inter, sans-serif",
//     },
//     yaxis: {
//       labels: {
//         formatter: function (value) {
//           return value + "k";
//         },
//       },
//     },
//     xaxis: {
//       labels: {
//         formatter: function (value) {
//           return value + "k";
//         },
//       },
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//     },
//   };

//   const series = [35.1, 23.5, 2.4, 5.4];
//   const colors = ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"];

//   return (
//     <div
//       style={{
//         position: "absolute",
//         // top: "50px",
//         // right: "0",
//         // bottom: "0",
//         // left: "0",
//         padding: "15px 25px",
//       }}
//     >
//       <Chart options={options} series={series} colors={colors} type="bar" />
//     </div>
//   );
// };

// export default DonutChart;
