<template>
  <div class="sidebar">
    <router-link class="brand-logo" to="/index">
      <img src="../../assets/images/logo.png" alt="" />
      <span>Ivan-Stake Dashboard </span></router-link
    >
    <div class="menu">
      <ul>
        <li :class="active === 1 && 'active'">
          <router-link to="/index" :class="active === 1 && 'active'">
            <span><i class="mdi mdi-view-dashboard"></i></span>
            <span class="nav-text">Home</span>
          </router-link>
        </li>
         <li :class="active === 2 && 'active'">
          <router-link to="/HistoricalCharts" :class="active === 2 && 'active'">
            <span><i class="mdi mdi-repeat"></i></span>
            <span class="nav-text">Historical Charts</span>
          </router-link>
        </li>
        <li :class="active === 3 && 'active'">
          <router-link to="/TradingCharts" :class="active === 3 && 'active'">
            <span><i class="mdi mdi-account"></i></span>
            <span class="nav-text">Trading Charts</span>
          </router-link>
        </li>
        <li :class="active === 4 && 'active'">
          <router-link to="/PubSub" :class="active === 4 && 'active'">
            <span><i class="mdi mdi-account"></i></span>
            <span class="nav-text">Pub-Sub</span>
          </router-link>
        </li>
        <li :class="active === 5 && 'active'">
          <router-link to="/APIIntegration" :class="active === 5 && 'active'">
            <span><i class="mdi mdi-account"></i></span>
            <span class="nav-text">API Integration</span>
          </router-link>
        </li>
        <li :class="active === 6 && 'active'">
          <router-link to="/News" :class="active === 6 && 'active'">
            <span><i class="mdi mdi-account"></i></span>
            <span class="nav-text">Crypto Currency News</span>
          </router-link>
        </li>
        <li :class="active === 7 && 'active'">
          <router-link to="/Validator" :class="active === 7 && 'active'">
            <span><i class="mdi mdi-account"></i></span>
            <span class="nav-text">Validator</span>
          </router-link>
        </li>
        <!--
        <li :class="active === 4 && 'active'">
          <router-link to="settings" :class="active === 4 && 'active'">
            <span><i class="mdi mdi-settings"></i></span>
            <span class="nav-text">Setting</span>
          </router-link>
        </li> -->
      </ul>
    </div>

    <div class="sidebar-footer">
      <!-- <div class="social">
        <a to="#"><i class="fa fa-youtube-play"></i></a>
        <a to="#"><i class="fa fa-instagram"></i></a>
        <a to="#"><i class="fa fa-twitter"></i></a>
        <a to="#"><i class="fa fa-facebook"></i></a>
      </div>
      <div class="copy_right">© {{ new Date().getFullYear() }} Ivan-Stake</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    active: Number,
  },
};
</script>
