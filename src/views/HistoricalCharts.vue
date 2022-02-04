<template>
  <layout :active="2" :title="true">
  <div class="content-body">
      
      <highcharts class="chart-wrapper container" :constructor-type="'stockChart'" :options="chartBTC" ref="chart"></highcharts>
  </div>
  </layout>
</template>

<script>
import Layout from "../components/dashboard/Layout.vue";
import axios from 'axios';
export default {
    components: { Layout },
    data() {
        return {
            chartBTC: {
                rangeSelector: {
                    buttons: [{
                        type: 'hour',
                        count: 1,
                        text: '1h'
                    }, {
                        type: 'day',
                        count: 1,
                        text: '1D'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1M'
                    }, {
                        type: 'month',
                        count: 3,
                        text: '3M'
                    },{
                        type: 'month',
                        count: 3,
                        text: '3M'
                    }, {
                        type: 'all',
                        count: 1,
                        text: 'All'
                    }],
                    inputEnabled: false
                },

                title: {
                    text: 'BTC Bitcoin Price'
                },
                series: [
                {
                    name: 'BTC',
                    data: [],
                    type: 'area',
                    color: 'Purple',
                    //gapSize: 5,
                    tooltip: {
                        valueDecimals: 2
                    },
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [[0,'#ffcccc'], [1, '#ffffff']]
                    },
                    threshold: null
                }
                ]
            }
        }
    },

    created() {
        this.getStaticData();
    },

    methods: {
        getStaticData() {
            axios.get('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/new-intraday.json')
            .then(response=>{
                this.chartBTC.series[0].data = response.data;
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>

<style>

</style>