<template>
  <apexchart
    type="radialBar"
    height="260"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
import apexchart from "vue-apexcharts";
export default {
  components: { apexchart },
  data() {
    return {
      series: [76, 67, 61, 90],
      chartOptions: {
        chart: {
          height: 260,
          type: "radialBar",
        },
        tooltip: {
          enabled: true,
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 360,
            hollow: {
              margin: 5,
              size: "20%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: [
          "rgba(94, 55, 255,1)",
          "rgba(94, 55, 255,0.7)",
          "rgba(94, 55, 255,0.3)",
          "rgba(94, 55, 255,0.1)",
        ],
        labels: ["Bitcoin", "Litecoin", "Ripple", "Dash"],
        legend: {
          show: false,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
      },
    };
  },
};
</script>
