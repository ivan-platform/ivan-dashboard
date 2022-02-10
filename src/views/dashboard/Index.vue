<template>
  <layout :active="1" :title="true">
    <!-- <toster /> -->
    <div class="content-body">
      <div>
        <div class="row">
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h1>Avalanche</h1>
                   
                  </div>
                  <div class="widget-info">
                    <h3>73.962</h3>
                    <p>AVAX</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h1>Solana</h1>
                    
                  </div>
                  <div class="widget-info">
                    <h3>Coming Soon</h3>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h1>Chainlink</h1>
                    
                  </div>
                  <div class="widget-info">
                    <h3>Coming Soon</h3>
                  </div>
                </div>
              </div>
             
            </div>


          </div>
          
        </div>
      </div>
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
export default {
  name: "Index",
  components: {
  //  TimelineChart,
   // CurrencyForm,
    Layout,
    // WalletChart,
    // BtcChart,
    // Toster,
  },
  data() {
    return {
      active: "all",
    };
  },
};
</script>
