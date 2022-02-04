<template>
  <layout :active="1" :title="true">
    <!-- <toster /> -->
    <div class="content-body">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <!-- <div class="row">
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h5>Balance</h5>
                    <p class="text-success">
                      133% <span><i class="las la-arrow-up"></i></span>
                    </p>
                  </div>
                  <div class="widget-info">
                    <h3>$18,235.0</h3>
                    <p>USD</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h5>Balance</h5>
                    <p class="text-danger">
                      133% <span><i class="las la-arrow-down"></i></span>
                    </p>
                  </div>
                  <div class="widget-info">
                    <h3>$18,235.0</h3>
                    <p>USD</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h5>Balance</h5>
                    <p class="text-success">
                      133% <span><i class="las la-arrow-up"></i></span>
                    </p>
                  </div>
                  <div class="widget-info">
                    <h3>$18,235.0</h3>
                    <p>USD</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6">
                <div class="widget-card">
                  <div class="widget-title">
                    <h5>Balance</h5>
                    <p class="text-danger">
                      133% <span><i class="las la-arrow-down"></i></span>
                    </p>
                  </div>
                  <div class="widget-info">
                    <h3>$18,235.0</h3>
                    <p>USD</p>
                  </div>
                </div>
              </div>
            </div> -->

            <div class="row">
              <div class="col-xl-8 col-lg-12 col-xxl-8">
                <div class="card profile_chart transparent">
                  <div class="card-header">
                    <div class="chart_current_data">
                      <h3>254856 <span>USD</span></h3>
                      <p class="text-success">125648 <span>USD (20%)</span></p>
                    </div>
                    <div class="duration-option">
                      <a
                        id="all"
                        class="c-pointer"
                        @click="active = 'all'"
                        :class="active === 'all' && 'active'"
                        >ALL</a
                      >
                      <a
                        id="one_month"
                        class="c-pointer"
                        @click="active = '1m'"
                        :class="active === '1m' && 'active'"
                        >1M</a
                      >
                      <a
                        id="six_months"
                        class="c-pointer"
                        @click="active = '6m'"
                        :class="active === '6m' && 'active'"
                        >6M</a
                      >
                      <a
                        id="one_year"
                        class="c-pointer"
                        @click="active = '1y'"
                        :class="active === '1y' && 'active'"
                        >1Y</a
                      >
                      <a
                        id="ytd"
                        class="c-pointer"
                        @click="active = 'ytm'"
                        :class="active === 'ytm' && 'active'"
                        >YTD</a
                      >
                    </div>
                  </div>
                  <div class="card-body">
                    <!-- <div id="timeline-chart"></div> -->
                    <TimelineChart />
                    <div class="chart-content text-center">
                      <div class="row">
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">24hr Volume</p>
                            <strong>$1236548.325</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">Market Cap</p>
                            <strong>19B USD</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">Circulating</p>
                            <strong>29.4M BTC</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">All Time High</p>
                            <strong>19.783.06 USD</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">Typical hold</p>
                            <strong>88 days</strong>
                          </div>
                        </div>
                        <div class="col-xl-4 col-sm-6 col-6">
                          <div class="chart-stat">
                            <p class="mb-1">Trading activity</p>
                            <strong>70% buy </strong>
                          </div>
                        </div>
                        <!-- <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">Popularity </p>
                                                        <strong>#1 most held </strong>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 col-sm-6 col-6">
                                                    <div class="chart-stat">
                                                        <p class="mb-1">Popularity </p>
                                                        <strong>#1 most held </strong>
                                                    </div>
                                                </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-12 col-xxl-4">
                <div class="card balance-widget transparent">
                  <div class="card-body">
                    <!-- <div id="wallet-chart"></div> -->
                    <wallet-chart />
                    <div class="balance-widget mt-5">
                      <h4>Total Balance : <strong>$125480</strong></h4>
                      <ul class="list-unstyled">
                        <li class="media">
                          <i class="cc BTC mr-3"></i>
                          <div class="media-body">
                            <h5 class="m-0">Bitcoin</h5>
                          </div>
                          <div class="text-right">
                            <h5>0.000242 BTC</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li class="media">
                          <i class="cc LTC mr-3"></i>
                          <div class="media-body">
                            <h5 class="m-0">Litecoin</h5>
                          </div>
                          <div class="text-right">
                            <h5>0.000242 LTC</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li class="media">
                          <i class="cc XRP mr-3"></i>
                          <div class="media-body">
                            <h5 class="m-0">Ripple</h5>
                          </div>
                          <div class="text-right">
                            <h5>0.000242 XRP</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                        <li class="media">
                          <i class="cc DASH mr-3"></i>
                          <div class="media-body">
                            <h5 class="m-0">Dash</h5>
                          </div>
                          <div class="text-right">
                            <h5>0.000242 XRP</h5>
                            <span>0.125 USD</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-xxl-12">
                <div class="row">
                  <div class="col-xl-4">
                    <div class="widget-card">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="widget-stat">
                          <div class="coin-title">
                            <span><i class="cc BTC-alt"></i></span>
                            <h5 class="d-inline-block ml-2 mb-3">
                              Bitcoin
                              <span>(24h)</span>
                            </h5>
                          </div>
                          <h4>
                            USD 1254.36
                            <span class="badge badge-success ml-2">+ 06%</span>
                          </h4>
                        </div>
                        <btc-chart />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="widget-card">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="widget-stat">
                          <div class="coin-title">
                            <span><i class="cc ETH-alt"></i></span>
                            <h5 class="d-inline-block ml-2 mb-3">
                              Ethereum
                              <span>(24h)</span>
                            </h5>
                          </div>
                          <h4>
                            USD 1254.36
                            <span class="badge badge-danger ml-2">- 06%</span>
                          </h4>
                        </div>
                        <btc-chart />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="widget-card">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <div class="widget-stat">
                          <div class="coin-title">
                            <span><i class="cc LTC-alt"></i></span>
                            <h5 class="d-inline-block ml-2 mb-3">
                              Litecoin
                              <span>(24h)</span>
                            </h5>
                          </div>
                          <h4>
                            USD 1254.36
                            <span class="badge badge-primary ml-2"> 06%</span>
                          </h4>
                        </div>
                        <btc-chart />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="row">
              <div class="col-xl-6 col-lg-12 col-xxl-4">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Exchange</h4>
                  </div>
                  <div class="card-body">
                    <currency-form />
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-12 col-xxl-8">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Transaction</h4>
                  </div>
                  <div class="card-body">
                    <div class="transaction-widget">
                      <ul class="list-unstyled">
                        <li class="media">
                          <span class="sold-thumb"
                            ><i class="la la-arrow-down"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 BTC</h4>
                          </div>
                        </li>
                        <li class="media">
                          <span class="buy-thumb"
                            ><i class="la la-arrow-up"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 LTC</h4>
                          </div>
                        </li>
                        <li class="media">
                          <span class="sold-thumb"
                            ><i class="la la-arrow-down"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 XRP</h4>
                          </div>
                        </li>
                        <li class="media">
                          <span class="buy-thumb"
                            ><i class="la la-arrow-up"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 XRP</h4>
                          </div>
                        </li>
                        <li class="media">
                          <span class="buy-thumb"
                            ><i class="la la-arrow-up"></i
                          ></span>
                          <div class="media-body">
                            <p>
                              <small>9 November, 2020</small>
                              <small>15:33</small>
                            </p>
                            <p class="wallet-address text-dark">
                              15f5s8s47bhj61r8w4e77e5e56
                            </p>
                          </div>
                          <div class="text-right">
                            <h4>0.000242 XRP</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
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
import TimelineChart from "../../components/dashboard/charts/TimelineChart.vue";
import CurrencyForm from "../../components/CurrencyForm";
import Layout from "../../components/dashboard/Layout.vue";
import WalletChart from "../../components/dashboard/charts/WalletChart.vue";
import BtcChart from "../../components/dashboard/charts/BtcChart.vue";
// import Toster from "../../components/dashboard/Toster.vue";
export default {
  name: "Index",
  components: {
    TimelineChart,
    CurrencyForm,
    Layout,
    WalletChart,
    BtcChart,
    // Toster,
  },
  data() {
    return {
      active: "all",
    };
  },
};
</script>
