<template>
<layout :active="3" :title="true">
  
  <div class="content-body">
      <div class="container">
        <VueTradingView :options="{
        symbol: 'BITSTAMP:BTCUSD',
        theme: 'light',
        }" />
      </div>
  </div>
</layout>
</template>
 
<script>
import VueTradingView from 'vue-trading-view';
import Layout from "../components/dashboard/Layout.vue";

export default {
  components: { VueTradingView, Layout }, 
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>
