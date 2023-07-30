const graphData = {
  lineGraph: {
    categories: [
      "2023-07-29 00:00:00",
      "2023-07-29 02:00:00",
      "2023-07-29 04:00:00",
      "2023-07-29 06:00:00",
      "2023-07-29 08:00:00",
      "2023-07-29 10:00:00",
      "2023-07-29 12:00:00",
      "2023-07-29 14:00:00",
      "2023-07-29 16:00:00",
      "2023-07-29 18:00:00",
      "2023-07-29 20:00:00",
      "2023-07-29 22:00:00",
    ],
    values: [
      60, 75, 90, 50, 80, 70, 100, 85, 70, 90
    ],
  },
  barGraph: {
    categories: [
      "12AM-06AM",
      "06AM-08AM",
      "08AM-10AM",
      "10AM-12PM",
      "12PM-02PM",
      "02PM-04PM",
      "04PM-06PM",
      "06PM-08PM",
      "08PM-10PM",
      "10PM-12AM",
    ],
    values: [
      30, 45, 60, 25, 40, 50, 35, 55, 45, 50
    ],
  },
};

const comboChartData = {
  chart: {
    type: "line",
    stacked: false,
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
  },
  colors: ["#008FFB", "#FF4560"],
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 6,
  },
  stroke: {
    curve: "smooth",
    width: [3, 0], // Line and Bar graph stroke widths
  },
  xaxis: {
    type: "category",
    categories: graphData.barGraph.categories,
    tickPlacement: "on", // Display ticks on the data points
    tickAmount: 24, // Display all 24 x-axis labels
    labels: {
      rotate: -45,
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: [
    {
      title: {
        text: "Seconds",
      },
      labels: {
        formatter: function (value) {
          const hours = Math.floor(value / 3600);
          const minutes = Math.floor((value % 3600) / 60);
          const seconds = value % 60;
          return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Values",
      },
    },
  ],
  tooltip: {
    x: {
      format: "yyyy-MM-dd HH:mm:ss",
    },
  },
  series: [
    {
      name: "Line Graph",
      type: "line",
      data: graphData.lineGraph.values,
    },
    {
      name: "Bar Graph",
      type: "bar",
      data: graphData.barGraph.values,
      yaxisIndex: 1,
    },
  ],
};

const comboChart = new ApexCharts(
  document.querySelector("#comboChart"),
  comboChartData
);

comboChart.render();
