import { BootstrapVue, DropdownPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App.vue";
import "./assets/css/custome.css";
import "./assets/css/popup.css";
import "./assets/css/style.css";
import "./components/validation/errorMessage";
import router from "./router";
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import exportingInit from "highcharts/modules/exporting";

exportingInit(Highcharts)
stockInit(Highcharts)
Vue.use(HighchartsVue)
Vue.use(DropdownPlugin);
Vue.use(BootstrapVue);
// Vue.use(VeeValidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
