<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  // props: ["chartdata", "options"],
  data() {
    return {
      chartdata: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
        ],

        datasets: [
          {
            label: "Sales Stats",
            borderColor: "rgba(185, 180, 255,1)",
            borderWidth: 2,
            borderRadius: 0,
            backgroundColor: "rgba(185, 180, 255,.6)",
            lineTension: 0,
            data: [10, 30, 20, 40, 30, 40, 30, 50, 35],
          },
        ],
      },
      options: {
        title: {
          display: !1,
        },
        tooltips: { enabled: false },

        legend: {
          display: !1,
        },
        responsive: !0,
        maintainAspectRatio: !1,
        hover: {
          mode: "null",
          display: !1,
        },
        scales: {
          xAxes: [
            {
              display: !1,
              gridLines: !1,
              scaleLabel: {
                display: !0,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: !1,
              gridLines: !1,
              scaleLabel: {
                display: !0,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: !0,
              },
            },
          ],
        },
        elements: {
          point: {
            radius: 0,
            borderWidth: 0,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0,
          },
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
