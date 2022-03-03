<template>
  <layout :active="1" :title="true">
    <!-- <toster /> -->
    <div class="content-body">
      <div>
        <div class="row">
          <div class="col-xl-12">
            <div class="row">

              <!-- <div class="col-xl-1 col-lg-6 col-md-6">
              </div> -->


              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <div>
                      <img src="../../assets/images/avalanche-avax-logo.png"
                           alt="avalanche logo"  class="center" @click="goToValidator()">
                    </div>
                  </div>
                  <div>
                    <h1 class="center">AVALANCHE</h1>
                  </div>
                  <div class="widget-info">
                    
                    <!-- <Validator @getavalanchetotal="getavalanchestakeTotal">{{avalancheTotal}}</Validator> -->
                    <h3 class="center">{{ $store.state.avalanche_data.api_data.stakeTotal.toFixed(2) }}
                      <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:25px;font-weight:100;border-radius:15px;padding-left:5px;padding-right:5px;">AVAX</span>
                    </h3>
                  </div>
                </div>
              </div>



              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <div>
                      <img src="../../assets/images/ethereum-avax-logo.svg"
                           alt="avalanche logo"  class="center" @click="goToValidator()">
                    </div>
                  </div>
                  <div>
                    <h1 class="center">ETHEREUM</h1>
                  </div>
                  <div class="widget-info">
                    
                    <!-- <Validator @getavalanchetotal="getavalanchestakeTotal">{{avalancheTotal}}</Validator> -->
                    <h3 class="center">0
                      <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:25px;font-weight:100;border-radius:15px;padding-left:5px;padding-right:5px;">ETH</span>
                    </h3>
                  </div>
                </div>
              </div>




              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <div>
                      <img src="../../assets/images/Solana_logo.jpeg"
                           alt="avalanche logo" class="center" @click="goToValidator()">
                    </div>
                  </div>
                  <div>
                    <h1 class="center">SOLANA</h1>
                  </div>
                  <div class="widget-info">
                    <h3 class="center"> 0
                      <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:25px;font-weight:100;border-radius:15px;padding-left:5px;padding-right:5px;">SOL</span>
                    </h3>
                  </div>
                </div>
              </div>


              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <div>
                      <img src="../../assets/images/chainlink-logo.png"
                           alt="avalanche logo" class="center" @click="goToValidator()">
                    </div>
                  </div>
                  <div>
                    <h1 class="center">CHAINLINK</h1>
                  </div>
                  <div class="widget-info">
                    <h3 class="center">0 
                      <span style="color:white;background-color:rgba(109, 109, 242,1);font-size:25px;font-weight:100;border-radius:15px;padding-left:5px;padding-right:5px;">LINK</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div>
                <!-- <button class="btn" @click="getIvanAPIPostData">Add by Random Number</button> -->
                <!-- {{$store.state.avalanche_data.api_data.ivanapi_post_data}} -->
                <!-- {{ $store.state.avalanche_data.api_data.tableData }} -->
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <br><br>
      <TradingViewCharts></TradingViewCharts>
      <br><br>

    </div>
  </layout>
</template>

<script>
// import TimelineChart from "../../components/dashboard/charts/TimelineChart.vue";
// import CurrencyForm from "../../components/CurrencyForm";
import Layout from "../../components/dashboard/Layout.vue";
// import WalletChart from "../../components/dashboard/charts/WalletChart.vue";
// import BtcChart from "../../components/dashboard/charts/BtcChart.vue";
// import Toster from "../../components/dashboard/Toster.vue";
//import Validator from "../../views/Validator.vue"
// import { mapActions} from 'vuex';
import TradingViewCharts from '../../components/tradingView/charts.vue';


export default {
  name: "Index",
  components: {
  //  TimelineChart,
   // CurrencyForm,
    Layout,
    // WalletChart,
    // BtcChart,
    // Toster,
    //Validator,
    TradingViewCharts,


  },
 
  data() {
    return {
      active: "all",
    };
  },
  mounted(){
    this.$store.dispatch("getIvanAPIPostData");
  },
  methods:{
    goToValidator(){
      this.$router.push({
        name: "Validator",
        parames :{}
        });
    }

  },
};
</script>


<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.widget-card{
  width : 100%
}
</style>