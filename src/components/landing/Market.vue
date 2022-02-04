<template>
  <div
    id="market"
    class="market section-padding page-section"
    data-scroll-index="1"
  >
    <div class="container">
      <div class="row py-lg-5 justify-content-center">
        <div class="col-xl-7">
          <div class="section_heading">
            <span>Explore</span>
            <h3>The World's Leading Treemium ocurrency Exchange</h3>
            <p>
              Trade Bitcoin, ETH, and hundreds of other Treemium ocurrencies in
              minutes.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <div class="market-table">
                <div class="table-responsive">
                  <table class="table mb-0 table-responsive-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Chart</th>
                        <th>Trade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td class="coin_icon">
                          <i class="cc BTC"></i>
                          <span>Bitcoin <b>BTC</b></span>
                        </td>

                        <td>
                          USD 680,175.06
                        </td>
                        <td>
                          <span class="text-success">+1.13%</span>
                        </td>
                        <td id="sparkLink"><market-sparkline /></td>
                        <td><a href="#" class="btn btn-success">Buy</a></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td class="coin_icon">
                          <i class="cc ETH"></i>
                          <span>Ethereum <b>ETH</b></span>
                        </td>

                        <td>
                          USD 680,175.06
                        </td>
                        <td>
                          <span class="text-success">+1.13%</span>
                        </td>
                        <td id="sparkLink"><market-sparkline /></td>
                        <td><a href="#" class="btn btn-success">Buy</a></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td class="coin_icon">
                          <i class="cc BCH-alt"></i>
                          <span>Bitcoin Cash <b>BCH</b></span>
                        </td>

                        <td>
                          USD 680,175.06
                        </td>
                        <td>
                          <span class="text-success">+1.13%</span>
                        </td>
                        <td id="sparkLink"><market-sparkline /></td>
                        <td><a href="#" class="btn btn-success">Buy</a></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td class="coin_icon">
                          <i class="cc LTC"></i>
                          <span>Litecoin <b>LTC</b></span>
                        </td>

                        <td>
                          USD 680,175.06
                        </td>
                        <td>
                          <span class="text-danger">-0.47%</span>
                        </td>
                        <td id="sparkLink"><market-sparkline /></td>
                        <td><a href="#" class="btn btn-success">Buy</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketSparkline from "../dashboard/charts/MarketSparkline.vue";
export default {
  name: "Market",
  components: { MarketSparkline },
  data() {
    return {
      canvasData: [],
    };
  },
  mounted() {
    this.canvasData = document.querySelectorAll("#sparkLink canvas");
    for (let i = 0; i < this.canvasData.length; i++) {
      const element = this.canvasData[i];
      element.style.height = "25px";
      element.style.width = "200px";
    }
    for (let i = 0; i < document.querySelectorAll("#sparkLink").length; i++) {
      const element = document.querySelectorAll("#sparkLink")[i];
      element.style.width = "200px";
    }
  },
  updated() {
    this.canvasData = document.querySelectorAll("#sparkLink canvas");
    for (let i = 0; i < this.canvasData.length; i++) {
      const element = this.canvasData[i];
      element.style.height = "25px";
      element.style.width = "200px";
    }
    for (let i = 0; i < document.querySelectorAll("#sparkLink").length; i++) {
      const element = document.querySelectorAll("#sparkLink")[i];
      element.style.width = "200px";
    }
  },
};
</script>
