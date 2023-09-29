import React from "react";
import Chart from "react-apexcharts";

class ColumnChart extends React.Component {
  state = {
    options: {
      chart: {
        id: "column-chart",
      },
      xaxis: {
        categories: ["Category 1", "Category 2", "Category 3"],
      },
    },
    series: [
      {
        name: "Series 1",
        data: [30, 40, 50],
      },
    ],
  };

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width={500}
        height={320}
      />
    );
  }
}

export default ColumnChart;
