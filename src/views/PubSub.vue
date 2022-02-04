<template>
  <layout :active="4" :title="true">
  <div class="content-body">
      <div class="container">
        <div>
            <span class="q-mr-md">RABBITMQ   </span>
            <span :class="status=='connected' ? 'text-green' : 'text-red'">{{status}}</span>
        </div>
        <div>
            <b-btn variant="success" @click="connect">Start</b-btn>
            <b-btn variant="danger" @click="unsubscribe">Stop</b-btn>
        </div>
        <b-table
            title="Cryptocurrency Data"
            striped hover fixed 
            :items="data"
        />
        <div>
        <highcharts :options="chartBTC"  :constructor-type="'stockChart'"  ref="chartBTC"></highcharts>
        </div>
        <br>
        <div>
        <highcharts :options="chartETH"  :constructor-type="'stockChart'" ref="chartETH"></highcharts>
        </div>
        <br>
        <div>
        <highcharts :options="chartLTC"  :constructor-type="'stockChart'" ref="chartLTC"></highcharts>
        </div>
    </div>
    
    
  </div>
  </layout>
</template>

<script>
import Stomp from 'webstomp-client'
import Layout from "../components/dashboard/Layout.vue";
export default {
  components: { Layout },
  data () {                    
    return {
      BTC: {},
      ETH: {},
      LTC: {},
      status: 'disconnected',
      columns: [
        { name: 'Crypto', label: 'Crypto', field: 'Crypto' },
        { name: 'name', label: 'Name', field: 'name' },
        { name: 'price', label: 'Price', field: 'price' }
      ],
      data: [
        {Crypto: 'BTC', name: 'Bitcoin', price: ''},
        {Crypto: 'ETH', name: 'Ethereum', price: ''},
        {Crypto: 'LTC', name: 'Litecoin', price: ''}
      ],
      chartBTC: {
           title: {
                    text: 'BTC Bitcoin Price'
                },
        series: [
                {
                    name: 'BTC',
                    data: [],
                    // type: 'area',
                    tooltip: {
                        valueDecimals: 2
                    }
                }
                ]
      },
      chartETH: {
           title: {
                    text: 'ETH Ethereum Price'
                },
        series: [
                {
                    name: 'ETH',
                    data: [],
                    // type: 'area',
                    tooltip: {
                        valueDecimals: 2
                    }
                }
                ]
      },
      chartLTC: {
           title: {
                    text: 'LTC Litecoin Price'
                },
        series: [
                {
                    name: 'LTC',
                    data: [],
                    // type: 'area',
                    tooltip: {
                        valueDecimals: 2
                    }
                }
                ]
      }

    }
  },

  methods: {
    connect() {
      var self=this
      var url = 'ws://localhost:15674/ws';
      var login = 'guest', password = 'guest';
      var clients=Stomp.client(url);
      
      function onError() {
          console.log("disconnected")
          self.status = 'disconnected'
      }
      function onConnect() {
        console.log("connected")

        self.BTC = clients.subscribe('/queue/BTC',function(d){
          self.data[0].price=d.body.toString().substring(0,6)
          self.chartBTC.series[0].data.push([new Date().getTime(), parseInt(d.body)])
         
        });

        self.ETH = clients.subscribe('/queue/ETH',function(d){
          self.data[1].price=d.body.toString().substring(0,5)
          self.chartETH.series[0].data.push([new Date().getTime(), parseInt(d.body)])
        });

        self.LTC = clients.subscribe('/queue/LTC',function(d){
          self.data[2].price=d.body.toString().substring(0,5)
          self.chartLTC.series[0].data.push([new Date().getTime(), parseInt(d.body)])
        });
        
        self.status = 'connected'
      }
      
      clients.connect(login, password, onConnect, onError);
    },

    unsubscribe() {
      var self=this
      self.BTC.unsubscribe();
      self.ETH.unsubscribe();
      self.LTC.unsubscribe();
      self.status = 'disconnected'
    }
  }
//   ,
//   created() {
//       this.connect()
//   }
}

</script>

