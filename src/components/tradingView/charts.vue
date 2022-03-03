<template>
  <div class="TradingViewCharts">
    <VueTradingView :options="{
      symbol: 'AVAUSD',
      theme: 'dark',
      width: 'auto',
      height: 800,
      interval: 'D',
      timezone: 'America/New_York',
      style: 1,
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      details: true,
      hotlist: true,
      calendar: true,
      range: '12M',  
    }" />
  </div>
</template>
 
<script>
import VueTradingView from 'vue-trading-view';
 
export default {
  name: 'TradingViewCharts',
  props: {
    msg: String
  },
  components: {
    VueTradingView,
  }
}
</script>